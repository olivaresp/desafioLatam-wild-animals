import Animal from '../js/animal.js';

class Lobo extends Animal {
  constructor({ name, age, img, comments, sound }) {
    super(name, age, img, comments, sound)
  }

  aullar() {
    console.log("* aulla *")
  }
}

export default Lobo