Rails.application.routes.draw do
  mount Adeia::Engine => "/admin"

  root to: "pages#home"

  %w(resj faq).each do |page|
    get page, to: "pages##{page}"
  end

  resources :sessions, only: :create
  resources :users, only: :create
  delete "signout", to: "sessions#destroy"
  get "signin", to: "sessions#new"
  get "signup", to: "users#new"

  get "profile", to: "users#profile"
  get "profile/edit", to: "users#edit"
  get "profile/update", to: "users#update"
  get "profile/orator/edit", to: "orators#edit"
  get "profile/orator/update", to: "orators#update"

  resources :orators, only: [:index, :new, :create, :show]

  resources :cards, only: [:index, :show]

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
    resources :cards, only: [:show, :edit, :update]

  end

  namespace :admin do

    resources :cards

  end

  namespace :api do

    resources :locations, only: [:index]
    resources :tags, only: [:index]

  end

end
