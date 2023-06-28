class Snake {
  snakeHead: HTMLElement | null // 蛇头
  body: HTMLCollection | null // 身体包括蛇头
  snakeContain: HTMLElement | null // 容器
  constructor(el: string) {
    this.snakeContain = document.getElementById('snake')
    this.snakeHead = document.querySelector('#head') as HTMLInputElement | null; // 断言
    this.body = this.snakeContain?.getElementsByTagName('div') as HTMLCollection | null
    // this.body = document.getElementById('snake')!.getElementsByTagName('div') // 一定有
  }
  // 获取蛇坐标
  getX(): (number | undefined) {
    return this.snakeContain?.offsetLeft
  }
  getY(): (number | undefined) {
    return this.snakeContain?.offsetTop
  }
  // 设置位置
  setX (value: number) {
    if (this.snakeContain) {
      this.snakeContain.style.left = value + 'px'
    }
  }
  setY (value: number) {
    if (this.snakeContain) {
      this.snakeContain.style.top = value + 'px'
    }
  }
  // 添加身体
  addBody () {
    this.snakeContain?.insertAdjacentHTML("beforeend", "<div></div>")
  }
}

export default Snake