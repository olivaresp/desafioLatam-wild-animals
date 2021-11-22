class Animal {
  constructor(name, age, img, comments, sound) {
    this._name = name
    this._age = age
    this._img = img
    this._comments = comments
    this._sound = sound
  }

  get name() {
    return this._name
  }
  get age() {
    return this._age
  }
  get img() {
    return this._img
  }
  get sound() {
    return this._sound
  }

  set comments(new_comment) {
    return this._comments = new_comment
  }
}

export default Animal