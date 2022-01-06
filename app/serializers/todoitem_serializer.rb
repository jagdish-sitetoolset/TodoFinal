class TodoitemSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :completed, :datecompleted, :todo_id
  has_many :tags
end
