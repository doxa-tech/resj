Resj::Application.routes.draw do

  scope "(:locale)", locale: /en|fr/ do

    %w[home resj contact resources coming_soon help].each do |page|
      get page, to: "pages##{page}"
    end

    get 'reseau', to: 'cards#index'
    get 'inscription', to: 'users#new'
    get 'connexion', to: 'sessions#new'
    delete 'signout', to: 'sessions#destroy'

    get 'profile', to: "users#profile"
    patch 'user/update', to: "users#update"
    get 'user/edit', to: "users#edit"
    post 'user/card/confirmation', to: "users#card_confirmation"
    post 'user/card/request', to: "users#card_request"
    get 'user/confirmation', to: "users#confirmation"
    get 'user/my_cards', to: "users#my_cards"

    patch 'orator/update', to: "orators#update"

    # resources
    scope 'resources' do
      resources :orators, except: [:destroy, :update, :edit]
      resources :articles, only: [:index, :show]
      resources :documents, controller: 'subjects', only: [:index, :show] do
      end
      resources :documents, only: [] do
        member do
          get 'download'
        end
      end
    end

    resources :users, only: [:create] do
      member do
        post 'resend_mail'
      end
    end
    resources :sessions, only: [:create, :destroy]
    resources :password_resets, except: [:index, :show, :destroy]
    
    resources :cards, except: [:destroy] do
      collection do
        post 'change'
      end
      member do
        get 'overview'
        get 'team'
        post 'user_request'
        post 'user_confirmation'
      end
    end

    %w[responsables affiliations tags actions locations].each do |search|
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
      resources :subjects, except: [:show]
      resources :themes, except: [:show]
      resources :articles, except: [:show]

      resources :cards do
        resources :verificator_comments, only: [:create, :update, :destroy]
        member do
          get 'verificate'
        end
      end

    end

    root to: 'pages#home'
    
  end
end
