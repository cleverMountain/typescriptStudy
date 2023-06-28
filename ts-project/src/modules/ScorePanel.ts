// 分数类
class ScorePanel {
  score: number = 1
  level: number = 0
  maxLevel: number = 10 // 最大等级
  upScore: number = 10
  scoreEle: HTMLElement | null
  levelEle: HTMLElement | null;
  constructor ( sSeletor:string, lSeletor: string, maxLevel: number, upScore: number) {
    this.scoreEle = document.querySelector(sSeletor)as HTMLInputElement | null
    this.levelEle = document.querySelector(lSeletor)as HTMLInputElement | null
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