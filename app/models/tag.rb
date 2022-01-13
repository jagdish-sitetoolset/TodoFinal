class Tag < ApplicationRecord
  validates :tagname, presence: true
  belongs_to :todoitem
  

end
