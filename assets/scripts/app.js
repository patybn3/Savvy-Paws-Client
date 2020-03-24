'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const eventsFile = require('./events')
const eventsPets = require('./pets/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#get').attr('disabled', true)
  // your JS code goes here
  // User forms
  // Shows Modals
  $('.button-signup').on('click', eventsFile.onShowSignUpModal)
  $('.button-login').on('click', eventsFile.onShowLogInModal)
  $('#button-changepw').on('click', eventsFile.onShowChangeModal)
  // makes forms work:
  $('#sign-up').on('submit', eventsFile.onSignUp)
  $('#sign-in').on('submit', eventsFile.onLogIn)
  $('#change-pw').on('submit', eventsFile.onChangePw)
  // other buttons functionality
  $('#button-logout').on('click', eventsFile.onLogout)
  $('#button-about').on('click', eventsFile.onAboutMe)
  $('#button-portal').on('click', eventsFile.onShowPortal)
  $('.go-back').on('click', eventsFile.onGoBack)
  $('#hamburger').on('click', eventsFile.onHamburger)
  $('#hamburgerX').on('click', eventsFile.onHamburgerX)
  // hides and shows
  $('#button-changepw').hide()
  $('#button-logout').hide()
  $('#get-pets').hide()
  $('#get-my-pets').hide()
  $('#clear-pets').hide()
  $('#new-pets').hide()
  $('.add-new').hide()
  $('.edit-pet').hide()
  $('#cat-pic').hide()
  $('#dog-pic').hide()
  $('#hamburger').hide()
  $('#hamburgerX').hide()
  $('.main-section').hide()
  $('#about-me').hide()
  $('#welcome').hide()
  $('.main-text').hide()
  $('.main-section').hide()
  // pets
  $('#new-pets').on('click', eventsPets.onNewPetButton)
  // $('#view-pets').on('click', eventsPets.seeAllPets)
  $('.button-view').on('click', eventsPets.seeAllPets)
  $('#get-my-pets').on('click', eventsPets.seeMyPets)
  $('#clear-pets').on('click', eventsPets.onClearPets)
  $('#edit-form').on('submit', eventsPets.onEditPets)
  // $('.remove-pet').on('click', eventsPets.onDeletePets)
  eventsPets.addHandlers()
  // delete and Edit
})
