const getForm = require('../../../lib/get-form-fields')
// go back to scrips count one, back to assets, two, back to tic-tac-toe main folder, three, enter lib, name file
const api = require('./api')
const ui = require('./ui')
const showPetsTemplateAdd = require('../templates/add-pet.handlebars')
const store = require('./../store')

const onNewPetButton = event => {
  $('.text-all').html('')
  $('.main-section').trigger('reset')
  $('.main-section').show()
  $('.main-section').html('')
  const showPetsHtmlAdd = showPetsTemplateAdd()
  // $('.text-all').html('')
  $('.main-section').append(showPetsHtmlAdd)
  ui.newPetButtonSuccess()
}

const onAddNew = event => {
  event.preventDefault()

  const form = event.target
  const data = getForm(form)

  api.onNewPet(data)
    .then(ui.newPetSuccess)
    .catch(ui.newPetFail)
}

const seeAllPets = event => {
  event.preventDefault()

  api.getAllPets()
    .then(ui.seeAllSuccess)
    .catch(ui.seeAllfailure)
}

const seeMyPets = event => {
  event.preventDefault()

  api.getMyPets()
    .then(ui.seeMySuccess)
    .catch(ui.seeMyfailure)
}

const onClearPets = (event) => {
  event.preventDefault()
  ui.clearPets()
}

const onDeletePets = (event) => {
  event.preventDefault()

  api.deletePets(event)
    // .then(ui.seeAllSuccess)
    .then(ui.onDeleteSuccess)
    .then(function () {
      seeMyPets(event)
    })
    .catch(ui.onDeletefailure)
}

const onEditPetsStart = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.onShowPet(id)
    .then(ui.editStartSuccess)
}

const onEditPets = event => {
  event.preventDefault()

  const data = getForm(event.target)
  const id = store.pet.id
  const pet = {
    pet: {
      name: data.pet.name,
      species: data.pet.species,
      breed: data.pet.breed,
      dob: data.pet.dob,
      favorit_toy: data.pet.favorit_toy
    }
  }

  api.editPets(pet, id)
    .then(ui.editPetSuccess)
    .then(function () {
      seeMyPets(event)
    })
    .catch(ui.editPetFail)
}

const addHandlers = () => {
  $('.text-all').on('click', '.remove-pet', onDeletePets)
  $('.text-all').on('click', '.edit-pet', onEditPetsStart)

  $('.main-section').on('submit', '.edit-form', onEditPets)

  $('.main-section').on('submit', '.add-new', onAddNew)
}

module.exports = {
  onNewPetButton,
  onAddNew,
  seeAllPets,
  onClearPets,
  onDeletePets,
  onEditPets,
  addHandlers,
  onEditPetsStart,
  seeMyPets
  // seePic
}
