class Stage < ApplicationRecord
    has_many :npcs
    has_many :quizzes
    belongs_to :player
end
