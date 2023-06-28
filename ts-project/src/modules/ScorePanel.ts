// 分数类
class ScorePanel {
  score: number = 1
  level: number = 0
  maxLevel: number = 10 // 最大等级
  upScore: number = 10
  scoreEle: HTMLElement | null
  levelEle: HTMLElement | null;
  constructor (maxLevel: number = 10, upScore: number = 10) {
    this.scoreEle = document.querySelector('scpre')as HTMLInputElement | null
    this.levelEle = document.querySelector('level')as HTMLInputElement | null
    this.maxLevel = maxLevel
    this.upScore = upScore
  }
  addScore () {
    if (this.scoreEle) {
      this.scoreEle.innerHTML = this.score++ + ''
      if (this.score % this.upScore) {
        this.addLevelUP()
      }
    }
  }
  addLevelUP () {
    if (this.levelEle && this.level < this.maxLevel) {
      this.levelEle.innerHTML = this.level++ + ''
    }
  }
}

export default ScorePanel