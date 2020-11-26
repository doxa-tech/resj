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

  create_table "access_tokens", id: :serial, force: :cascade do |t|
    t.string "token"
    t.boolean "is_valid"
    t.integer "ownership_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.date "exp_at"
    t.index ["ownership_id"], name: "index_access_tokens_on_ownership_id"
    t.index ["token"], name: "index_access_tokens_on_token"
  end

  create_table "actions", id: :serial, force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "activities", id: :serial, force: :cascade do |t|
    t.integer "user_id"
    t.string "action"
    t.integer "trackable_id"
    t.string "trackable_type"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "controller"
    t.index ["trackable_id"], name: "index_activities_on_trackable_id"
    t.index ["user_id"], name: "index_activities_on_user_id"
  end

  create_table "affiliations", id: :serial, force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "article_themes", id: :serial, force: :cascade do |t|
    t.integer "article_id"
    t.integer "theme_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["article_id"], name: "index_article_themes_on_article_id"
    t.index ["theme_id"], name: "index_article_themes_on_theme_id"
  end

  create_table "articles", id: :serial, force: :cascade do |t|
    t.string "title"
    t.text "content"
    t.integer "user_id"
    t.string "image"
    t.integer "likes", default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "published_at"
    t.index ["user_id"], name: "index_articles_on_user_id"
  end

  create_table "cantons", id: :serial, force: :cascade do |t|
    t.string "name"
    t.string "abbreviation"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "card_affiliations", id: :serial, force: :cascade do |t|
    t.integer "card_id"
    t.integer "affiliation_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["affiliation_id"], name: "index_card_affiliations_on_affiliation_id"
    t.index ["card_id"], name: "index_card_affiliations_on_card_id"
  end

  create_table "card_parents", id: :serial, force: :cascade do |t|
    t.integer "card_id"
    t.integer "parent_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["card_id"], name: "index_card_parents_on_card_id"
    t.index ["parent_id"], name: "index_card_parents_on_parent_id"
  end

  create_table "card_responsables", id: :serial, force: :cascade do |t|
    t.integer "card_id"
    t.integer "responsable_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["card_id"], name: "index_card_responsables_on_card_id"
    t.index ["responsable_id"], name: "index_card_responsables_on_responsable_id"
  end

  create_table "card_types", id: :serial, force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "card_users", id: :serial, force: :cascade do |t|
    t.integer "card_id"
    t.integer "user_id"
    t.boolean "user_validated"
    t.boolean "card_validated"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["card_id"], name: "index_card_users_on_card_id"
    t.index ["user_id"], name: "index_card_users_on_user_id"
  end

  create_table "cards", id: :serial, force: :cascade do |t|
    t.integer "card_type_id"
    t.string "name"
    t.string "email"
    t.string "street"
    t.string "place"
    t.string "website"
    t.string "password_digest"
    t.text "description"
    t.text "affiliation"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float "latitude"
    t.float "longitude"
    t.string "avatar"
    t.string "banner"
    t.integer "location_id"
    t.integer "user_id"
    t.integer "status_id"
    t.index ["card_type_id"], name: "index_cards_on_card_type_id"
    t.index ["location_id"], name: "index_cards_on_location_id"
    t.index ["password_digest"], name: "index_cards_on_password_digest"
  end

  create_table "connections", id: :serial, force: :cascade do |t|
    t.string "ip"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_connections_on_user_id"
  end

  create_table "disponibilities", id: :serial, force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "documents", id: :serial, force: :cascade do |t|
    t.string "name"
    t.string "file"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "subject_id"
    t.integer "size"
    t.string "extension"
  end

  create_table "elements", id: :serial, force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "help_categories", id: :serial, force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "help_pages", id: :serial, force: :cascade do |t|
    t.string "name"
    t.text "content"
    t.integer "help_category_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "locations", id: :serial, force: :cascade do |t|
    t.integer "npa"
    t.string "official_name"
    t.string "post_name"
    t.integer "canton_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float "latitude"
    t.float "longitude"
    t.index ["canton_id"], name: "index_locations_on_canton_id"
    t.index ["official_name"], name: "index_locations_on_official_name"
    t.index ["post_name"], name: "index_locations_on_post_name"
  end

  create_table "newsletters", id: :serial, force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "orator_disponibilities", id: :serial, force: :cascade do |t|
    t.integer "orator_id"
    t.integer "disponibility_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["disponibility_id"], name: "index_orator_disponibilities_on_disponibility_id"
    t.index ["orator_id"], name: "index_orator_disponibilities_on_orator_id"
  end

  create_table "orator_themes", id: :serial, force: :cascade do |t|
    t.integer "orator_id"
    t.integer "theme_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["orator_id"], name: "index_orator_themes_on_orator_id"
    t.index ["theme_id"], name: "index_orator_themes_on_theme_id"
  end

  create_table "orators", id: :serial, force: :cascade do |t|
    t.integer "user_id"
    t.string "street"
    t.integer "location_id"
    t.string "phone"
    t.string "disponibility"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "description"
    t.boolean "disabled", default: false
    t.index ["location_id"], name: "index_orators_on_location_id"
    t.index ["user_id"], name: "index_orators_on_user_id"
  end

  create_table "ownership_actions", id: :serial, force: :cascade do |t|
    t.integer "action_id"
    t.integer "ownership_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["action_id"], name: "index_ownership_actions_on_action_id"
    t.index ["ownership_id"], name: "index_ownership_actions_on_ownership_id"
  end

  create_table "ownership_types", id: :serial, force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "ownerships", id: :serial, force: :cascade do |t|
    t.integer "element_id"
    t.integer "user_id"
    t.integer "ownership_type_id"
    t.boolean "right_create"
    t.boolean "right_read"
    t.boolean "right_update"
    t.boolean "right_delete"
    t.integer "id_element"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["element_id"], name: "index_ownerships_on_element_id"
    t.index ["ownership_type_id"], name: "index_ownerships_on_ownership_type_id"
    t.index ["user_id"], name: "index_ownerships_on_user_id"
  end

  create_table "pages", id: :serial, force: :cascade do |t|
    t.string "name"
    t.text "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "parents", id: :serial, force: :cascade do |t|
    t.integer "user_id"
    t.integer "parent_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["parent_id"], name: "index_parents_on_parent_id"
    t.index ["user_id"], name: "index_parents_on_user_id"
  end

  create_table "responsables", id: :serial, force: :cascade do |t|
    t.string "firstname"
    t.string "lastname"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "sessions", id: :serial, force: :cascade do |t|
    t.string "session_id", null: false
    t.text "data"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["session_id"], name: "index_sessions_on_session_id", unique: true
    t.index ["updated_at"], name: "index_sessions_on_updated_at"
  end

  create_table "statuses", id: :serial, force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "subject_themes", id: :serial, force: :cascade do |t|
    t.integer "subject_id"
    t.integer "theme_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["subject_id"], name: "index_subject_themes_on_subject_id"
    t.index ["theme_id"], name: "index_subject_themes_on_theme_id"
  end

  create_table "subjects", id: :serial, force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
  end

  create_table "taggings", id: :serial, force: :cascade do |t|
    t.integer "card_id"
    t.integer "tag_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["card_id"], name: "index_taggings_on_card_id"
    t.index ["tag_id"], name: "index_taggings_on_tag_id"
  end

  create_table "tags", id: :serial, force: :cascade do |t|
    t.string "name"
    t.integer "popularity", default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_tags_on_name"
  end

  create_table "themes", id: :serial, force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_newsletters", id: :serial, force: :cascade do |t|
    t.integer "user_id"
    t.integer "newsletter_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["newsletter_id"], name: "index_user_newsletters_on_newsletter_id"
    t.index ["user_id"], name: "index_user_newsletters_on_user_id"
  end

  create_table "user_types", id: :serial, force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", id: :serial, force: :cascade do |t|
    t.string "email"
    t.string "gravatar_email"
    t.string "password_digest"
    t.string "remember_token"
    t.integer "user_type_id"
    t.string "uid"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "reset_token"
    t.datetime "reset_sent_at"
    t.string "firstname"
    t.string "lastname"
    t.boolean "confirmed", default: false
    t.string "avatar"
    t.boolean "gravatar", default: true
    t.index ["remember_token"], name: "index_users_on_remember_token"
    t.index ["user_type_id"], name: "index_users_on_user_type_id"
  end

end
