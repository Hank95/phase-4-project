class ProductTagSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :tag
  belongs_to :product
end
