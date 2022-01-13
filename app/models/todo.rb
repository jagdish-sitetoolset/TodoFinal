class Todo < ApplicationRecord
    validates :title, presence: true     
    has_many :todoitems, :dependent => :destroy
    has_many :tags, through: :todoitems 
end
