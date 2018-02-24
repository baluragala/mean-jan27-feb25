class Car {
  private _name: string;
  private _make: string;
  private _price: number;
  constructor(name: string, make: string, price: number) {
    this._make = make;
    this._name = name;
    this._price = price;
  }

  get Name() {
    return this._name;
  }

  set Name(value: string) {
    this._name = value;
  }

  print() {
    console.log(" Name :" + this._name);
  }
}

let c = new Car("bmw", "bmw", 89000);
c.print();
c.Name = "audi";
c.print();

interface Certified {
  certify();
}

class SportsCar extends Car implements Certified {
  certify() {}
  private _power: number;
  constructor(name: string, make: string, price: number, power: number) {
    super(name, make, price);
    this._power = power;
  }
}
