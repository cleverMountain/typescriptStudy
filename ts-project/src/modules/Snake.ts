class Snake {
  snakeHead: HTMLElement | null // 蛇头
  body: HTMLCollection | null // 身体包括蛇头
  constructor (el: string) {
    this.snakeHead = document.querySelector(el) as HTMLInputElement | null; // 断言
    this.body = document.getElementById('snake')?.getElementsByTagName('div') as HTMLCollection | null
    // this.body = document.getElementById('snake')!.getElementsByTagName('div') // 一定有
  }
    // 获取蛇坐标
    getX(): (number | undefined) {
      return this.snakeHead?.offsetLeft
    }
    getY(): (number | undefined) {
      return this.snakeHead?.offsetTop
    }
}