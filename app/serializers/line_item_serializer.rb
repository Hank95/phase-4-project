class LineItemSerializer < ActiveModel::Serializer
  attributes :id, :quantity
  has_one :shopping_cart
  has_one :product
end
