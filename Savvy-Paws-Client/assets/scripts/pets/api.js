const config = require('../config')

const store = require('../store')

const onNewPet = (data) => {
  return $.ajax({
    url: config.apiUrl + '/pets',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

// const getAllPets = (data) => {
//   return $.ajax({
//     url: config.apiUrl + '/pets',
//     method: 'GET'
//   })
// }

const getAllPets = (data) => {
  return $.ajax({
    url: config.apiUrl + '/pets',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deletePets = function (event) {
  const id = $(event.target).data('id')
  return $.ajax({
    url: config.apiUrl + '/pets/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const editPets = function (data) {
  // const id = $(event.target).data('name')
  return $.ajax({
    url: config.apiUrl + '/pets/' + data.pet.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

module.exports = {
  // onNewButton,
  onNewPet,
  // getPetsUser,
  getAllPets,
  deletePets,
  editPets
}
