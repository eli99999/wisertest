class Product < ActiveRecord::Base
	scope :by_category, -> (cat){where('category=?', cat)}
end
