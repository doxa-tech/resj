Resj::Application.routes.draw do

  root to: 'pages#home'

  %w[home resj contact].each do |page|
    get page, to: "pages##{page}"
  end

  get 'reseau', to: 'cards#index'
  get 'inscription', to: 'users#new'
  get 'connexion', to: 'sessions#new'
  delete 'signout', to: 'sessions#destroy'

  get 'profile', to: "users#profile"
  patch 'user/update', to: "users#update"
  get 'user/edit', to: "users#edit"
  post 'user/confirmation', to: "users#card_confirmation"
  post 'user/request', to: "users#card_request"

  resources :users, only: [:create]
  resources :orators, except: [:show, :destroy]
  resources :resources, only: [:index, :show] do
    member do
      get 'download'
    end
  end

  resources :sessions, only: [:create, :destroy]
  resources :password_resets, except: [:index, :show, :destroy]
  
  resources :cards, except: [:destroy] do
    collection do
      post 'change'
      post 'new_responsable'
    end
  end

  %w[responsables affiliations tags actions themes].each do |search|
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
    resources :parents, except: [:show]
    resources :access_tokens, except: [:show]
    resources :resources, except: [:show]
    resources :themes, except: [:show]

    resources :cards do
      resources :verificator_comments, only: [:create, :update, :destroy]
      member do
        get 'verificate'
        post 'user_confirmation'
        post 'user_request'
      end
    end

  end
end
