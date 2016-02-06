class Api::GamersController < ApplicationController

  def index
    dbGamers = Gamer.all
    render json: {gamers: dbGamers}
  end

  def login
  end

  def create
    new_gamer = Gamer.create( gamer_params )
    render json: new_gamer
  end

  def destroy
    gamer = Gamer.find(params[:id])
    gamer.destroy
    dbGamers = Gamer.all
    render json: {gamers: dbGamers}
  end

  private

  def gamer_params
    params.require(:gamer).permit(:name, :location, :age, :games, :contact)
  end

end
