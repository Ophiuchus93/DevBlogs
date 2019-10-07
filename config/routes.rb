Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'

  get 'api/posts', to: 'api/posts#index', as: 'all_the_posts'

  namespace :api do
    resources :users do
      resources :posts 
    end
  end
end
