class CreateStages < ActiveRecord::Migration[5.2]
  def change
    create_table :stages do |t|
      t.string :name
      t.belongs_to :player, foreign_key: true
      t.integer :x
      t.timestamps
    end
  end
end
 