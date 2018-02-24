var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(name, make, price) {
        this._make = make;
        this._name = name;
        this._price = price;
    }
    Object.defineProperty(Car.prototype, "Name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Car.prototype.print = function () {
        console.log(" Name :" + this._name);
    };
    return Car;
}());
var c = new Car("bmw", "bmw", 89000);
c.print();
c.Name = "audi";
c.print();
var SportsCar = /** @class */ (function (_super) {
    __extends(SportsCar, _super);
    function SportsCar(name, make, price, power) {
        var _this = _super.call(this, name, make, price) || this;
        _this._power = power;
        return _this;
    }
    SportsCar.prototype.certify = function () { };
    return SportsCar;
}(Car));
//# sourceMappingURL=classes.js.map