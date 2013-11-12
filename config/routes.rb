Resj::Application.routes.draw do

  root to: 'cards#new'
  
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
