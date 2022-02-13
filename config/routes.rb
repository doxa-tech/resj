Rails.application.routes.draw do
  mount Adeia::Engine => "/admin"

  root to: "pages#home"

  %w(resj faq orator_update_profile legal).each do |page|
    get page, to: "pages##{page}"
  end

  %w(404 422 500 503).each do |code|
    get code, to: "errors#display", code: code
  end

  # Sessions
  resources :sessions, only: :create
  delete "signout", to: "sessions#destroy"
  get "signin", to: "sessions#new"
  get "signup", to: "users#new"

  # Users
  resources :users, only: [:create] do
    get "confirmation", on: :collection
    post "resend_confirmation", on: :member
  end
  
  scope '/profile', as: :profile do

    get "/", to: "users#profile"
    get "/edit", to: "users#edit"
    patch "/update", to: "users#update"
    delete "/delete", to: "users#destroy"

  end

  # Orators
  resources :orators, only: [:index, :new, :create, :show]

  scope "profile/orator", as: :orator do

    get "/edit", to: "orators#edit"
    patch "/update", to: "orators#update"
    patch "/update_visibility", to: "orators#update_visibility"
    delete "/delete", to: "orators#destroy"

  end
  
  post "contact/orator/:id", to: "contact#orator", as: :contact_orator
  
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
    resources :cards, only: [:edit, :update] do
      post "transfer", on: :member
    end

  end

  namespace :admin do

    resources :cards, only: [:index, :edit, :update, :destroy] do
      post "status", on: :member
    end

  end

  namespace :api do

    resources :locations, only: [:index]
    resources :tags, only: [:index]

  end

end
