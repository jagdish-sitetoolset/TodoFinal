class TodoSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :id
  has_many :todoitems
  has_many :tags
end
