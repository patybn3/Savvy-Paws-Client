'use strict'

const eventsFile = require('./events')
const eventsPets = require('./pets/events')

$(() => {
  $('#get').attr('disabled', true)
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
  $('#hamburger').on('click', eventsFile.onHamburger)
  $('#hamburgerX').on('click', eventsFile.onHamburgerX)
  // hides and shows
  $('#button-changepw').hide()
  $('#button-logout').hide()
  $('#get-all-pets').hide()
  $('#see-my-pets').hide()
  $('#clear-pets').hide()
  $('#new-pets').hide()
  $('.add-new').hide()
  $('.edit-pet').hide()
  $('#hamburger').hide()
  $('#hamburgerX').hide()
  $('.main-section').hide()
  $('#about-me').hide()
  $('#welcome').hide()
  $('.main-text').hide()
  $('.main-section').hide()
  $('.alert-danger').hide()
  $('.alert-success').hide()

  $('#new-pets').on('click', eventsPets.onNewPetButton)

  $('.button-view').on('click', eventsPets.seeAllPets)
  $('.button-view-my').on('click', eventsPets.seeMyPets)
  $('#clear-pets').on('click', eventsPets.onClearPets)
  $('.go-back').on('click', eventsPets.onGoBack)

  eventsPets.addHandlers()
})
