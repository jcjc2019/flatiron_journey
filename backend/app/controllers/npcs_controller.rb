class NpcsController < ApplicationController
    def index
        render json: Npc.all
    end
end
