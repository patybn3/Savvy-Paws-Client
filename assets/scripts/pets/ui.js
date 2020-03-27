'use strict'
// const showPetsTemplate = require('../templates/pets-all.handlebars')
const showPetsTemplate = require('../templates/user-pets.handlebars')
const showPetsTemplateMy = require('../templates/my-pets.handlebars')

// hides all about me info
const newPetButtonSuccess = function (response) {
  $('#about-me').hide()
  $('#welcome').hide()
  $('.main-text').hide()
}
// Created a new pet
const newPetSuccess = function (response) {
  $('#add-message').removeClass('failure')
  $('#add-message').text('You Have Added Your Pet Successfully!')
  $('#add-message').addClass('success')

  setTimeout(() => {
    $('#add-message').hide()
  }, 400)

  setTimeout(() => {
    $('.add-new').fadeOut()
  }, 600)
}

// Show all pets, no user linked, also home
const seeAllSuccess = (data) => {
  resetAllForms()
  $('#about-me').hide()
  $('#welcome').hide()
  $('.main-text').hide()
  $('.main-section').hide()
  $('#button-changepw').hide()
  $('#new-pets').hide()
  $('#button-about').show()
  $('#button-portal').show()
  $('#get-all-pets').hide()
  $('#see-my-pets').hide()
  $('#get-my-pets').show()

  setTimeout(() => {
    $('.text-all').html('')
    const showPetsHtml = showPetsTemplate({ pets: data.pets })

    $('.text-all').append(showPetsHtml)
  }, 500)
}
// also user portal
const seeMySuccess = (data) => {
  resetAllForms()
  $('#get-my-pets').hide()
  $('#see-my-pets').show()
  $('#get-all-pets').show()
  $('#about-me').hide()
  $('#welcome').hide()
  $('.main-text').hide()
  $('#button-changepw').show()
  $('#new-pets').show()
  $('#button-about').hide()
  $('.main-section').hide()

  $('.text-all').html('')
  const showPetsHtmlMy = showPetsTemplateMy({ pets: data.pets })

  $('.text-all').append(showPetsHtmlMy)
  $('.handles').addClass('handles-aside')
}

const clearPets = () => {
  $('.text-all').empty()
}

const editPetSuccess = function (data) {
  successMessage()
  $('.modal-backdrop').remove()
}

const seeAllfailure = function (response) {
  fail()
  $('.text-all').empty()
}

const onPreviewSuccess = (photoUrl) => {
  $('.preview-img').attr('src', photoUrl).addClass('img-thumbnail')
}

const goBackSuccess = function (response) {
  resetAllForms()
  successMessage()
  $('.add-new').hide()
}

const fail = function () {
  $('.alert-danger').show()
  $('#error-message').text('Function is Unavailable. Please Try Again!')

  setTimeout(() => {
    $('.alert-danger').fadeOut()
  }, 1500)
}

const successMessage = function () {
  $('.alert-success').show()
  $('#success-message').text('Request Completed')

  setTimeout(() => {
    $('.alert-success').fadeOut()
  }, 1500)
}

const resetAllForms = function () {
  $('#new-pets').trigger('reset')
  $('.add-new').trigger('reset')
  $('#get-pets').trigger('reset')
  $('#edit-form').trigger('reset')
  $('#get-my-pets').trigger('reset')
  $('.text-all').trigger('reset')
  $('.main-section').trigger('reset')
  $('#button-about').trigger('reset')
  $('.button-view').trigger('reset')
}

module.exports = {
  newPetButtonSuccess,
  newPetSuccess,
  seeAllSuccess,
  editPetSuccess,
  clearPets,
  seeAllfailure,
  seeMySuccess,
  onPreviewSuccess,
  goBackSuccess,
  fail,
  successMessage
}
