require 'rails_helper'
require 'rake'

Rails.application.load_tasks

RSpec.describe "cards_update_check.rake" do

  cases = [
    # days_since_update, before_validity, expected_validity, user_email (step), admin_email
    [0, :maintained, "maintained", -1, false],
    [1, :maintained, "maintained", -1, false],

    [180-1, :maintained, "maintained", -1, false],
    [180-1, :solicited, "solicited", -1, false],
    [180, :maintained, "solicited", 0, false], # normal case
    [180, :solicited, "solicited", 0, false],
    [180+1, :solicited, "solicited", -1, false],

    [180+14-1, :solicited, "solicited", -1, false],
    [180+14, :solicited, "solicited", 1, false], # normal case
    [180+14, :maintained, "solicited", 1, false],
    [180+14+1, :solicited, "solicited", -1, false],

    [180+14*2-1, :solicited, "solicited", -1, false],
    [180+14*2, :solicited, "solicited", 2, false], # normal case
    [180+14*2+1, :solicited, "solicited", -1, false],

    [180+14*3-1, :solicited, "solicited", -1, false],
    [180+14*3, :solicited, "solicited", 3, false], # normal case
    [180+14*3+1, :solicited, "solicited", -1, false],

    [180+14*4-1, :solicited, "solicited", -1, false],
    [180+14*4-1, :maintained, "maintained", -1, false],
    [180+14*4-1, :disabled, "disabled", -1, false],
    [180+14*4, :solicited, "disabled", 4, true], # normal case
    [180+14*4, :maintained, "disabled", 4, true],
    [180+14*4, :disabled, "disabled", 4, false],
    [180+14*4+1, :disabled, "disabled", -1, false],

    [180+14*4+60-1, :disabled, "disabled", -1, false],
    [180+14*4+60, :disabled, "disabled", 5, false], # normal case
    [180+14*4+60, :maintained, "disabled", 5, true],
    [180+14*4+60, :solicited, "disabled", 5, true],
    [180+14*4+60+1, :disabled, "disabled", -1, false],

    [180+14*4+60*2-1, :disabled, "disabled", -1, false],
    [180+14*4+60*2, :disabled, "disabled", 6, false], # normal case
    [180+14*4+60*2+1, :disabled, "disabled", -1, false],

    [180+14*4+60*10-1, :disabled, "disabled", -1, false],
    [180+14*4+60*10, :disabled, "disabled", 14, false], # normal case
    [180+14*4+60*10+1, :disabled, "disabled", -1, false],
  ]

  cases.each do |t|
    describe "#{t}" do
      it "should have correct validity" do
        b = CardValidity.new(self, t[0], t[1])
        b.should_have_validity(t[2])
      end

      it "should send email to user accordingly" do
        b = CardValidity.new(self, t[0], t[1])
        if t[3] == -1
          b.should_not_send_user_email
        else
          b.should_send_user_email_with_step(t[3])
        end
      end

      it "should send email to admin accordingly" do
        b = CardValidity.new(self, t[0], t[1]) 
        if t[4]
          b.should_send_admin_email
        else
          b.should_not_send_admin_email
        end
      end
    end
  end
end

# This is a helper class around a card to check its validity and state after
# calling the "cards_update:check" task.
class CardValidity
  def initialize(rspec, days_since_update, before_validity)
    @r = rspec

    @card = FactoryBot.create(:card, validity: before_validity)
    @card.update_attribute(:last_updated, Time.current - days_since_update.days)
  end

  def should_have_validity(validity)
    run_task
    @r.expect(@card.validity).to @r.eq(validity)
  end

  def should_send_user_email_with_step(step)
    @r.expect(CardMailer).to @r.receive(:update_check).with(@card, step).and_call_original
    run_task
  end

  def should_not_send_user_email
    @r.expect(CardMailer).not_to @r.receive(:update_check).and_call_original
    run_task
  end

  def should_send_admin_email
    @r.expect(Admin::CardMailer).to @r.receive(:deactivated).with(@card).and_call_original
    run_task
  end

  def should_not_send_admin_email
    @r.expect(Admin::CardMailer).not_to @r.receive(:deactivated).with(@card).and_call_original
    run_task
  end

  private

  def run_task
    Rake::Task['cards_update:check'].invoke
    Rake::Task['cards_update:check'].reenable 
    @card.reload
  end
end