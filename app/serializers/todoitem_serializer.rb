class TodoitemSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :completed, :datecompleted, :todo_id, :isrecurring
  has_many :tags
end
