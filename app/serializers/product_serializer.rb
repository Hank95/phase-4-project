class ProductSerializer < ActiveModel::Serializer
  attributes :id, :title, :sub_title, :description, :price

  has_many :images
  # has_many :tags, through: :products_tags
end
