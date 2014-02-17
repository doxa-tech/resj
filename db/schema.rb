# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20140217211635) do

  create_table "actions", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "affiliations", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "cantons", force: true do |t|
    t.string   "name"
    t.string   "abbreviation"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "card_affiliations", force: true do |t|
    t.integer  "card_id"
    t.integer  "affiliation_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "card_affiliations", ["affiliation_id"], name: "index_card_affiliations_on_affiliation_id"
  add_index "card_affiliations", ["card_id"], name: "index_card_affiliations_on_card_id"

  create_table "card_responsables", force: true do |t|
    t.integer  "card_id"
    t.integer  "responsable_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "card_responsables", ["card_id"], name: "index_card_responsables_on_card_id"
  add_index "card_responsables", ["responsable_id"], name: "index_card_responsables_on_responsable_id"

  create_table "card_types", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "card_verifications", force: true do |t|
    t.integer  "card_id"
    t.integer  "user_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "card_verifications", ["card_id"], name: "index_card_verifications_on_card_id"
  add_index "card_verifications", ["user_id"], name: "index_card_verifications_on_user_id"

  create_table "cards", force: true do |t|
    t.integer  "card_type_id"
    t.string   "name"
    t.integer  "responsable_id"
    t.string   "email"
    t.string   "street"
    t.string   "place"
    t.string   "website"
    t.string   "password_digest"
    t.text     "description"
    t.text     "affiliation"
    t.boolean  "validated",       default: false
    t.datetime "created_at"
    t.datetime "updated_at"
    t.float    "latitude"
    t.float    "longitude"
    t.string   "avatar"
    t.string   "banner"
    t.integer  "card_id"
    t.integer  "location_id"
  end

  add_index "cards", ["card_type_id"], name: "index_cards_on_card_type_id"
  add_index "cards", ["location_id"], name: "index_cards_on_location_id"
  add_index "cards", ["responsable_id"], name: "index_cards_on_responsable_id"

  create_table "elements", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "locations", force: true do |t|
    t.integer  "npa"
    t.string   "official_name"
    t.string   "post_name"
    t.integer  "canton_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "locations", ["canton_id"], name: "index_locations_on_canton_id"

  create_table "ownership_actions", force: true do |t|
    t.integer  "action_id"
    t.integer  "ownership_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "ownership_actions", ["action_id"], name: "index_ownership_actions_on_action_id"
  add_index "ownership_actions", ["ownership_id"], name: "index_ownership_actions_on_ownership_id"

  create_table "ownership_types", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "ownerships", force: true do |t|
    t.integer  "element_id"
    t.integer  "user_id"
    t.integer  "ownership_type_id"
    t.boolean  "right_create"
    t.boolean  "right_read"
    t.boolean  "right_update"
    t.boolean  "right_delete"
    t.integer  "id_element"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "ownerships", ["element_id"], name: "index_ownerships_on_element_id"
  add_index "ownerships", ["ownership_type_id"], name: "index_ownerships_on_ownership_type_id"
  add_index "ownerships", ["user_id"], name: "index_ownerships_on_user_id"

  create_table "pages", force: true do |t|
    t.string   "name"
    t.text     "content"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "parents", force: true do |t|
    t.integer  "user_id"
    t.integer  "parent_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "parents", ["parent_id"], name: "index_parents_on_parent_id"
  add_index "parents", ["user_id"], name: "index_parents_on_user_id"

  create_table "responsables", force: true do |t|
    t.string   "firstname"
    t.string   "lastname"
    t.string   "email"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "taggings", force: true do |t|
    t.integer  "card_id"
    t.integer  "tag_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "taggings", ["card_id"], name: "index_taggings_on_card_id"
  add_index "taggings", ["tag_id"], name: "index_taggings_on_tag_id"

  create_table "tags", force: true do |t|
    t.string   "name"
    t.integer  "popularity", default: 0
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "user_types", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", force: true do |t|
    t.string   "email"
    t.string   "gravatar_email"
    t.string   "password_digest"
    t.string   "remember_token"
    t.integer  "user_type_id"
    t.string   "uid"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "reset_token"
    t.datetime "reset_sent_at"
    t.string   "firstname"
    t.string   "lastname"
  end

  add_index "users", ["user_type_id"], name: "index_users_on_user_type_id"

  create_table "verificator_comments", force: true do |t|
    t.text     "content"
    t.integer  "user_id"
    t.integer  "card_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "verificator_comments", ["card_id"], name: "index_verificator_comments_on_card_id"
  add_index "verificator_comments", ["user_id"], name: "index_verificator_comments_on_user_id"

end
