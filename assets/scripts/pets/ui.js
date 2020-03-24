'use strict'
// const showPetsTemplate = require('../templates/pets-all.handlebars')
const showPetsTemplate = require('../templates/user-pets.handlebars')
const showPetsTemplateMy = require('../templates/my-pets.handlebars')
const showPetsTemplateUpdate = require('../templates/update-pet.handlebars')

const newPetButtonSuccess = function (response) {
  // console.log('something')
  $('#edit-message').hide()
  $('#click-message').hide()
  $('#about-me').hide()
  $('#welcome').hide()
  $('.main-text').hide()
}
// Created a new pet
const newPetSuccess = function (response) {
  // console.log('works')
  $('#add-message').removeClass('failure')
  $('#add-message').text('You Have Added Your Pet Successfully!')
  $('#add-message').addClass('success')

  setTimeout(() => {
    $('#add-message').hide()
  }, 1500)

  setTimeout(() => {
    $('.add-new').fadeOut()
  }, 1500)
}

// Show all pets, no user linked
const seeAllSuccess = (data) => {
  $('.button-view').trigger('reset')
  $('#edit-message').hide()
  $('#click-message').hide()
  $('#about-me').hide()
  $('#welcome').hide()
  $('.main-text').hide()
  $('.main-section').hide()
  $('#get-my-pets').hide()
  $('#button-changepw').hide()
  $('#new-pets').hide()
  $('#button-about').show()
  $('#button-portal').show()

  setTimeout(() => {
    $('.text-all').html('')
    const showPetsHtml = showPetsTemplate({ pets: data.pets })

    $('.text-all').append(showPetsHtml)
  }, 500)
}

const seeMySuccess = (data) => {
  $('#get-my-pets').trigger('reset')
  $('.main-section').hide()
  $('.text-all').html('')
  const showPetsHtmlMy = showPetsTemplateMy({ pets: data.pets })
  // $('.text-all').html('')
  $('.text-all').append(showPetsHtmlMy)
  $('.handles').addClass('handles-aside')
}

const clearPets = () => {
  $('.text-all').empty()
}

const editPetSuccess = function (response) {
  // console.log('something')
  $('.text-all').html('')
  $('.main-section').show()
  $('#edit-message').show()
  $('#edit-message').removeClass('failure')
  $('#edit-message').addClass('success')
  $('#edit-message').text('You Have Successfully Edited Your Pet!')
  $('#click-message').show()
  $('#click-message').text(`Click on "View Your Pets" Button to Continue.`)

  $('#edit-form').trigger('reset')
  $('#get-pets').trigger('reset')
  $('.text-all').trigger('reset')

  setTimeout(() => {
    $('#edit-modal').modal('hide')
  }, 800)
}

const editStartSuccess = function (data) {
  $('.text-all').html('')
  $('.main-section').trigger('reset')
  $('.main-section').show()
  $('.main-section').html('')
  const showPetsHtmlUpdate = showPetsTemplateUpdate()
  // $('.text-all').html('')
  $('.main-section').append(showPetsHtmlUpdate)
}

const seeAllfailure = function (response) {
  $('.text-all').empty()
  $('#edit-message').show()
  $('#edit-message').removeClass('success')
  $('#edit-message').text(`"View Your Pets" Failed. Please Try Again!`)
  $('#edit-message').addClass('failure')
}

const editPetFail = function (response) {
  $('.text-all').empty()
  $('#edit-message').show()
  $('#edit-message').removeClass('success')
  $('#edit-message').text(`Pet Update Failed. Please Try Again!`)
  $('#edit-message').addClass('failure')

  setTimeout(() => {
    $('#edit-modal').modal('hide')
  }, 800)
}

const showModalEditSuccess = function (response) {
  $('#edit-form').trigger('reset')
  $('#edit-form').modal('show')
}

const onDeleteSuccess = function (response) {
  // $('#edit-message').show()
  $('#delete-message').addClass('success')
  $('#delete-message').text('You Have Deleted Your Pet!')
}

module.exports = {
  newPetButtonSuccess,
  newPetSuccess,
  seeAllSuccess,
  editPetSuccess,
  clearPets,
  showModalEditSuccess,
  editPetFail,
  seeAllfailure,
  onDeleteSuccess,
  seeMySuccess,
  editStartSuccess
}
