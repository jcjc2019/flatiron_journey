class StagesController < ApplicationController
    def index
        render json: Stage.all
    end

    def show
        stage = Stage.find(params[:id]) #find the particular stage for this player
        render json: stage
    end
end 
 