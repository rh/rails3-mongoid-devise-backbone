class User
  include Mongoid::Document

  devise :database_authenticatable, :rememberable, :validatable

  field :email,               :type => String, :default => ""
  field :encrypted_password,  :type => String, :default => ""
  field :remember_created_at, :type => Time

  validates_presence_of :email
  validates_presence_of :encrypted_password
end
