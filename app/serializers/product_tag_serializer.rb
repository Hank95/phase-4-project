class ProductTagSerializer < ActiveModel::Serializer
  attributes :id
  has_one :tag
  has_one :product
end
