Rails.application.routes.draw do
  
  resources :line_items
  # resources :shopping_carts
  # resources :product_tags
  # resources :tags
  # resources :images
  resources :reviews, only: [:show, :create]
  resources :users, only: [:show, :create]
  resources :products, only: [:show, :index]


  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
