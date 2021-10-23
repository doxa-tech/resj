Rails.application.routes.draw do
  mount Adeia::Engine => "/admin"

  root to: "pages#home"

  %w(resj faq orator_update_profile).each do |page|
    get page, to: "pages##{page}"
  end

  
  resources :users, only: [:create, :destroy] do
    get "confirmation", on: :collection
    post "resend_confirmation", on: :member 
  end

  resources :sessions, only: :create
  delete "signout", to: "sessions#destroy"
  get "signin", to: "sessions#new"
  get "signup", to: "users#new"

  get "profile", to: "users#profile"
  get "profile/edit", to: "users#edit"
  patch "profile/update", to: "users#update"
  get "profile/orator/edit", to: "orators#edit"
  patch "profile/orator/update", to: "orators#update"
  patch "profile/orator/update_visibility", to: "orators#update_visibility"

  post "contact/orator/:uuid", to: "contact#orator", as: :contact_orator

  resources :orators, only: [:index, :new, :create, :show, :destroy]

  resources :cards, only: [:index, :show]

  namespace :cards do

    resources :users, only: [:new, :create]
    resources :sessions, only: [:create]

    resources :wizards, only: [:new, :edit, :update] do
      member do
        get "confirmation"
        patch "confirm"
      end
    end

  end

  namespace :users do

    resources :password_resets, only: [:new, :create, :edit, :update]
    resources :cards, only: [:edit, :update]

  end

  namespace :admin do

    resources :cards, only: [:index, :edit, :update, :destroy]

  end

  namespace :api do

    resources :locations, only: [:index]
    resources :tags, only: [:index]

  end

end
