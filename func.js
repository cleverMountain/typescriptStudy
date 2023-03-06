// 函数注解
function tset(x, y) {
    return x + y;
}
var test11 = function (x, y) {
    var a = 1;
    return x + y + a;
};
var test111 = function (x, y) {
    return function (x, y) { return x + y; };
};
var test12 = function (x, y) { return x + y; };
var test13 = function (x, y) { return x + y; };
var funcA = function (data) {
    return Object.prototype.toString.call(data) == '[object Array]' ? true : false;
};
var funcB = function (data) {
    return Object.prototype.toString.call(data) == '[object Array]' ? true : false;
};
