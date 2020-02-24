'use strict'
// const store = require('../store')
const showPetsTemplate = require('../templates/pets-all.handlebars')

const newPetButtonSuccess = function (response) {
  // console.log('something')
  $('.add-new').show()
  $('#about-me').hide()
  $('#welcome').hide()
  $('#main-text').hide()
}

const newPetSuccess = function (response) {
  // console.log('works')
  $('.add-new').trigger('reset')
  $('#add-message').removeClass('failure')
  $('#add-message').text('You Have Added Your Pet Successfully!')
  $('#add-message').addClass('success')

  setTimeout(() => {
    $('#add-message').hide()
  }, 1500)
}

const seeAllSuccess = function (data) {
  const showPetsHtml = showPetsTemplate({ pets: data.pets })

  $('.main-section').append(showPetsHtml)
}

module.exports = {
  newPetButtonSuccess,
  newPetSuccess,
  seeAllSuccess
}
