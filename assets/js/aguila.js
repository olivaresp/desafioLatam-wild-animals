import Animal from '../js/animal.js';

class Aguila extends Animal {
  constructor({ name, age, img, comments, sound }) {
    super(name, age, img, comments, sound)
  }

  chillar() {
    console.log("* chilla *")
  }
}

export default Aguila