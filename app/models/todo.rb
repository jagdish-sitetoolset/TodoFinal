class Todo < ApplicationRecord
    has_many :todoitems,
    has_many :tags, through: :todoitems
end
