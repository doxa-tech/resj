// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "controllers"
import Rails from '@rails/ujs'
import snapifyTables from "admin/snaptable"

Rails.start();

// Init Snaptable
document.addEventListener("DOMContentLoaded", snapifyTables);
