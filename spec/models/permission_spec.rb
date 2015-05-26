require 'rails_helper'

RSpec.describe Permission, :type => :model do
	let!(:article) { create(:article) }

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

			it "should return false if I do not own the article" do
				expect(permission.allow_modify? 'admin/articles', 'edit', article).to be false
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

			it "should return false if the ids are not the same" do
				ownership.update_attribute(:id_element, article.id + 1)
				expect(permission.allow_modify? 'admin/articles', 'edit', article).to be false
			end

		end

	end

	describe '#allow_create?' do

		it "should return true" do
			ownership = create(:ownership, user: create(:user), right_create: true)
			permission = Permission.new(ownership.user)
			expect(permission.allow_create? 'admin/articles').to be true
		end

		it "should return false" do
			permission = Permission.new(create(:user))
			expect(permission.allow_create? 'admin/articles').to be false
		end

	end

	describe '#allow_read?' do

		it "should return true" do
			ownership = create(:ownership, user: create(:user), right_read: true)
			permission = Permission.new(ownership.user)
			expect(permission.allow_read? 'admin/articles').to be true
		end

		it "should return false" do
			permission = Permission.new(create(:user))
			expect(permission.allow_read? 'admin/articles').to be false
		end

	end

	describe '#allow_action?' do

		context "all entries" do

			let(:ownership) { create(:ownership, user: create(:user), action: 'share') }
			let(:permission) { Permission.new(ownership.user) }

			it "should return true with the correct action" do
				expect(permission.allow_action? 'admin/articles', 'share', article).to be true
			end

			it "should return false with the incorrect action" do
				expect(permission.allow_action? 'admin/articles', 'like', article).to be false
			end

		end

		context "on ownership" do

			let(:ownership) { create(:ownership, user: create(:user), type_name: 'on_ownership', action: 'share') }
			let(:permission) { Permission.new(ownership.user) }
			let(:my_article) { create(:article, user: ownership.user) }

			it "should return true if I own the article" do
				expect(permission.allow_action? 'admin/articles', 'share', my_article).to be true
			end

			it "should return false if I own the article but with the incorrect action" do
				expect(permission.allow_action? 'admin/articles', 'like', my_article).to be false
			end

			it "should return false if I do not own the article" do
				expect(permission.allow_action? 'admin/articles', 'share', article).to be false
			end

		end

		context "on entry" do

			let(:ownership) { create(:ownership, user: create(:user), type_name: 'on_entry', id_element: article.id, action: 'share') }
			let(:permission) { Permission.new(ownership.user) }

			it "should return true if the ids are the same" do
				expect(permission.allow_action? 'admin/articles', 'share', article).to be true
			end

			it "should return false if the ids are the same but with the incorrect action" do
				expect(permission.allow_action? 'admin/articles', 'like', article).to be false
			end

			it "should return false if the ids are not the same" do
				ownership.update_attribute(:id_element, article.id + 1)
				expect(permission.allow_action? 'admin/articles', 'share', article).to be false
			end

		end

	end

	describe '#allow_token?' do
		
		context "all entries" do
			let(:ownership) { create(:ownership, user: create(:user), right_create: true) }
			let(:permission) { Permission.new(ownership.user) }
			let(:token) { create(:access_token, ownership: ownership) }

			it "should return true" do
				expect(permission.allow_token? 'admin/articles', 'create', token.token, article).to be true
			end	

			it "should return false" do
				expect(permission.allow_token? 'admin/articles', 'update', token.token, article).to be false
			end	
		end

		context "on ownership" do
			let(:ownership) { create(:ownership, user: create(:user), right_create: true, type_name: "on_ownership") }
			let(:permission) { Permission.new(ownership.user) }
			let(:token) { create(:access_token, ownership: ownership) }
			let(:my_article) { create(:article, user: ownership.user) }

			it "should return true if I own the article" do
				expect(permission.allow_token? 'admin/articles', 'create', token.token, my_article).to be true
			end	

			it "should return false if I own the article but with the incorrect action" do
				expect(permission.allow_token? 'admin/articles', 'update', token.token, article).to be false
			end

			it "should return false if I do not own the article" do
				expect(permission.allow_token? 'admin/articles', 'create', token.token, article).to be false
			end
		end

		context "on entry" do
			let(:ownership) { create(:ownership, user: create(:user), right_delete: true, type_name: "on_entry", id_element: article.id) }
			let(:permission) { Permission.new(ownership.user) }
			let(:token) { create(:access_token, ownership: ownership) }

			it "should return true if the ids are the same" do
				expect(permission.allow_token? 'admin/articles', 'destroy', token.token, article).to be true
			end

			it "should return false if the ids are the same but with the incorrect action" do
				expect(permission.allow_token? 'admin/articles', 'update', token.token, article).to be false
			end

			it "should return false if the ids are not the same" do
				ownership.update_attribute(:id_element, article.id + 1)
				expect(permission.allow_token? 'admin/articles', 'destroy', token.token, article).to be false
			end

		end

		context "invalid token" do
			let(:permission) { Permission.new(create(:user)) }

			it "should return false" do
				expect(permission.allow_token? 'admin/articles', 'update', '', article).to be false
			end

		end

	end

	describe '#allow_resource?' do

		context "card" do

			it "should return true if I am member of an active card" do
				permission = Permission.new(create(:active_card).user)
				expect(permission.allow_resource?).to be true
			end

			it "should return false if I am not member of a card" do
				permission = Permission.new(create(:user))
				expect(permission.allow_resource?).to be false
			end

			it "should return false if I am member of a unactive card" do
				permission = Permission.new(create(:card).user)
				expect(permission.allow_resource?).to be false
			end
		end

		context "orators" do

			it "should return true if I am an orator" do
				permission = Permission.new(create(:orator).user)
				expect(permission.allow_resource?).to be true
			end

			it "should return false if I am not an orator" do
				permission = Permission.new(create(:user))
				expect(permission.allow_resource?).to be false
			end

		end
	end

	describe '#allow_params?' do
		let(:ownership) { create(:ownership, user: create(:user), action: "protected") }
		let(:permission) { Permission.new(ownership.user) }

		it "should return true" do
			expect(permission.allow_params? 'admin/articles', 'protected').to be true
		end

		it "should return false" do
			expect(permission.allow_params? 'admin/articles', 'password').to be false
		end
	end

	describe '#records' do
		context "all entries" do
			let(:ownership) { create(:ownership, user: create(:user), right_read: true) }
			let(:permission) { Permission.new(ownership.user) }
			let!(:articles) { create_list(:article, 5) }

			it "should return all articles" do
				expect(permission.records "admin/articles", Article).to match_array (articles << article)
			end

		end

		context "on ownership" do
			let(:ownership) { create(:ownership, user: create(:user), type_name: "on_ownership", right_read: true) }
			let(:permission) { Permission.new(ownership.user) }
			let!(:my_articles) { create_list(:article, 5, user: ownership.user) }

			it "should return his articles" do
				expect(permission.records "admin/articles", Article).to match_array my_articles
			end

		end

		context "on entry" do
			let(:ownership) { create(:ownership, user: create(:user), type_name: "on_entry", right_read: true, id_element: article.id) }
			let(:permission) { Permission.new(ownership.user) }
			let!(:articles) { create_list(:article, 5) }

			it "should return only the corresponding article" do
				expect(permission.records "admin/articles", Article).to eq([article])
			end

		end

		context "token" do
			let(:ownership) { create(:ownership, user: create(:user), right_read: true) }
			let(:permission) { Permission.new(ownership.user) }
			let(:token) { create(:access_token, ownership: ownership) }
			let!(:articles) { create_list(:article, 5) }

			it "should return all articles" do
				expect(permission.records "admin/articles", Article, token.token).to  match_array (articles << article)
			end
		end
	end

end
