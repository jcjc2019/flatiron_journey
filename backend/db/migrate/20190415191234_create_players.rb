class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.string :username
      t.string :staticImgUrl
      t.string :leftImgUrl
      t.string :rightImgUrl
      t.integer :score, default: 0
      t.string :x
      t.timestamps
    end
  end
end
