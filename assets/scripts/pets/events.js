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

const onSeeUsersPets = event => {
  event.preventDefault()

  api.getPetsUser()
    .then(ui.seeUsersPetsSuccess)
    .catch(ui.seeUsersPetsfailure)
}

const onClearPets = (event) => {
  event.preventDefault()
  ui.clearPets()
}

const onDeletePets = (event) => {
  event.preventDefault()

  const petsId = $(event.target).data('id')

  api.deletePets(petsId)
    .then(() => seeAllPets(event))
    .catch(ui.onDeletefailure)
}

const onEditPetsButton = event => {
  event.preventDefault()

  api.onNewButton()
    .then(ui.editPetsButtonSuccess)
    .catch(ui.editPetsButtonfailure)
}

// const onEditPetsButton = event => {
//   event.preventDefault()
//
//   api.onNewButton()
//     .then(ui.editPetsButtonSuccess)
//     .catch(ui.editPetsButtonfailure)
// }

module.exports = {
  onNewPetButton,
  onAddNew,
  seeAllPets,
  onSeeUsersPets,
  onClearPets,
  onDeletePets,
  onEditPetsButton
}
