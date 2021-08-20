class User < ApplicationRecord
    has_secure_password
    has_one :shopping_cart
    has_many :line_items, through: :shopping_cart
    has_many :reviews
end
