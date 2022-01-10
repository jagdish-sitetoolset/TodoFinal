Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :todos
      resources :todoitems do
        member do
          post :complete
          post :incomplete
          post :move
          patch :edit
        end
      end  
    end
  end

  get '*path', to: 'pages#index', via: :all
end
