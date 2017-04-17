class AddUpvoteToProduct < ActiveRecord::Migration[5.0]
  def change
    add_column :products, :upvote, :integer
  end
end
