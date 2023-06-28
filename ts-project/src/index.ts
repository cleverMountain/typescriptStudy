import "./style/index.less"
import Food from "./modules/Food"
import  ScorePanel from "./modules/ScorePanel"




console.log(Food, ScorePanel)
const food = new Food('.food')
food.changePos()