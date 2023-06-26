let a: number = 1

// 隐式any
// function sum (a, b) {
//   return a + b
// }

function aaa (this: Window) {
  this.alert(this)
}
let box1 = document.getElementById('box1')
box1?.addEventListener('click', () => {}, false) // box1不一定存在