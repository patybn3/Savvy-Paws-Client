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

const getAllPets = (data) => {
  return $.ajax({
    url: config.apiUrl + '/pets',
    method: 'GET'
  })
}

const getPetsUser = (data) => {
  return $.ajax({
    url: config.apiUrl + '/pets',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deletePets = function (petsId) {
  return $.ajax({
    url: config.apiUrl + '/pets' + petsId,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const editPets = data => {
  return $.ajax({
    url: config.apiUrl + '/pets',
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
  getPetsUser,
  getAllPets,
  deletePets,
  editPets
}
