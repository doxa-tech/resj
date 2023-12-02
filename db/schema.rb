# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_12_19_170017) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "adeia_action_permissions", id: :serial, force: :cascade do |t|
    t.integer "adeia_action_id"
    t.integer "adeia_permission_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["adeia_action_id"], name: "index_adeia_action_permissions_on_adeia_action_id"
    t.index ["adeia_permission_id"], name: "index_adeia_action_permissions_on_adeia_permission_id"
  end

  create_table "adeia_actions", id: :serial, force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "adeia_elements", id: :serial, force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "adeia_group_users", id: :serial, force: :cascade do |t|
    t.integer "adeia_group_id"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["adeia_group_id"], name: "index_adeia_group_users_on_adeia_group_id"
    t.index ["user_id"], name: "index_adeia_group_users_on_user_id"
  end

  create_table "adeia_groups", id: :serial, force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "adeia_permissions", id: :serial, force: :cascade do |t|
    t.string "owner_type"
    t.integer "owner_id"
    t.integer "adeia_element_id"
    t.integer "permission_type"
    t.boolean "read_right", default: false
    t.boolean "create_right", default: false
    t.boolean "update_right", default: false
    t.boolean "destroy_right", default: false
    t.integer "resource_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["adeia_element_id"], name: "index_adeia_permissions_on_adeia_element_id"
    t.index ["owner_type", "owner_id"], name: "index_adeia_permissions_on_owner"
  end

  create_table "adeia_tokens", id: :serial, force: :cascade do |t|
    t.string "token"
    t.boolean "is_valid"
    t.integer "adeia_permission_id"
    t.date "exp_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["adeia_permission_id"], name: "index_adeia_tokens_on_adeia_permission_id"
  end

  create_table "cantons", force: :cascade do |t|
    t.string "name"
    t.string "abbreviation"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "card_parents", force: :cascade do |t|
    t.bigint "card_id"
    t.bigint "parent_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["card_id"], name: "index_card_parents_on_card_id"
    t.index ["parent_id"], name: "index_card_parents_on_parent_id"
  end

  create_table "cards", force: :cascade do |t|
    t.string "name"
    t.integer "card_type"
    t.string "email"
    t.string "street"
    t.string "place"
    t.string "website"
    t.text "description"
    t.string "affiliation"
    t.float "latitude"
    t.float "longitude"
    t.string "avatar"
    t.string "banner"
    t.bigint "location_id"
    t.bigint "user_id"
    t.integer "status"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.datetime "last_updated"
    t.integer "validity", default: 0
    t.index ["location_id"], name: "index_cards_on_location_id"
    t.index ["user_id"], name: "index_cards_on_user_id"
  end

  create_table "locations", force: :cascade do |t|
    t.integer "zip"
    t.string "official_name"
    t.string "post_name"
    t.bigint "canton_id"
    t.float "latitude"
    t.float "longitude"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["canton_id"], name: "index_locations_on_canton_id"
  end

  create_table "orators", force: :cascade do |t|
    t.bigint "user_id"
    t.string "street"
    t.bigint "location_id"
    t.string "disponibility"
    t.text "description"
    t.boolean "disabled", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["location_id"], name: "index_orators_on_location_id"
    t.index ["user_id"], name: "index_orators_on_user_id"
  end

  create_table "orators_themes", force: :cascade do |t|
    t.bigint "orator_id"
    t.bigint "theme_id"
    t.index ["orator_id"], name: "index_orators_themes_on_orator_id"
    t.index ["theme_id"], name: "index_orators_themes_on_theme_id"
  end

  create_table "taggings", force: :cascade do |t|
    t.bigint "card_id"
    t.bigint "tag_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["card_id"], name: "index_taggings_on_card_id"
    t.index ["tag_id"], name: "index_taggings_on_tag_id"
  end

  create_table "tags", force: :cascade do |t|
    t.string "name"
    t.integer "popularity", default: 0
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["name"], name: "index_tags_on_name"
  end

  create_table "themes", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "firstname"
    t.string "lastname"
    t.string "email"
    t.string "password_digest"
    t.string "remember_token"
    t.string "uuid"
    t.string "reset_token"
    t.datetime "reset_sent_at"
    t.boolean "confirmed", default: false
    t.string "avatar"
    t.string "gravatar_email"
    t.boolean "gravatar", default: true
    t.boolean "newsletter", default: true
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "adeia_action_permissions", "adeia_actions"
  add_foreign_key "adeia_action_permissions", "adeia_permissions"
  add_foreign_key "adeia_group_users", "adeia_groups"
  add_foreign_key "adeia_group_users", "users"
  add_foreign_key "adeia_permissions", "adeia_elements"
  add_foreign_key "adeia_tokens", "adeia_permissions"
  add_foreign_key "card_parents", "cards"
  add_foreign_key "card_parents", "cards", column: "parent_id"
  add_foreign_key "cards", "locations"
  add_foreign_key "cards", "users"
  add_foreign_key "locations", "cantons"
  add_foreign_key "orators", "locations"
  add_foreign_key "orators", "users"
  add_foreign_key "taggings", "cards"
  add_foreign_key "taggings", "tags"
end
