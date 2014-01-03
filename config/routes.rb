Resj::Application.routes.draw do

  root to: 'pages#home'

  get 'resources', to: 'cards#index'
  get 'inscription', to: 'users#new'
  get 'connexion', to: 'sessions#new'
  get 'profile', to: "users#profile"

  resources :users, only: [:create, :edit, :update]
  resources :sessions, only: [:create, :destroy]
  
  resources :cards, only: [:new, :create] do
    collection do
      post 'change'
    end
  end

  # admin resources
  namespace :admin do

    resources :pages, only: [:index, :edit, :update]
    resources :users

    resources :cards, only: [:index, :edit, :update] do
      member do
        get 'verificate'
      end
    end

  end
end
