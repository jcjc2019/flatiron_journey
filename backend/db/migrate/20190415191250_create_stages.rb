class CreateStages < ActiveRecord::Migration[5.2]
  def change
    create_table :stages do |t|
      t.string :name
      t.string :imgUrl
      t.belongs_to :player, foreign_key: true
      t.string :x
      t.timestamps
    end
  end
end
 