products= [
['Glass', 'Replace cracked or broken glass', 95, 7,1],
['LCD/Digitizer Assembly', 'Replace LCD/Digitizer Assembly', 110, 8,1],
['Power Button', 'Replace Power Button', 100, 12,1],
['LCD', 'Replace LCD', 200, 4, 3],
['Battery', 'Replace Battery', 100, 5, 3],
['WiFi Flex Cable', 'Replace WiFi Flex Cable', 125, 5, 2],
['Volume Flex Cable', 'Replace Volume Flex Cable', 125, 8, 2],

]

categories = [
  'iPhone', 'Android', 'Tablet', 'Mac', 'PC'
]

categories.each do |title|
  Category.create(title: title)
end

products.each do |title, description, price, inventory, category_id|
  Product.create( title: title, description: description, price:price, inventory:inventory, category_id:category_id )
end

