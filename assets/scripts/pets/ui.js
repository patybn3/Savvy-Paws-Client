'use strict'
// const showPetsTemplate = require('../templates/pets-all.handlebars')
const showPetsTemplate = require('../templates/user-pets.handlebars')

const newPetButtonSuccess = function (response) {
  // console.log('something')
  $('#edit-message').hide()
  $('#click-message').hide()
  $('.text-all').empty()
  $('.add-new').show()
  $('#about-me').hide()
  $('#welcome').hide()
  $('.main-text').hide()
}
// Created a new pet
const newPetSuccess = function (response) {
  // console.log('works')
  $('.text-all').empty()
  $('.add-new').trigger('reset')
  $('#add-message').removeClass('failure')
  $('#add-message').text('You Have Added Your Pet Successfully!')
  $('#add-message').addClass('success')

  setTimeout(() => {
    $('#add-message').hide()
  }, 1500)

  setTimeout(() => {
    $('.add-new').fadeOut()
  }, 1500)

  $('.text-all').trigger('reset')
}

// Show all pets, no user linked
const seeAllSuccess = (data) => {
  $('#get-pets').trigger('reset')
  $('#edit-message').hide()
  $('#click-message').hide()
  $('.edit-pet').show()
  $('.add-new').hide()
  // $('.text-all').show()
  $('.text-all').trigger('reset')
  $('#about-me').hide()
  $('#welcome').hide()
  $('.main-text').hide()
  $('.main-section').hide()

  $('.text-all').html('')
  const showPetsHtml = showPetsTemplate({ pets: data.pets })
  // $('.text-all').html('')
  $('.text-all').append(showPetsHtml)
  // $('.text-all').on('click', '.remove-pet', function (event) {
  //   // if (!$(this).hasClass('.text-all')) {
  //   $('#delete-message').addClass('success')
  //   $('#delete-message').append('You Have Deleted Your Pet!')
  //   // }
  // })

  // $('#button-home').click(function (event) {
  //   event.preventDefault()
  //   if (!$(this).hasClass('.main-section')) {
  //     $('.text-all').hide()
  //     $('#about-me').show()
  //     $('#welcome').show()
  //     $('.main-text').show()
  //   }
  // })
}

const clearPets = () => {
  $('.text-all').empty()
}

const editPetSuccess = function (response) {
  // console.log('something')
  $('.text-all').empty()
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
  onDeleteSuccess
}
