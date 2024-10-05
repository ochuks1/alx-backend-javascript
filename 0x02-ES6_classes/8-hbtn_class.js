// 8-hbtn_class.js
export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Override the default behavior of casting to a number
  valueOf() {
    return this._size;
  }

  // Override the default behavior of casting to a string
  toString() {
    return this._location;
  }
}
