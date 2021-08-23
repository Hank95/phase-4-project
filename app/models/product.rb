class Product < ApplicationRecord
    has_many :product_tags
    has_many :tags, through: :product_tags 
    has_many :line_items
    has_many :images
    has_many :reviews
end
