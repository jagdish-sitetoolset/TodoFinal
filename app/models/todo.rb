class Todo < ApplicationRecord
    has_many :todoitems, :dependent => :destroy
    has_many :tags, through: :todoitems 
end
