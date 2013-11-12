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

ActiveRecord::Schema.define(version: 20131103193704) do

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
    t.integer  "npa"
    t.string   "city"
    t.string   "place"
    t.string   "website"
    t.string   "password_digest"
    t.text     "description"
    t.text     "affiliations"
    t.boolean  "validated",       default: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "cards", ["card_type_id"], name: "index_cards_on_card_type_id"

  create_table "responsables", force: true do |t|
    t.string   "firstname"
    t.string   "lastname"
    t.string   "email"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
