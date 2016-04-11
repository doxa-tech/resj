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

ActiveRecord::Schema.define(version: 20150906134250) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "access_tokens", force: :cascade do |t|
    t.string   "token"
    t.boolean  "is_valid"
    t.integer  "ownership_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.date     "exp_at"
  end

  add_index "access_tokens", ["ownership_id"], name: "index_access_tokens_on_ownership_id", using: :btree
  add_index "access_tokens", ["token"], name: "index_access_tokens_on_token", using: :btree

  create_table "actions", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "activities", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "action"
    t.integer  "trackable_id"
    t.string   "trackable_type"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.string   "controller"
  end

  add_index "activities", ["trackable_id"], name: "index_activities_on_trackable_id", using: :btree
  add_index "activities", ["user_id"], name: "index_activities_on_user_id", using: :btree

  create_table "affiliations", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "article_themes", force: :cascade do |t|
    t.integer  "article_id"
    t.integer  "theme_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "article_themes", ["article_id"], name: "index_article_themes_on_article_id", using: :btree
  add_index "article_themes", ["theme_id"], name: "index_article_themes_on_theme_id", using: :btree

  create_table "articles", force: :cascade do |t|
    t.string   "title"
    t.text     "content"
    t.integer  "user_id"
    t.string   "image"
    t.integer  "likes",        default: 0
    t.datetime "created_at",               null: false
    t.datetime "updated_at",               null: false
    t.datetime "published_at"
  end

  add_index "articles", ["user_id"], name: "index_articles_on_user_id", using: :btree

  create_table "cantons", force: :cascade do |t|
    t.string   "name"
    t.string   "abbreviation"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  create_table "card_affiliations", force: :cascade do |t|
    t.integer  "card_id"
    t.integer  "affiliation_id"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "card_affiliations", ["affiliation_id"], name: "index_card_affiliations_on_affiliation_id", using: :btree
  add_index "card_affiliations", ["card_id"], name: "index_card_affiliations_on_card_id", using: :btree

  create_table "card_parents", force: :cascade do |t|
    t.integer  "card_id"
    t.integer  "parent_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "card_parents", ["card_id"], name: "index_card_parents_on_card_id", using: :btree
  add_index "card_parents", ["parent_id"], name: "index_card_parents_on_parent_id", using: :btree

  create_table "card_responsables", force: :cascade do |t|
    t.integer  "card_id"
    t.integer  "responsable_id"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "card_responsables", ["card_id"], name: "index_card_responsables_on_card_id", using: :btree
  add_index "card_responsables", ["responsable_id"], name: "index_card_responsables_on_responsable_id", using: :btree

  create_table "card_types", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "card_users", force: :cascade do |t|
    t.integer  "card_id"
    t.integer  "user_id"
    t.boolean  "user_validated"
    t.boolean  "card_validated"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "card_users", ["card_id"], name: "index_card_users_on_card_id", using: :btree
  add_index "card_users", ["user_id"], name: "index_card_users_on_user_id", using: :btree

  create_table "cards", force: :cascade do |t|
    t.integer  "card_type_id"
    t.string   "name"
    t.string   "email"
    t.string   "street"
    t.string   "place"
    t.string   "website"
    t.string   "password_digest"
    t.text     "description"
    t.text     "affiliation"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.float    "latitude"
    t.float    "longitude"
    t.string   "avatar"
    t.string   "banner"
    t.integer  "location_id"
    t.integer  "user_id"
    t.integer  "status_id"
  end

  add_index "cards", ["card_type_id"], name: "index_cards_on_card_type_id", using: :btree
  add_index "cards", ["location_id"], name: "index_cards_on_location_id", using: :btree
  add_index "cards", ["password_digest"], name: "index_cards_on_password_digest", using: :btree

  create_table "connections", force: :cascade do |t|
    t.string   "ip"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "connections", ["user_id"], name: "index_connections_on_user_id", using: :btree

  create_table "disponibilities", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "documents", force: :cascade do |t|
    t.string   "name"
    t.string   "file"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "subject_id"
    t.integer  "size"
    t.string   "extension"
  end

  create_table "elements", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "help_categories", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "help_pages", force: :cascade do |t|
    t.string   "name"
    t.text     "content"
    t.integer  "help_category_id"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
  end

  create_table "locations", force: :cascade do |t|
    t.integer  "npa"
    t.string   "official_name"
    t.string   "post_name"
    t.integer  "canton_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.float    "latitude"
    t.float    "longitude"
  end

  add_index "locations", ["canton_id"], name: "index_locations_on_canton_id", using: :btree
  add_index "locations", ["official_name"], name: "index_locations_on_official_name", using: :btree
  add_index "locations", ["post_name"], name: "index_locations_on_post_name", using: :btree

  create_table "newsletters", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "orator_disponibilities", force: :cascade do |t|
    t.integer  "orator_id"
    t.integer  "disponibility_id"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
  end

  add_index "orator_disponibilities", ["disponibility_id"], name: "index_orator_disponibilities_on_disponibility_id", using: :btree
  add_index "orator_disponibilities", ["orator_id"], name: "index_orator_disponibilities_on_orator_id", using: :btree

  create_table "orator_themes", force: :cascade do |t|
    t.integer  "orator_id"
    t.integer  "theme_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "orator_themes", ["orator_id"], name: "index_orator_themes_on_orator_id", using: :btree
  add_index "orator_themes", ["theme_id"], name: "index_orator_themes_on_theme_id", using: :btree

  create_table "orators", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "street"
    t.integer  "location_id"
    t.string   "phone"
    t.string   "disponibility"
    t.datetime "created_at",                    null: false
    t.datetime "updated_at",                    null: false
    t.text     "description"
    t.boolean  "disabled",      default: false
  end

  add_index "orators", ["location_id"], name: "index_orators_on_location_id", using: :btree
  add_index "orators", ["user_id"], name: "index_orators_on_user_id", using: :btree

  create_table "ownership_actions", force: :cascade do |t|
    t.integer  "action_id"
    t.integer  "ownership_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "ownership_actions", ["action_id"], name: "index_ownership_actions_on_action_id", using: :btree
  add_index "ownership_actions", ["ownership_id"], name: "index_ownership_actions_on_ownership_id", using: :btree

  create_table "ownership_types", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "ownerships", force: :cascade do |t|
    t.integer  "element_id"
    t.integer  "user_id"
    t.integer  "ownership_type_id"
    t.boolean  "right_create"
    t.boolean  "right_read"
    t.boolean  "right_update"
    t.boolean  "right_delete"
    t.integer  "id_element"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
  end

  add_index "ownerships", ["element_id"], name: "index_ownerships_on_element_id", using: :btree
  add_index "ownerships", ["ownership_type_id"], name: "index_ownerships_on_ownership_type_id", using: :btree
  add_index "ownerships", ["user_id"], name: "index_ownerships_on_user_id", using: :btree

  create_table "pages", force: :cascade do |t|
    t.string   "name"
    t.text     "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "parents", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "parent_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "parents", ["parent_id"], name: "index_parents_on_parent_id", using: :btree
  add_index "parents", ["user_id"], name: "index_parents_on_user_id", using: :btree

  create_table "responsables", force: :cascade do |t|
    t.string   "firstname"
    t.string   "lastname"
    t.string   "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "sessions", force: :cascade do |t|
    t.string   "session_id", null: false
    t.text     "data"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "sessions", ["session_id"], name: "index_sessions_on_session_id", unique: true, using: :btree
  add_index "sessions", ["updated_at"], name: "index_sessions_on_updated_at", using: :btree

  create_table "statuses", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "subject_themes", force: :cascade do |t|
    t.integer  "subject_id"
    t.integer  "theme_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "subject_themes", ["subject_id"], name: "index_subject_themes_on_subject_id", using: :btree
  add_index "subject_themes", ["theme_id"], name: "index_subject_themes_on_theme_id", using: :btree

  create_table "subjects", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "user_id"
  end

  create_table "taggings", force: :cascade do |t|
    t.integer  "card_id"
    t.integer  "tag_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "taggings", ["card_id"], name: "index_taggings_on_card_id", using: :btree
  add_index "taggings", ["tag_id"], name: "index_taggings_on_tag_id", using: :btree

  create_table "tags", force: :cascade do |t|
    t.string   "name"
    t.integer  "popularity", default: 0
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  add_index "tags", ["name"], name: "index_tags_on_name", using: :btree

  create_table "themes", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "user_newsletters", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "newsletter_id"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "user_newsletters", ["newsletter_id"], name: "index_user_newsletters_on_newsletter_id", using: :btree
  add_index "user_newsletters", ["user_id"], name: "index_user_newsletters_on_user_id", using: :btree

  create_table "user_types", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email"
    t.string   "gravatar_email"
    t.string   "password_digest"
    t.string   "remember_token"
    t.integer  "user_type_id"
    t.string   "uid"
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
    t.string   "reset_token"
    t.datetime "reset_sent_at"
    t.string   "firstname"
    t.string   "lastname"
    t.boolean  "confirmed",       default: false
    t.string   "avatar"
    t.boolean  "gravatar",        default: true
  end

  add_index "users", ["remember_token"], name: "index_users_on_remember_token", using: :btree
  add_index "users", ["user_type_id"], name: "index_users_on_user_type_id", using: :btree

end
