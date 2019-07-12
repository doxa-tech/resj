Rails.application.routes.draw do
  mount Adeia::Engine => "/admin"

  root to: "pages#home"

  %w(resj).each do |page|
    get page, to: "pages##{page}"
  end

  namespace :cards do

    resources :wizards, only: [:new, :edit, :update]

  end

  namespace :api do

    resources :locations, only: [:index]

  end

end
