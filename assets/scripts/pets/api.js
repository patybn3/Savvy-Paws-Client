const config = require('../config')

const store = require('../store')

const onNewButton = (data) => {
  return $.ajax({
    url: config.apiUrl + '/pets',
    method: 'GET'
  })
}

const onNewPet = (data) => {
  return $.ajax({
    url: config.apiUrl + '/pets' + store.user.id,
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const getAllPets = (data) => {
  return $.ajax({
    url: config.apiUrl + '/pets' + store.user.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  onNewButton,
  onNewPet,
  getAllPets
}
