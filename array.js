var arr = [1, 2]; // 全是number
var arr1 = ['a', 'b']; // 全是string
var arr2 = [undefined, null]; // 没有类型
var arr3 = [undefined, null, 'str', 123]; // 任意类型
// 联合类型
var arr4 = [1, 2, 'string'];
var arr5 = [[1, [1]], 'stri'];
// 元组 可选元素
var arr6 = [1, '12'];
arr6.push(10);
console.log(arr6);
