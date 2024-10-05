// 10-car.js

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Symbol-based method for cloning
  cloneCar() {
    const NewCar = this.constructor[Symbol.species] || this.constructor;
    return new NewCar();
  }

  static get [Symbol.species]() {
    return this;
  }
}
