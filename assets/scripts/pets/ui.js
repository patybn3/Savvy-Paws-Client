'use strict'
// const showPetsTemplate = require('../templates/pets-all.handlebars')
const showPetsTemplate = require('../templates/user-pets.handlebars')
const showPetsTemplateMy = require('../templates/my-pets.handlebars')

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

const seeMySuccess = (data) => {
  $('#button-about').trigger('reset')
  $('#get-my-pets').hide()
  $('#see-my-pets').show()
  $('#get-all-pets').show()
  $('.text-all').trigger('reset')
  $('.main-section').trigger('reset')
  // $('.main-section').text(`Welcome ${store.user.last_name}`)
  $('#about-me').hide()
  $('#welcome').hide()
  $('.main-text').hide()
  $('#button-changepw').show()
  $('#new-pets').show()
  $('#button-about').hide()
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

// const editStartSuccess = function (id) {
//   const site = $('#' + id + ' > .site').text().trim()
//   const name = $('#' + id + ' > .name').text().trim()
//   const species = $('#' + id + ' > .species').text().trim()
//   const breed = $('#' + id + ' > .breed').text().trim()
//   const dob = $('#' + id + ' > .dob').text().trim()
//
//   store.editId = id
//
//   $(".edit-form > fieldset > input[name='pet[site]']").val(site)
//   $(".edit-form > fieldset > input[name='pet[name]']").val(name)
//   $(".edit-form > fieldset > input[name='pet[species]']").val(species)
//   $(".edit-form > fieldset > input[name='pet[breed]']").val(breed)
//   $(".edit-form > fieldset > input[name='pet[dob]']").val(dob)
// }

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

const onPreviewSuccess = (photoUrl) => {
  $('.preview-img').attr('src', photoUrl).addClass('img-thumbnail')
}

const onPreviewFailure = () => {
  console.log('error')
}

const goBackSuccess = function (response) {
  $('#edit-form').trigger('reset')
  $('.text-all').trigger('reset')
  $('.add-new').hide()
  $('#get-pets').trigger('reset')
}

// const goBackFail = function (response) {
//   $('#changepw-message').removeClass('success')
//   $('#changepw-message').text('Unable to Go Back. Please Try Again')
//   $('#changepw-message').addClass('failure')
//   $('#login-message').removeClass('success')
//   $('#login-message').text('Unable to Go Back. Please Try Again')
//   $('#login-message').addClass('failure')
//   $('#sign-up-message').removeClass('success')
//   $('#sign-up-message').text('Unable to Go Back. Please Try Again')
//   $('#sign-up-message').addClass('failure')
// }

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
  // editStartSuccess,
  onPreviewSuccess,
  onPreviewFailure,
  goBackSuccess
}
