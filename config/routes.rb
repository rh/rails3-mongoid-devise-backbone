NotesApp::Application.routes.draw do
  devise_for :users

  root :to => 'home#index'

  resources :notes
end
