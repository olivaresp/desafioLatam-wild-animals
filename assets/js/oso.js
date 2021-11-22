import Animal from '../js/animal.js';

class Oso extends Animal {
  constructor({ name, age, img, comments, sound }) {
    super(name, age, img, comments, sound)
  }

  grunir() {
    console.log("* gruñe *")
  }
}

export default Oso