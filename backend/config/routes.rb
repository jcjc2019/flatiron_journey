Rails.application.routes.draw do
  resources :quizzes
  resources :stages
  resources :players
  resources :npcs
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
