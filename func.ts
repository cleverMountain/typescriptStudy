// 函数注解
function tset(x: number, y: number): number {
  return x + y
}


let test11 = function (x: number, y: number): number {
  let a: number = 1
  return x + y + a
}


let test111 = (x: number, y: number): Function => {
  return (x: number, y: number) =>  x + y
}


let test12: (x: number, y: number) => number = (x, y) => x + y



interface ITest {
  (x: number, y: number): number
}

let test13: ITest = (x, y) => x + y
const funcA = (data: any): boolean => {
  return Object.prototype.toString.call(data) == '[object Array]' ? true : false
}
const funcB = <T>(data: T): boolean => {
  return Object.prototype.toString.call(data) == '[object Array]' ? true : false
}