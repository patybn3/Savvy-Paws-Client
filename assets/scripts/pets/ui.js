'use strict'
// const store = require('../store')
// const showPetsTemplate = require('../templates/pets-all.handlebars')
const showPetsTemplate = require('../templates/user-pets.handlebars')

const newPetButtonSuccess = function (response) {
  // console.log('something')
  $('.text-all').empty()
  $('.add-new').show()
  $('#about-me').hide()
  $('#welcome').hide()
  $('#main-text').hide()
}
// Created a new pet
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

// Show all pets, no user linked
const seeAllSuccess = (data) => {
  $('.edit-pet').show()
  $('.add-new').hide()
  // $('.text-all').show()
  $('#get-pets').trigger('reset')
  $('.text-all').trigger('reset')
  $('#about-me').hide()
  $('#welcome').hide()
  $('#main-text').hide()
  const showPetsHtml = showPetsTemplate({ pets: data.pets })
  $('.text-all').html('')
  $('.text-all').append(showPetsHtml)

  $('#button-home').click(function (event) {
    event.preventDefault()
    if (!$(this).hasClass('.text-all')) {
      $('.text-all').empty()
      $('#about-me').show()
      $('#welcome').show()
      $('#main-text').show()
    }
  })

  $('#get-pets').click(function (event) {
    event.preventDefault()
    if (!$(this).hasClass('.text-all')) {
      $('.text-all').empty()
    }
  })
}

const clearPets = () => {
  $('.text-all').empty()
}

const editPetSuccess = function (response) {
  // console.log('something')
  $('#get-pets').trigger('reset')
  $('.text-all').trigger('reset')
  $('#edit-message').removeClass('failure')
  $('#edit-message').text(`You Have Successfully Edited Your Pet!`)
  $('#edit-message').addClass('success')

  setTimeout(() => {
    $('#edit-modal').modal('hide')
  }, 800)
}

const editPetFail = function (response) {
  $('#edit-message').removeClass('success')
  $('#edit-message').text(`Pet Update Failed. Please Try Again or Click on the "GO BACK" Button to Return.`)
  $('#edit-message').addClass('failure')
}

module.exports = {
  newPetButtonSuccess,
  newPetSuccess,
  seeAllSuccess,
  editPetSuccess,
  clearPets,
  editPetFail
}
