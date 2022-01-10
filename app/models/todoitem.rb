class Todoitem < ApplicationRecord
  belongs_to :todo
  has_many :tags, :dependent => :destroy
end
