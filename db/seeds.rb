# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


50.times do
    product = Product.create(
        title: Faker::Commerce.product_name,
        sub_title: Faker::Lorem.sentence,
        description: Faker::Lorem.paragraphs(number: 2),
        price: rand(1000..200000),
        inventory: rand(1..1000)
    )

    Image.create(
        image_url: Faker::LoremPixel.image,
        product_id: product.id
    )
    Image.create(
        image_url: Faker::LoremPixel.image,
        product_id: product.id
    )
    Image.create(
        image_url: Faker::LoremPixel.image,
        product_id: product.id
    )
end

