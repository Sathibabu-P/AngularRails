class Product < ActiveRecord::Base
   attr_accessible :name, :brand, :cost, :description
end
