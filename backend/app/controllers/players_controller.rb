class PlayersController < ApplicationController
    def index
        render json: Player.all
    end

    def create
        # byebug
        Player.create(player_attributes)
        render json: Player.all
    end
    
    def show
        render json: Player.find(params[:id])
    end

    def update 
        player = Player.find(params[:id])
        player.update(player_attributes)
        render json: player
    end
    def player_attributes
        params.permit(:username, :x, :score, :staticImgUrl, :leftImgUrl, :rightImgUrl)
    end
end
