const getForm = require('../../../lib/get-form-fields')
// go back to scrips count one, back to assets, two, back to tic-tac-toe main folder, three, enter lib, name file
const api = require('./api')
const ui = require('./ui')
// const store = require('../store')

const onNewPetButton = event => {
  $('.add-new').show()
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

// const seePets = event => {
//   event.preventDefault()
//
//   api.getPetsUser()
//     .then(ui.seeUsersPetsSuccess)
//     .catch(ui.seeUsersPetsfailure)
// }

const onClearPets = (event) => {
  event.preventDefault()
  ui.clearPets()
}

const onDeletePets = (event) => {
  event.preventDefault()

  api.deletePets(event)
    .then(function () {
      seeAllPets(event)
    })
    .catch(ui.onDeletefailure)
}

// const onEditPets = event => {
//   event.preventDefault()
//
//   api.editPets(event)
//     .then(function () {
//       seeAllPets(event)
//     })
//     .catch(ui.editPetsButtonfailure)
// }

const onEditPets = event => {
  event.preventDefault()

  const data = getForm(event.target)

  api.editPets(data)
    .then(ui.editPetSuccess)
    .catch(ui.editPetFail)
}

const addHandlers = () => {
  $('.text-all').on('click', '.remove-pet', onDeletePets)
  // $('.text-all').on('click', '.edit-pet', onEditPets)
}

module.exports = {
  onNewPetButton,
  onAddNew,
  seeAllPets,
  // onSeeUsersPets,
  onClearPets,
  onDeletePets,
  onEditPets,
  addHandlers
}
