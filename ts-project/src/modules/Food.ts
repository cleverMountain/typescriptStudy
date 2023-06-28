// 定义food
class Food {
  // 定义元素
  foodEle: HTMLElement | null
  constructor(el: string) {
    this.foodEle = document.querySelector('#food') as HTMLInputElement | null;
    // this.foodEle = document.getElementById('string') || null
  }
  // 获取食物坐标
  getX(): (number | undefined) {
    return this.foodEle?.offsetLeft
  }
  getY(): (number | undefined) {
    return this.foodEle?.offsetTop
  }
  // 修改食物位置
  changePos() {
    // 随机位置 左0 又300 上0 下300
    // 蛇一次移动一次 10，食物坐标必须整10
    let left = Math.round(Math.random() * 30) * 10,
        top = Math.round(Math.random() * 30) * 10
    if (this.foodEle) {
      this.foodEle.style.left = left + 'px'
      this.foodEle.style.top = top + 'px'
    }
  }
}


export default Food