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

const getMyPets = (data) => {
  return $.ajax({
    url: `${config.apiUrl}/pets`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: ''
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
    url: config.apiUrl + '/pets/' + data.pet._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const onShowPet = function (id) {
  return $.ajax({
    url: `${config.apiUrl}/pets/${id}`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  onShowPet,
  onNewPet,
  getMyPets,
  getAllPets,
  deletePets,
  editPets
}
