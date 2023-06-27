var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// abstract抽象类，不可以创建实例，只能extends继承
var Greeter = /** @class */ (function () {
    // 实例上的属性
    function Greeter(message) {
        this.greeting = message;
    }
    // 原型上的方法
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    Greeter.age = 12;
    return Greeter;
}());
// let greeter = new Greeter("world");
console.log(greeter);
/**
 * public 公共属性：都可用， 自身 子类 实例
 * private 私有属性  子类可用
 * static 静态属性 自身可用
 * protected 受保护的  自身和子类可用
 */
var Gee = /** @class */ (function (_super) {
    __extends(Gee, _super);
    function Gee(age) {
        var _this = _super.call(this, '我是父亲') || this;
        _this.age = age;
        return _this;
    }
    return Gee;
}(Greeter));
