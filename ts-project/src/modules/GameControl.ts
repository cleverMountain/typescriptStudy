import Food from "./Food";
import Snake from "./Snake"
import ScorePanel from "./ScorePanel";


class GameControl {
  food: Food
  snake: Snake
  scorePanel: ScorePanel
  direction: string = '' // 移动方向
  timer: number = 0
  live: boolean = true
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

    this.direction = e.key
    this.live && this.run()
  }
  // 蛇移动
  run() {
    // 获取位置
    let snakeX = this.snake.getX() as number,
      snakeY = this.snake.getY() as number

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
    this.cheeckEat(snakeX, snakeY)
    try {
      this.snake.setX(snakeX)
      this.snake.setY(snakeY)
    } catch (e) {
      console.log(e)
      alert(e)
      this.live = false
    }
  
    if (this.timer) {
      window.clearTimeout(this.timer)
    }
    if (this.live) {
      this.timer =  window.setTimeout(this.run.bind(this), 300);
    }

  }
  cheeckEat(x: number, y:number) {
    const foodX = this.food.getX()
    const foodY = this.food.getY()
    if (x === foodX && y === foodY) {
      console.log('吃法哦')
      this.snake.addBody()
      this.food.changePos()
    }
  }
}


export default GameControl