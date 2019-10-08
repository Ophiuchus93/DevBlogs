Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  get '/posts/:id', to: 'api/posts#show', as: 'the_one_post'

  namespace :api do
      resources :posts do
      resources :comments
    end
  end
end
