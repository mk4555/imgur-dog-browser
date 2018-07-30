class CreateDogs < ActiveRecord::Migration[5.1]
  def change
    create_table :dogs do |t|
      t.string :title
      t.string :link
      t.string :cover
      t.integer :votes, :default => 0
      t.timestamps
    end
  end
end
