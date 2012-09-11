class Note
  include Mongoid::Document
  include Mongoid::Timestamps::Created

  field :user_id, type: BSON::ObjectId
  field :title,   type: String
  field :body,    type: String
end
