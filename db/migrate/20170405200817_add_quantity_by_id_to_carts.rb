class AddQuantityByIdToCarts < ActiveRecord::Migration[5.0]
  def change
    add_column :carts, :quantityById, :string
  end
end
