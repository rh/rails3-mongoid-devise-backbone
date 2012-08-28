class Note
  include Mongoid::Document
  include Mongoid::Timestamps::Created

  field :title, type: String
  field :body,  type: String
end
