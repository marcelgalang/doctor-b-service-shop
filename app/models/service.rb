class Service < ApplicationRecord
  has_many :service_categories
  has_many :categories, through: :service_categories
end
