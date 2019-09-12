Rails.application.routes.draw do
  mount Adeia::Engine => "/admin"

  root to: "pages#home"

  %w(resj).each do |page|
    get page, to: "pages##{page}"
  end

  get "reseau", to: "cards#index"

  resources :sessions, only: :create
  delete "signout", to: "sessions#destroy"
  get "signin", to: "sessions#new"
  get "signup", to: "users#new"

  resources :users, except: :delete
  resources :orators, only: [:index, :new, :create]

  namespace :cards do

    resources :users, only: [:new, :create]

    resources :wizards, only: [:new, :edit, :update] do
      member do
        get "confirmation"
        patch "confirm"
      end
    end

  end

  namespace :users do

    resources :password_resets, only: [:new, :create, :edit, :update]

  end

  namespace :api do

    resources :locations, only: [:index]
    resources :tags, only: [:index]

  end

end
