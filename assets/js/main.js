// TODO
// Habilidades a evaluar:
// [*] Crear clases con herencias.
// [] Exportar e importar módulos.
// [] Crear funciones autoejecutables IIFE.
// [] Crear funciones async / await.
// [] Crear instancias de clases.
// [] Obtener y modificar elementos del DOM.


// Detalles
// *  El formulario debe cumplir la función de registrar a los animales en la tabla de la izquierda.
// *  Deberás programar la funcionalidad para agregar al animal y mostrarlo en la tabla de animales en investigación, junto con un botón que reproduzca el audio correspondiente al sonido que emite el animal agregado.
// *  Al dar click en las imágenes de los animales debe aparecer una ventana modal con el detalle registrado del animal.
// *  Diagrama según documentación de la prueba.


// Recomendaciones:
// [] Levantar el sitio web con la extensión “Live Server” para poder ocupar las importaciones/exportaciones de ES6.
// [] Declarar en la importación de tu script el atributo type=”module”.
// [] Utiliza todos los métodos de los Arrays que creas conveniente en las diferentes situaciones con las que te encontrarás en el desarrollo de esta prueba.
// [] Mantén un código ordenado y declarativo.
// [] Utilizar la etiqueta “audio” de HTML


// Requerimientos
// 1. Crear las clases representadas en el diagrama implementando la herencia indicada (2 Puntos)
// 2. Crear las instancias de las clases utilizando los datos del formulario. (2 Puntos)
// 3. Realizar una consulta asíncrona utilizando una función async/await para obtener las imágenes correspondientes a los animales. (1 Punto)
// 4. Realizar por lo menos una función autoejecutable IIFE. (1 Punto)
// 5. Dividir el código en módulos (2 Puntos)
// 6. Utilizar la manipulación del DOM para mostrar en la tabla los animales registrados con el formulario. (2 Puntos)
// 7. Validar que el usuario haya asignado todos los datos del animal antes de que éste sea agregado a la tabla (Opcional)
// 8. Devolver el formulario en un estado inicial luego de registrar a cada animal (Opcional)
// 9. Programar la interacción del botón de audio, en donde deberás reproducir el sonido del animal en el sitio web. (Opcional)
// 10. Mostrar el detalle de cada animal en una ventana modal al ser presionada su imagen. (Opcional)


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

class Leon extends Animal {
  constructor({name, age, img, comments, sound}) {
    super(name, age, img, comments, sound)
  }

  // [] El siguiente método debe reproducir el sonido del animal
  rugir() {
    console.log("* ruge *")
  }

  html() {
    const newAni = new DOMParser();
    return newAni.parseFromString(`${this.sound} de ${this.name}`, 'text/html')
  }
}

class Lobo extends Animal {
  constructor({name, age, img, comments, sound}) {
    super(name, age, img, comments, sound)
  }

  // [] El siguiente método debe reproducir el sonido del animal
  aullar() {
    console.log("* aulla *")
  }
}

class Oso extends Animal {
  constructor({name, age, img, comments, sound}) {
    super(name, age, img, comments, sound)
  }

  // [] El siguiente método debe reproducir el sonido del animal
  grunir() {
    console.log("* gruñe *")
  }
}

class Serpiente extends Animal {
  constructor({name, age, img, comments, sound}) {
    super(name, age, img, comments, sound)
  }

  // [] El siguiente método debe reproducir el sonido del animal
  sisear() {
    console.log("* sisea *")
  }
}

class Aguila extends Animal {
  constructor({name, age, img, comments, sound}) {
    super(name, age, img, comments, sound)
  }

  // [] El siguiente método debe reproducir el sonido del animal
  chillar() {
    console.log("* chilla *")
  }
}

const form = document.querySelector("#btnRegistrar")
const registerBox = document.querySelector("#Animales")

const animalSelector = document.querySelector("#animal")
const ageSelector = document.querySelector("#edad")
const commentBox = document.querySelector("#comentarios")

form.addEventListener("click", addRegister);

function addRegister() {

  const animal_data = {
    name: animalSelector.value,
    age: ageSelector.value,
    img: "imagen acá",
    comments: commentBox.value,
    sound: "sonido acá"
  }

  const l1 = new Leon(animal_data)
  const leon = l1.html()
  registerBox.innerHTML = leon.body.innerHTML
}

// const le1 = new Leon("animalSelector", "ageSelector", "imagen acá", "commentBox", "sonido acá")
// console.log(le1)