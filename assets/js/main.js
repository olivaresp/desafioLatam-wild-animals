import Leon from './leon.js';
import Lobo from './lobo.js';
import Oso from './oso.js';
import Serpiente from './serpiente.js';
import Aguila from './aguila.js';

// Data from json file
(async () => {
  const request = await fetch('../animales.json')
  const data = await request.json()
  return Object.values(data.animales)

})().then(animales => {
  const animalSelector = document.querySelector('#animal')
  const ageSelector = document.querySelector("#edad")
  const commentBox = document.querySelector("#comentarios")
  const preview = document.querySelector('#preview')
  const form = document.querySelector("#btnRegistrar")
  const registerBox = document.querySelector("#Animales")

  let selectedAnimal
  let animalIndex = 0

  // Load animal preview on chacnge
  animalSelector.addEventListener('change', () => {
    const animalValue = animalSelector.value
    const animal = animales.find(animal => animal.name === animalValue)
    selectedAnimal = animal

    preview.innerHTML = `<img src="assets/imgs/${animal.imagen}" style="width: 100%; height:100%; object-fit: cover; object-position: top center" alt="${animal.name}">`
  })

  // Validate form
  const formValidation = (animal) => {
    if (ageSelector.value === '' || commentBox.value === '' || animal === undefined) {
      alert('Por favor, completa todos los campos del formulario antes de continuar')
      return false
    } else {
      return true
    }
  }

  // Reset form fields after submit
  const resetFields = () => {
    animalSelector.value = animalSelector.options[0].value
    ageSelector.value = ageSelector.options[0].value
    commentBox.value = ''
    selectedAnimal = undefined
    preview.innerHTML = ''
  }

  // Add animal to register
  form.addEventListener("click", () => {
    if (formValidation(selectedAnimal)) {
      animalIndex++

      const animal_info = {
        name: selectedAnimal.name,
        age: ageSelector.value,
        img: selectedAnimal.imagen,
        comments: commentBox.value,
        sound: selectedAnimal.sonido,
      }

      if (selectedAnimal.name === "Leon") {
        const leon = new Leon(animal_info)
        resetFields()
        return addHTML(leon, animalIndex)
      }
      if (selectedAnimal.name === "Lobo") {
        const lobo = new Lobo(animal_info)
        resetFields()
        return addHTML(lobo, animalIndex)
      }
      if (selectedAnimal.name === "Oso") {
        const oso = new Oso(animal_info)
        resetFields()
        return addHTML(oso, animalIndex)
      }
      if (selectedAnimal.name === "Serpiente") {
        const serpiente = new Serpiente(animal_info)
        resetFields()
        return addHTML(serpiente, animalIndex)
      }
      if (selectedAnimal.name === "Aguila") {
        const aguila = new Aguila(animal_info)
        resetFields()
        return addHTML(aguila, animalIndex)
      }
    }
  })

  // Adds animal Card and Modal manipulating DOM
  const addHTML = (animal, index) => {
    registerBox.innerHTML += `
      <div class="card" style="width: 33%">
        <img type="button" src="assets/imgs/${animal.img}" style="max-width: 100%; height: 200px; object-fit: cover; object-position: top center" class="card-img-top" data-toggle="modal" data-target="#modal-${index}">
        <button type="button" class="btn-sound-${animal.name} btn btn-light">${animal.name}</button>
      </div>

      <div class="modal fade" id="modal-${index}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-sm">
          <div class="modal-content">
            <div class="modal-body">
            <img src="assets/imgs/${animal.img}" style="max-height: 50vh; object-fit: contain" class="card-img-top">
            <h1>${animal.name}</h1>
            <h5>Edad: ${animal.age}</h5>
            <br>
            <p>${animal._comments}</p>
            </div>
          </div>
        </div>
      </div>
    `
  }
})