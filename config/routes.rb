Resj::Application.routes.draw do

  root to: 'pages#home'

  get 'fiches', to: 'cards#index'
  get 'inscription', to: 'users#new'
  get 'connexion', to: 'sessions#new'

  resources :users, only: [:create, :edit, :update]
  resources :sessions, only: [:create, :destroy]
  
  resources :cards, only: [:new, :create] do
    collection do
      post 'change'
    end
  end

  # admin resources
  namespace :admin do

    resources :cards, only: [:index, :edit, :update] do
      member do
        get 'verificate'
      end
    end

  end
end
