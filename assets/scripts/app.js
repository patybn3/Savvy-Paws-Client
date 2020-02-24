'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const eventsFile = require('./events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
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
  $('#button-home').on('click', eventsFile.onShowHome)
  $('#button-portal').on('click', eventsFile.onShowPortal)
  // hides and shows
  $('#button-changepw').hide()
  $('#button-logout').hide()
  $('#button-portal').hide()
})
