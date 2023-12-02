// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "controllers"
import Rails from '@rails/ujs';
import "./admin/snaptable.js"

Rails.start();