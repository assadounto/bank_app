Rails.application.routes.draw do

  root to: 'application#home' 
   
  namespace :api do
   namespace :v1 do
   
      resources :accounts, only: [:index, :create, :show, :update, :destroy]
     resources :users, only: [:index, :create]
     post '/new_transaction', to: 'accounts#new_transaction'
     post '/login', to: 'authentication#login'
     get '/auto_login', to: 'authentication#auto_login'
     get '/history', to: 'accounts#history'
     end
   end
 end
 