class Todoitem < ApplicationRecord
  validates :name, presence: true 
  
  
  belongs_to :todo
  has_many :tags, :dependent => :destroy
end
