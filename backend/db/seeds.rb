# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Player.destroy_all
Stage.destroy_all
Npc.destroy_all
player1 = Player.create(username:"Pikachu", staticImgUrl:"assets/pikachu_static.gif", leftImgUrl:'assets/pikachu_left.gif', rightImgUrl:'assets/pikachu_right.gif', score:0, x:"20px")
mod1 = Stage.create(name:"stage", imgUrl:"assets/bg.jpg", x:"0px", player_id:1)
monster1 = Npc.create(name:"light", imgUrl:"assets/monster2.gif", x:"1000px", stage_id:1)
