'use strict'
// const store = require('../store')
const showPetsTemplate = require('../templates/pets-all.handlebars')
const showUserTemplate = require('../templates/user-pets.handlebars')

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
  $('.add-new').hide()
  $('.text-all').show()
  $('#view-pets').trigger('reset')
  $('.text-all').trigger('reset')
  $('#about-me').hide()
  $('#welcome').hide()
  $('#main-text').hide()
  const showPetsHtml = showPetsTemplate({ pets: data.pets })

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

  $('#view-pets').click(function (event) {
    event.preventDefault()
    if (!$(this).hasClass('.text-all')) {
      $('.text-all').empty()
    }
  })
}

const seeUsersPetsSuccess = (data) => {
  $('.add-new').hide()
  $('.text-all').empty()
  $('#get-pets').trigger('reset')
  $('.text-all').trigger('reset')
  $('#about-me').hide()
  $('#welcome').hide()
  $('#main-text').hide()
  const showUserHtml = showUserTemplate({ pets: data.pets })

  $('.text-all').append(showUserHtml)

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

const editPetsButtonSuccess = function (response) {
  // console.log('something')
  $('.text-all').hide()
  $('#edit-form').show()
}

module.exports = {
  newPetButtonSuccess,
  newPetSuccess,
  seeAllSuccess,
  seeUsersPetsSuccess,
  clearPets,
  editPetsButtonSuccess
}
