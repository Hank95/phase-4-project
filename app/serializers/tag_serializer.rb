class TagSerializer < ActiveModel::Serializer
  attributes :id, :content

  has_many :products
end
