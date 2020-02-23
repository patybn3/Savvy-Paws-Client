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
  $('#button-signup').on('click', eventsFile.onShowSignUpModal)
  $('#button-login').on('click', eventsFile.onShowLogInModal)
  $('#button-changepw').on('click', eventsFile.onShowChangeModal)
  // makes forms work
  $('#sign-up').on('submit', eventsFile.onSignUp)
  // $('#button-login').on('click')
})
