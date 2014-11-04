Rails.application.routes.draw do

  match '/404', to: 'errors#file_not_found', via: :all
  match '/422', to: 'errors#unprocessable', via: :all
  match '/500', to: 'errors#internal_server_error', via: :all

  get '/cards/new', to: redirect('/cards/wizards/new')

  scope "(:locale)", locale: /en|fr/ do

    %w(home resj contact resources coming_soon help privacy developer).each do |page|
      get page, to: "pages##{page}"
    end

    get 'reseau', to: 'cards#index'
    get 'inscription', to: 'users#new'
    get 'connexion', to: 'sessions#new'
    delete 'signout', to: 'sessions#destroy'

    %w(edit confirmation avatar).each do |page|
      get "user/#{page}", to: "users##{page}"
    end
    get '/profile', to: "users#profile"
    get 'user/my_cards', to: 'users/affiliations#my_cards'
    get '/user/newsletters', to: 'users/newsletters#new'
    patch 'user/update', to: "users#update"
    patch 'user/avatar_update', to: "users#avatar_update"
    patch 'orator/update', to: "orators#update"

    namespace :users do
      resources :newsletters, only: [:create]
      resources :affiliations, only: [:create, :update, :destroy]
    end

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
    resources :sessions, only: [:create]
    resources :password_resets, except: [:index, :show, :destroy]
    
    resources :cards, only: [:show, :update] do
      member do
        get 'overview'
        get 'team'
        patch 'team_update'
      end

      scope module: :cards do
        resources :affiliations, only: [:create, :update, :destroy]
        resources :images, only: [] do
          collection do
            get 'banner'
            get 'avatar'
            patch 'upload_banner'
            patch 'upload_avatar'
            delete 'remove_banner'
            delete 'remove_avatar'
          end
        end
      end
    end

    
    namespace :cards do
      resources :wizards, only: [:new, :create] do
        collection do
          post 'change'
        end
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
      resources :newsletters, only: [:new, :create]
      resources :statuses, except: [:show]
      resources :card_statuses, only: [:index, :edit, :update]

      resources :cards do
        resources :verificator_comments, only: [:create, :update, :destroy]
      end

    end

    root to: 'pages#home'
    
  end
end

