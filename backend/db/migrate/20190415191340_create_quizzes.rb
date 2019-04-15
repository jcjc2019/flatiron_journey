class CreateQuizzes < ActiveRecord::Migration[5.2]
  def change
    create_table :quizzes do |t|
      t.string :question
      t.string :answer
      t.belongs_to :stage, foreign_key: true

      t.timestamps
    end
  end
end
