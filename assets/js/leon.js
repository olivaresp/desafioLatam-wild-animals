import Animal from '../js/animal.js';

class Leon extends Animal {
  constructor({ name, age, img, comments, sound }) {
    super(name, age, img, comments, sound)
  }

  rugir() {
    console.log("* ruge *")
  }
}

export default Leon