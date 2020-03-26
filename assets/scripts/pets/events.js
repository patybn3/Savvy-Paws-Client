const getForm = require('../../../lib/get-form-fields')
// go back to scrips count one, back to assets, two, back to tic-tac-toe main folder, three, enter lib, name file
const api = require('./api')
const ui = require('./ui')
const showPetsTemplateAdd = require('../templates/add-pet.handlebars')

const addHandlers = () => {
  $('.text-all').on('click', '.remove-pet', onDeletePets)
  $('.main-section').on('click', '.preview', onPreview)
  // $('.text-all').on('click', '.edit-pet', onEditPetsStart)
  $('.text-all').on('click', '.info', onShowInfo)
  $('.main-section').on('click', '.go-back', onGoBack)

  $('.text-all').on('submit', '.edit-form', onEditPets)

  $('.main-section').on('submit', '.add-new', onAddNew)
  // $('.text-all').on('click', '.preview', onPreview)
}

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
    .then(function () {
      seeMyPets()
    })
    .catch(ui.newPetFail)
}
// alows you to preview you pet picture
const onPreview = (event) => {
  if (validURL($('.photo-url').val())) {
    ui.onPreviewSuccess($('.photo-url').val())
  } else {
    ui.onPreviewFailure()
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

const seeAllPets = event => {
  event.preventDefault()

  api.getAllPets()
    .then(ui.seeAllSuccess)
    .catch(ui.seeAllfailure)
}

const onShowInfo = () => {
  event.preventDefault()

  // $('.text-all').html('')
  $('#modal-info').modal('show')
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
//
// const onEditPetsStart = (event) => {
//   event.preventDefault()
//
//   const id = $(event.target).data('id')
//   api.onShowPet(id)
//     .then(ui.editStartSuccess)
// }

const onEditPets = event => {
  event.preventDefault()

  const data = getForm(event.target)
  const id = $(event.target).data('id')

  api.editPets(data, id)
    .then(ui.editPetSuccess)
    .then(function () {
      seeMyPets(event)
    })
    .catch(ui.editPetFail)
}

const onGoBack = event => {
  event.preventDefault()

  ui.goBackSuccess()
  // ui.goBackFail()
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
  // onEditPetsStart,
  seeMyPets,
  onGoBack
  // seePic
}
