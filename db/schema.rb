# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_02_28_210723) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

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
    t.index ["location_id"], name: "index_cards_on_location_id"
    t.index ["user_id"], name: "index_cards_on_user_id"
  end

  create_table "disponibilities", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
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
    t.boolean "disabled"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["location_id"], name: "index_orators_on_location_id"
    t.index ["user_id"], name: "index_orators_on_user_id"
  end

  create_table "orators_disponibilities", force: :cascade do |t|
    t.bigint "orator_id"
    t.bigint "disponibility_id"
    t.index ["disponibility_id"], name: "index_orators_disponibilities_on_disponibility_id"
    t.index ["orator_id"], name: "index_orators_disponibilities_on_orator_id"
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
    t.boolean "confirmed"
    t.string "avatar"
    t.string "gravatar_email"
    t.boolean "gravatar"
    t.boolean "newsletter", default: true
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

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
