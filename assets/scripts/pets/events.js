const getForm = require('../../../lib/get-form-fields')
// go back to scrips count one, back to assets, two, back to tic-tac-toe main folder, three, enter lib, name file
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onNewPetButton = event => {
  $('.add-new').show()

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

// const seePic = event => {
//   const cat = store.pets.species
//   const catPic = document.getElementById('pet-cat')
//
//   if (cat === catPic) {
//     seeAllPets()
//     document.write("<img src='./public/Cat.png'>")
//   }
// }

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

const addHandlers = () => {
  $('.text-all').on('click', '.remove-pet', onDeletePets)
  // $('.text-all').on('click', '.edit-pet', onEditPets)
}

module.exports = {
  onNewPetButton,
  onAddNew,
  seeAllPets,
  onEditButton,
  onClearPets,
  onDeletePets,
  onEditPets,
  addHandlers
  // seePic
}
