"use strict";
// 基础类型： number boolean string null undefined
let num1 = 1;
let bool1 = false;
let str1 = 'dsa';
let ab = null;
let cd = undefined;
// 数组
let arr21 = [1];
let arr22 = ['2'];
// 元组
let tuple = [1, '2'];
// 枚举,相当于策略模式
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Green"] = "green";
    Color["Blue"] = "blue";
})(Color || (Color = {}));
let colorName = Color['Blue'];
console.log(colorName);
// create({ prop: 0 }); // OK
// create(null); // OK null是任意类型的子类型
// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error
// any  任意类型
let anyNumber = 1;
// void 没有类型，一般用于函数的返回值
const fun11 = () => { };
// never 类型表示的是那些永不存在的值的类型
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop() {
    while (true) {
    }
}
// 断言
let someValue = "this is a string";
// 1.值 as 类型     2.<类型>值         
let strLength = someValue.length;
console.log(strLength);
let ddd = 1;
