Resj::Application.routes.draw do

  root to: 'pages#home'

  %w[home].each do |page|
    get page, to: "pages##{page}"
  end

  get 'reseau', to: 'cards#index'
  get 'inscription', to: 'users#new'
  get 'connexion', to: 'sessions#new'
  get 'profile', to: "users#profile"

  resources :users, only: [:create, :edit, :update]
  resources :sessions, only: [:create, :destroy]
  
  resources :cards, only: [:new, :create] do
    collection do
      post 'change'
      post 'new_responsable'
    end
  end

  %w[responsables affiliations tags actions].each do |search|
    post "/searches/#{search}", to: "searches##{search}"
  end

  # admin resources
  namespace :admin do

    resources :pages, only: [:index, :edit, :update]
    resources :users, except: [:show]
    resources :ownerships, except: [:show]
    resources :actions, except: [:show]
    resources :affiliations, except: [:show]
    resources :card_types, except: [:show]
    resources :responsables, except: [:show]
    resources :tags, except: [:show]

    resources :cards do
      member do
        get 'verificate'
      end
    end

  end
end
