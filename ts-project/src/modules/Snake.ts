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
    return this.snakeHead?.offsetLeft
  }
  getY(): (number | undefined) {
    return this.snakeHead?.offsetTop
  }
  // 设置位置
  setX(value: number) {
    this.checkGameOver(value)
    if (this.snakeHead) {
      this.snakeHead.style.left = value + 'px'
    }
    this.moveBody()
  }
  setY(value: number) {
    this.checkGameOver(value)
    if (this.snakeHead) {
      this.snakeHead.style.top = value + 'px'
    }
    this.moveBody()
  }
  // 添加身体
  addBody() {
    this.snakeContain?.insertAdjacentHTML("beforeend", "<div class='head'></div>")
 
  }
  // 检测撞墙
  checkGameOver(value: number) {
    if (value < 0 || value > 300) {
      throw new Error('撞墙了')
    }
  }
  // 身体移动
  moveBody() {

    for (let i = (this.body?.length) as number - 1; i as number > 0; (i as number)--) {
      if (this.body) {
        console.log(i, this.body)
        let x = (this.body[(i as number) - 1] as HTMLElement).offsetLeft
        let y = (this.body[(i as number) - 1] as HTMLElement).offsetTop;
        // console.log((this.body as HTMLElement)
       console.log(this.body, i);
        (this.body[(i as number)] as HTMLElement).style.left = x + 'px';
        (this.body[(i as number)] as HTMLElement).style.top = y + 'px'
      }

    }
  }
}

export default Snake