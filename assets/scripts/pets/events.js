const getForm = require('../../../lib/get-form-fields')
// go back to scrips count one, back to assets, two, back to tic-tac-toe main folder, three, enter lib, name file
const api = require('./api')
const ui = require('./ui')
const showPetsTemplateAdd = require('../templates/add-pet.handlebars')

const addHandlers = () => {
  $('.text-all').on('click', '.remove-pet', onDeletePets)
  $('.main-section').on('click', '.preview', onPreview)
  $('.text-all').on('click', '.preview', onPreview)
  $('.main-section').on('click', '.go-back', onGoBack)

  $('.text-all').on('submit', '.edit-form', onEditPets)
  $('.main-section').on('submit', '.add-new', onAddNew)
  // $('.text-all').on('click', '.preview', onPreview)
}

// shows add form once button is clicked
const onNewPetButton = event => {
  $('.text-all').html('')
  $('.main-section').trigger('reset')
  $('.main-section').show()
  const showPetsHtmlAdd = showPetsTemplateAdd()

  $('.main-section').append(showPetsHtmlAdd)
  ui.newPetButtonSuccess()
}
// adds a new pet on submit
const onAddNew = event => {
  event.preventDefault()

  const form = event.target
  const data = getForm(form)

  api.onNewPet(data)
    .then(ui.newPetSuccess)
    .then(function () {
      seeMyPets(event)
    })
    .catch(ui.newPetFail)
}

// alows you to preview your pet picture when adding a pet
const onPreview = (event) => {
  if (validURL($('.photo-url').val())) {
    ui.onPreviewSuccess($('.photo-url').val())
  } else {
    ui.fail()
  }
}

// set up to validate URL for pet's picture
const validURL = (str) => {
  const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // path and port of url
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // this is query string
    '(\\#[-a-z\\d_]*)?$', 'i') // locates the fragments of the url
  return !!pattern.test(str)
}
// see all pets button and home button
const seeAllPets = event => {
  event.preventDefault()

  api.getAllPets()
    .then(ui.seeAllSuccess)
    .catch(ui.seeAllfailure)
    .catch(ui.fail)
}

// see user pet's button and user portal button
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
    .then(ui.successMessage)
    .then(function () {
      seeMyPets(event)
    })
    .catch(ui.fail)
}

const onEditPets = event => {
  event.preventDefault()
  $('#modalEdit').modal('hide')

  const data = getForm(event.target)
  const id = $(event.target).data('id')

  api.editPets(data, id)
    .then(ui.editPetSuccess)
    .then(function () {
      seeMyPets(event)
    })
    .catch(ui.fail)
}

const onGoBack = event => {
  event.preventDefault()

  seeMyPets(event)
  ui.goBackSuccess()
}

module.exports = {
  onNewPetButton,
  onAddNew,
  onPreview,
  seeAllPets,
  onClearPets,
  onDeletePets,
  onEditPets,
  addHandlers,
  seeMyPets,
  onGoBack
  // seePic
}
