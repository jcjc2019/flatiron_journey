class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.string :username
      t.string :imgUrl
      t.integer :score
      t.string :x
      t.timestamps
    end
  end
end
