class TodoSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description
  has_many :todoitems
end
