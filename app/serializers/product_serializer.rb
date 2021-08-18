class ProductSerializer < ActiveModel::Serializer
  attributes :id, :title, :sub_title, :description, :price
end
