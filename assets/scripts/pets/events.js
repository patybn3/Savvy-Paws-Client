const getForm = require('../../../lib/get-form-fields')
// go back to scrips count one, back to assets, two, back to tic-tac-toe main folder, three, enter lib, name file
const api = require('./api')
const ui = require('./ui')
const showPetsTemplateAdd = require('../templates/add-pet.handlebars')

const onNewPetButton = event => {
  $('.main-sectio').trigger('reset')
  $('.main-section').empty()
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
      seeAllPets(event)
    })
    .catch(ui.onDeletefailure)
}

const onEditButton = event => {
  event.preventDefault()

  ui.showModalEditSuccess()
}

const onEditPets = event => {
  event.preventDefault()

  const data = getForm(event.target)

  api.editPets(data)
    .then(ui.editPetSuccess)
    .catch(ui.editPetFail)
}

const onEditPetsStart = event => {
  const id = $(event.target).data('id')
  api.onShowPet(id)
    .then(ui.editPetSuccess)
    .catch(ui.editPetFail)
}

const addHandlers = () => {
  $('.text-all').on('click', '.remove-pet', onDeletePets)
  $('.text-all').on('click', '.edit-pet', onEditPetsStart)

  $('.text-all').on('submit', '.edit-modal', function (event) {
    event.preventDefault()
    onEditPets(event)
  })

  $('.main-section').on('submit', '.add-new', onAddNew)
}

module.exports = {
  onNewPetButton,
  onAddNew,
  seeAllPets,
  onEditButton,
  onClearPets,
  onDeletePets,
  onEditPets,
  addHandlers,
  onEditPetsStart,
  seeMyPets
  // seePic
}
