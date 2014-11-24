Given /^I visit the card show path$/ do
	visit card_path(@card, locale: :fr)
end


When /^I click on "Editer" on the banner$/ do
	find('.banner').hover
	find('button[class="edit-banner"]').click
end

When /^I complete the banner upload form and submit it$/ do
	attach_file 'card_banner', File.join(Rails.root, '/public/test/cards/banner.jpg'), visible: false
	wait_for_ajax
end

When(/^I complete the banner upload form with wrong extension and submit it$/) do
  attach_file 'card_banner', File.join(Rails.root, '/public/test/cards/banner.abc'), visible: false
  wait_for_ajax
end

# Logo

When /^I click on "Editer" on the logo$/ do
	find('.banner').hover
	find('button[class="edit-logo"]').click
end

When /^I complete the logo upload form and submit it$/ do
	attach_file 'card_avatar', File.join(Rails.root, '/public/test/cards/logo.jpg'), visible: false
	wait_for_ajax
end

When(/^I complete the logo upload form with wrong extension and submit it$/) do
  attach_file 'card_avatar', File.join(Rails.root, '/public/test/cards/logo.abc'), visible: false
  wait_for_ajax
end



Then /^I should see the image "(.+)"$/ do |image|
	expect(page).to have_xpath("//img[contains(@src, \"#{image}\")]")
end