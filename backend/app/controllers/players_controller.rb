class PlayersController < ApplicationController
    def index
        render json: Player.all
    end
    def create
        # byebug
        new_player = Player.create(player_attributes)
        render json: new_player
    end
    def show
        render json: Player.find_by(username: params[:id])
    end
    def update 
        player = Player.find_by(username: params[:id])
        player.update(player_attributes)
        render json: player
    end
    def player_attributes
        params.permit(:username, :x, :score, :staticImgUrl, :leftImgUrl, :rightImgUrl)
    end
end
