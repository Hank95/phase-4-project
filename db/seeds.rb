# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "🌱 Seeding spices..."


50.times do
    product = Product.create(
        title: Faker::Commerce.product_name,
        sub_title: Faker::Lorem.sentence,
        description: Faker::Lorem.paragraphs(number: 2),
        price: rand(1000..200000),
        inventory: rand(1..1000)
    )

    search = product.title.split(' ')

    Image.create(
        image_url:Faker::LoremFlickr.image(size: "300x200", search_terms: [search[2]]),
        product_id: product.id
    )
    Image.create(
        image_url:Faker::LoremFlickr.image(size: "300x200", search_terms: [search[2]]),
        product_id: product.id
    )
    Image.create(
        image_url:Faker::LoremFlickr.image(size: "300x200", search_terms: [2]),
        product_id: product.id
    )
end

