class Product < ApplicationRecord
    has_and_belongs_to_many :tags
    has_many :line_items
    has_many :images
    has_many :reviews
end
