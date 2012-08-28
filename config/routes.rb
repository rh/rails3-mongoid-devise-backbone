NotesApp::Application.routes.draw do
  root :to => 'home#index'

  resources :notes
end
