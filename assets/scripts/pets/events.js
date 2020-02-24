const getForm = require('../../../lib/get-form-fields')
// go back to scrips count one, back to assets, two, back to tic-tac-toe main folder, three, enter lib, name file
const api = require('./api')
const ui = require('./ui')
// const store = require('../store')

const onNewPetButton = event => {
  event.preventDefault()

  api.onNewButton()
    .then(ui.newPetButtonSuccess)
    .catch(ui.newPetButtonFail)
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

module.exports = {
  onNewPetButton,
  onAddNew,
  seeAllPets
}
