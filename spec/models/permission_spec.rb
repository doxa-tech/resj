require 'rails_helper'

RSpec.describe Permission, :type => :model do
	let(:article) { create(:article) }

	describe '#allow_modify?' do

		context "all entries" do

			let(:ownership) { create(:ownership, user: create(:user), right_update: true, right_delete: true) }
			let(:permission) { Permission.new(ownership.user) }

			it "should return true with edit action" do
				expect(permission.allow_modify? 'admin/articles', 'edit', article).to be true
			end

			it "should return true with update action" do
				expect(permission.allow_modify? 'admin/articles', 'update', article).to be true
			end

			it "should return true with destroy action" do
				expect(permission.allow_modify? 'admin/articles', 'destroy', article).to be true
			end

		end

		context "on ownership" do

			let(:ownership) { create(:ownership, user: create(:user), right_update: true, right_delete: true, type_name: 'on_ownership') }
			let(:permission) { Permission.new(ownership.user) }
			let(:my_article) { create(:article, user: ownership.user) }

			it "should return true with edit action" do
				expect(permission.allow_modify? 'admin/articles', 'edit', my_article).to be true
			end

			it "should return true with update action" do
				expect(permission.allow_modify? 'admin/articles', 'update', my_article).to be true
			end

			it "should return true with destroy action" do
				expect(permission.allow_modify? 'admin/articles', 'destroy', my_article).to be true
			end

			it "should return nil if it is not my article" do
				expect(permission.allow_modify? 'admin/articles', 'edit', article).to be nil
			end

		end

		context "on entry" do

			let(:ownership) { create(:ownership, user: create(:user), right_update: true, right_delete: true, type_name: 'on_entry', id_element: article.id) }
			let(:permission) { Permission.new(ownership.user) }

			it "should return true with edit action" do
				expect(permission.allow_modify? 'admin/articles', 'edit', article).to be true
			end

			it "should return true with update action" do
				expect(permission.allow_modify? 'admin/articles', 'update', article).to be true
			end

			it "should return true with destroy action" do
				expect(permission.allow_modify? 'admin/articles', 'destroy', article).to be true
			end

			it "should return nil if the ids are not the same" do
				ownership.update_attribute(:id_element, 1000)
				expect(permission.allow_modify? 'admin/articles', 'edit', article).to be nil
			end

		end

	end

	describe '#allow_create?' do

		it "should return true" do
			ownership = create(:ownership, user: create(:user), right_create: true)
			permission = Permission.new(ownership.user)
			expect(permission.allow_create? 'admin/articles').to be true
		end

		it "should return nil" do
			permission = Permission.new(create(:user))
			expect(permission.allow_create? 'admin/articles').to be nil
		end

	end

	describe '#allow_read?' do

		it "should return true" do
			ownership = create(:ownership, user: create(:user), right_read: true)
			permission = Permission.new(ownership.user)
			expect(permission.allow_read? 'admin/articles').to be true
		end

		it "should return nil" do
			permission = Permission.new(create(:user))
			expect(permission.allow_read? 'admin/articles').to be nil
		end

	end

	describe '#allow_action?' do
		pending
	end

	describe '#allow_token?' do
		pending
	end

	describe '#allow_resource?' do
		pending
	end

	describe '#allow_params?' do
		pending
	end

	describe '#records' do
		pending
	end

end
