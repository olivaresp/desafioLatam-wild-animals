import Animal from '../js/animal.js';

class Serpiente extends Animal {
  constructor({ name, age, img, comments, sound }) {
    super(name, age, img, comments, sound)
  }

  sisear() {
    console.log("* sisea *")
  }
}

export default Serpiente