// 一般对象
interface IObj {
  a: number;
  b: any;
  readonly c?: string | number; // 只读可选属性
  d?: number[];
  nest: {
    [propName: string]: any; // 其他属性
  },
  [propName: string]: any; // 其他属性
}

let obj: IObj = {
  a: 1,
  b: 'wq',
  c: 1,
  nest: {
    f: 1
  },
  E: 2
}


let a: object = {
  a: 1,
  b: 2,
}


// 函数
interface IFunc {
  (a: number, b: number): number
}



let test: IFunc = (a, b) => {
  return a + b
}

// function test (a: number, b:number): number {
//   return a + b
// }
console.log(test(1, 2))

let test1 = (a: number, b: number): number => {
  return a + b
}


// 数组继承
interface ILikeArr {
  length: number
}
interface IArr extends ILikeArr {
  [index: number]: number | string
}
let arr11: IArr = [1, 2]



// 类
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet(a: string): string {
    return "Hello, " + this.greeting;
  }
}

let greeter = new Greeter("world");


type User={
  id:number,
  name:string,
  age:number,
  grades:string
}
const userList:User[]=[
  {id:1,name:"小明",age:20,grades:'98'},
  {id:2,name:"小明",age:20,grades:'98'},
  {id:3,name:"小明",age:20,grades:'98'},
  {id:4,name:"小明",age:20,grades:'98'}
]


