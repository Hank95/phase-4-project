class ImageSerializer < ActiveModel::Serializer
  attributes :id, :image_url
  has_one :product
end
