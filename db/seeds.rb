# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts "🌱 Seeding"


# 50.times do
#     product = Product.create(
#         title: Faker::Commerce.product_name,
#         sub_title: Faker::Lorem.sentence,
#         description: Faker::Lorem.paragraphs(number: 2),
#         price: rand(1000..200000),
#         inventory: rand(1..1000)
#     )

#     search = product.title.split(' ')

#     Image.create(
#         image_url:Faker::LoremFlickr.image(size: "300x200", search_terms: [search[2]]),
#         product_id: product.id
#     )
#     Image.create(
#         image_url:Faker::LoremFlickr.image(size: "300x200", search_terms: [search[2]]),
#         product_id: product.id
#     )
#     Image.create(
#         image_url:Faker::LoremFlickr.image(size: "300x200", search_terms: [2]),
#         product_id: product.id
#     )
# end


new_tag = Tag.create(content: "New Releases")
electric = Tag.create(content: "Electric")
motorcycle = Tag.create(content: "Motocycle")
bicycle = Tag.create(content: "Bicycle")
sale = Tag.create(content: "On Sale")

bike_1 = Product.create(
    title: "OFFSET ODP-M1 OFF-ROAD MOTORCYCLE",
    sub_title: "Danish electric motorcycle startup Offset is bringing its first street-legal off-road ripper.",
    description: "Danish electric motorcycle startup Offset is bringing its first bike to market in early 2022 with the ODP-M1. The ultra-minimalist ODP-M1 is based on the non-street-legal off-road OFR-M1, with the same impressive specs but legal for the street. A 6.2kWh battery pack is good for about 1.5 hours of ride time, with a top speed of 80 MPH and a 0-62 time of 4.5 seconds. Charge time to 85% is about three hours, and ODP-M1 weighs in at only 253 pounds. A USD fork, wave brake rotors, monoshock rear suspension, and spoked wheels. Offset plans to start taking preorders for the off-road OFR-M1, with the ODP-M1 coming shortly after.",
    price: 699900,
    inventory: 10
)
Image.create(image_url:"https://uncrate.com/p/2021/08/offset-odp-m1-1.jpg", product_id: bike_1.id)
Image.create(image_url:"https://uncrate.com/assets_c/2021/08/offset-odp-m1-2-thumb-960xauto-135717.jpg", product_id: bike_1.id)
ProductTag.create(product_id: bike_1.id, tag_id: electric.id)
ProductTag.create(product_id: bike_1.id, tag_id: motorcycle.id)
ProductTag.create(product_id: bike_1.id, tag_id: new_tag.id)

bike_2 = Product.create(
    title: "COLNAGO TOUR DE FRANCE BICYCLE",
    sub_title: "The Tour de France's first ever official bike",
    description: "Despite over a century of memorable races, the Tour de France has never had an official bicycle. Until now. To celebrate the legendary race along with last year's 21-year-old Slovenian winner Tadej Pogačar, Colnago collaborated with Amaury Sport Organization for this limited bicycle. It's based on the same bike Pogačar crossed the finish line with, and arrives in black and yellow with a special edition Selle Italia saddle and a slew of other Tour-inspired details. Limited to just 108 units — the same number of races in the Tour de France history.",
    price: 1640000,
    inventory: 109
)

Image.create(image_url:"https://uncrate.com/p/2021/06/colnago1.jpg", product_id: bike_2.id)
ProductTag.create(product_id: bike_2.id, tag_id: bicycle.id)

bike_3 = Product.create(
    title: "COWBOY 4 E-BIKE",
    sub_title: "Cowboys 4th iteration of there asthetic e-bike",
    description: "A leader among e-bike startups, Cowboy is ready to unveil the newest version of their signature e-bike. The Cowboy 4 features a fresh take on the original frame and offers 50% more torque than the C3. Riders can choose from a regular edition of the bike, or a step-through frame version, each of which has 6061 aluminum frames and a slew of custom-designed components. The e-bike runs on a 250W hub-mounted rear motor and a removable 360wH battery that pushes the ride to a pedal-assisted 15mph. The battery has a 43.5-mile range and can be juiced up fully in under 4 hours. Puncture-resistant tires, an automatic decelerating detecting taillight, and a handlebar with a wireless charger for your smartphone help complete the bike, which all in all weighs in at just over 41 pounds.",
    price: 300000,
    inventory: 1000
)

Image.create(image_url:"https://uncrate.com/assets_c/2021/06/cowboy-4-e-bike-2-thumb-960xauto-132943.jpg", product_id: bike_3.id)
Image.create(image_url:"https://uncrate.com/p/2021/06/cowboy-4-e-bike-1.jpg", product_id: bike_3.id)
ProductTag.create(product_id: bike_3.id, tag_id: bicycle.id)
ProductTag.create(product_id: bike_3.id, tag_id: electric.id)
ProductTag.create(product_id: bike_3.id, tag_id: new_tag.id)

bike_4 = Product.create(
    title: "DROOG MOTO MINI-FIGHTER",
    sub_title: "Droogs distinct design, now in a snaller package",
    description: "Droog Moto's angular, distinct designs are now available in a smaller package with the DM-018 Mini-Fighter. The reduced size doesn't mean Droog skimped on features, as engine choices range from 125cc to 190cc, with a custom intake, exhaust, and digital fuel injection. This makes for a top speed of at least 65 mph, with all engine parameters available in a compact digital instrument cluster. Styling takes Droog's unique vision and downscales it perfectly for the platform, with trademark cues like solid wheels and scrambler tires present. Each DM-018 is built to order with nearly any option on the table that the customer can think up. The final price will be determined by the upgrades and changes the customer selects; all modifications and upgrades are available post-purchase as each bike is built in collaboration with Droog.",
    price: 2500000,
    inventory: 25
)
Image.create(image_url:"https://uncrate.com/p/2021/03/droog-moto-mini-fighter-1.jpg", product_id: bike_4.id)
Image.create(image_url:"https://uncrate.com/assets_c/2021/03/droog-moto-mini-fighter-2-thumb-960xauto-129455.jpg", product_id: bike_4.id)
Image.create(image_url:"https://uncrate.com/assets_c/2021/03/droog-moto-mini-fighter-4-thumb-960xauto-129458.jpg", product_id: bike_4.id)
ProductTag.create(product_id: bike_4.id, tag_id: motorcycle.id)

bike_5 = Product.create(
    title: "SUPER73 S2 SERIES",
    sub_title: "This electric bike blends the line between bike and urban moped",
    description: "SUPER73 S2 SERIES ELECTRIC BIKE  /  $2,445
    Urban adventurers, take note: Super73's second-generation S2 e-Bike was built with you in mind. The high-performance, street-legal machine has a sport cruiser-style design, with an aircraft-grade aluminum alloy frame, fully adjustable air spring suspension fork, and powerful motor. That 2000-watt brushless DC hub is attached to an advanced 960 watt-hour battery that lets it hit speeds up to 28 mph while also serving as a low-key pedal-assist system. A monochromatic LCD display keeps you updated on things like range and ride modes, while a Bluetooth connection with the companion iOS/Android app enables further functionality. It sits on 5in-wide, all-terrain BDGR tires, has a two-person extended seat, and has a triple LED headlight as well as internal cable routing to maintain the sleek look. Also, note that pre-ordered bikes are being offered at a $500 discount and will return to the full price of $2,695 in late Spring 2020.
    
    Specifications:
    
    Class-1 Mode Output: 750 watts nominal, 1200 watt peak, 20 mph top speed / Class-2 Mode Output: 750 watts nominal, 1200 watt peak, 20 mph top speed / Class-3 Mode Output: 750 watts nominal, 1200 watt peak, 28 mph top speed / Unlimited Mode Output: 1200 watts nominal, 2000 watt peak, 28 mph + top speed
    
    Weight: 73 lbs. (w/battery), 63 lbs. (w/o battery) / Brakes: Tektro Hydraulic, 2-piston forged aluminum caliper, 180mm front and rear rotors / Suspension: Air Spring Fork with adjustable Pre-load, Compression, and Rebound damping, 120mm travel, 32mm stanchion / Rims: 20in x 100mm alloy with lightening cutouts / Headlight: High output triple LED Halo / Tail Light: Roxim R3E LED w/ brake light / Pedal Assist: 4 modes (ECO, TOUR, SPORT, SUPER) / Charger: 3A (6-7 hour charge time), Optional 5A (3-4 hour charge time) / Crank + Front Chain Ring: 125mm alloy crank arms, 36T chain ring / Gearing: Single-speed 16T rear cog / Rear Derailleur: Single-speed chain tensioner / Seat Height: 31in / Weight Limit: 325 lbs.",

    price: 244500,
    inventory: 0
)

Image.create( image_url: "https://uncrate.com/p/2020/02/super-73-electric-bike-1.jpg", product_id: bike_5.id)
Image.create( image_url: "https://uncrate.com/assets_c/2020/02/super-73-electric-bike-2-thumb-960xauto-111233.jpg", product_id: bike_5.id)
Image.create( image_url: "https://uncrate.com/assets_c/2020/02/super-73-electric-bike-3-thumb-960xauto-111234.jpg", product_id: bike_5.id)
ProductTag.create(product_id: bike_5.id, tag_id: bicycle.id)
ProductTag.create(product_id: bike_5.id, tag_id: electric.id)

bike_6 = Product.create(
    title: "TRIUMPH ROCKET 3 LIMITED EDITION",
    sub_title: "limited edition of the Rocket 3 in all black",
    description: "Triumph is releasing a limited run of its Rocket 3 cruiser in an all-black colorway. The Rocket 3 R ditches the color and chrome for a monochromatic look from the tank to the exhaust. The Rocket 3 GT Triple Black uses a subtle three-shade scheme combined with amenities for long-distance riding. Both bikes feature black anodized parts, a carbon fiber fender, and use Triumph's 2,500cc triple, making 165 horsepower and weigh in at around 650 pounds. 1,000 units worldwide will be made. ",
    price: 2500000,
    inventory: 1000,
)
Image.create(image_url:"https://uncrate.com/p/2021/03/triumph-rocket-3-limited-editions-1.jpg", product_id: bike_6.id)
ProductTag.create(product_id: bike_6.id, tag_id: motorcycle.id)

bike_7 = Product.create(
    title: "2022 HONDA CRF450RWE",
    sub_title: "Hondas latest edition of the Work Edition Race capable dirt bike",
    description: "Honda is pulling no punches with its 2022 dirt bike lineup. The CRF450R Works Edition gives you everything a fully-prepped factory race bike would have, all in one package. Starting with a 499cc liquid-cooled single lunger, the Works Edition adds a custom Yoshimura exhaust, titanium nitrate-coated forks, DID DirtStar LT-X rims, and Twin Air filter. Fully-adjustable Showa suspension is featured front and rear, and the red valve cover and Honda livery add a touch of flair to match the upgraded equipment. The CRF450 weighs just 244 pounds, making a flickable, flyweight offroad machine. The CRF450R Works Edition is available now at Honda dealers nationwide.",
    price: 1239900,
    inventory: 10000,
)
Image.create(image_url:"https://uncrate.com/p/2021/03/honda-crf-450r-1.jpg", product_id: bike_7.id)
ProductTag.create(product_id: bike_7.id, tag_id: motorcycle.id)

bike_8 = Product.create(
    title: "2021 ONYX RCR MOTORBIKE",
    sub_title: "An electric motocycle with pedals",
    description: "Onyx's scrambler-style RCR released in 2019 and lands right between an e-bike and a full-on electric motorcycle, with rear suspension and a 60 MPH top speed. For 2021, Onyx has made improvements that make the RCR even better. The biggest news is a 41aH battery that doubles the range — and sold out in less than 24 hours. The rear swingarm has been reinforced and have passenger pegs, and the front fork is now hydraulic. Brakes have been improved, and the left-hand controls are smaller and more intuitive to use. Style is the RCR's strong suit, and new rosewood panels make it even more unique. The 2021 RCR is available to order now from Onyx.",
    price: 414900,
    inventory: 20000,
)
Image.create(image_url:"https://uncrate.com/p/2020/11/onyx-rcr.jpg", product_id: bike_8.id)
ProductTag.create(product_id: bike_8.id, tag_id: electric.id)
ProductTag.create(product_id: bike_8.id, tag_id: motorcycle.id)
ProductTag.create(product_id: bike_8.id, tag_id: bicycle.id)

puts "seeded!"