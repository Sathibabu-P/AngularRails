# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
# Movie.delete_all #clear the data to re-seed
# Movie.create([
#              {name: 'Iron Man 3', seen: true, description: 'Iron Man against an enemy whose reach knows no bounds'},
#              {name: 'Men in Black', seen: false, description: 'top-secret organization established to monitor and police alien activity on Earth'}])
require 'csv'
CSV.foreach(Rails.root.join("db/products.csv"), headers: true) do |row|
  Product.create(name: row[0], brand: row[1], cost: row[2], description: row[3])
end
