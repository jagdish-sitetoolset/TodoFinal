class TodoSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :id
  has_many :todoitems
end
