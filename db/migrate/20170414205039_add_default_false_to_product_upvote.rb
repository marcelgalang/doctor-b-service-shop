class AddDefaultFalseToProductUpvote < ActiveRecord::Migration[5.0]
  def change
    change_column :products, :upvote, :integer, :default => 0, :null=>false
  end
end
