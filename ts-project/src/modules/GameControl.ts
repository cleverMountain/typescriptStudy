import Food from "./Food";
import Snake from "./Snake"
import ScorePanel from "./ScorePanel";


class GameControl {
  food: Food
  snake: Snake
  scorePanel: ScorePanel
  direction: string = '' // 移动方向
  constructor() {
    this.food = new Food('')
    this.snake = new Snake('')
    this.scorePanel = new ScorePanel()
    this.init() // 游戏开始
  }
  init() {
    // 绑定按键事件
    document.addEventListener('keydown', this.keyDownHandler.bind(this), false)
  }
  // 上下左右
  /**
   * ArrowUP UP
   */
  keyDownHandler(e: KeyboardEvent) {
    // 检查按键是否合法
    console.log(e)
    this.direction = e.key
    this.run()
  }
  // 蛇移动
  run() {
    // 获取位置
    let snakeX = this.snake.getX() as number,
      snakeY = this.snake.getY() as number
      console.log(this.direction)
    switch (this.direction) {
      case 'ArrowUp':
        snakeY = snakeY - 10
        break
      case 'ArrowDown':
         snakeY += 10
        break
      case 'ArrowLeft':
        snakeX = snakeX - 10
        break
      case 'ArrowRight':
        snakeX = snakeX + 10
        break
      default:
        break
    }
    console.log(snakeY, snakeX)
    this.snake.setX(snakeX)
    this.snake.setY(snakeY)
  }
}


export default GameControl