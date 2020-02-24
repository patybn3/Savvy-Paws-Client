// config store = require('./store')

const showModalSignUpSuccess = function (response) {
  // console.log('something')
  $('#sign-up').trigger('reset')
  $('#modal-signup').modal('show')
}

const showModalSignUpfail = function (response) {
  $('#about-me').hide()
  $('#welcome').text('Sign Up Window Failed to Open, Please Try Again.')
  $('#welcome').addClass('failure')
  $('#main-text').text(`Click on "Home" to go back.`)
}

const showModalLogInSuccess = function (response) {
  // console.log('something')
  $('#sign-up').trigger('reset')
  $('#modal-signin').modal('show')
}

const showModalLogInfail = function (response) {
  $('#about-me').hide()
  $('#welcome').text('Sign In Window Failed to Open, Please Try Again.')
  $('#welcome').addClass('failure')
  $('#main-text').text(`Click on "Home" to go back.`)
}

const showModalChangeSuccess = function (response) {
  // console.log('something')
  $('#sign-up').trigger('reset')
  $('#modal-changepw').modal('show')
}

const showModalChangefail = function (response) {
  $('#about-me').hide()
  $('#welcome').text('Change Password Window Failed to Open, Please Try Again.')
  $('#welcome').addClass('failure')
  $('#main-text').text(`Click on "Home" to go back.`)
}
// User forms start Here

const signUpSuccess = function (response) {
  $('#sign-up').trigger('reset')
  $('#sign-up-message').text('You Have Successfully Signed Up!')
  $('#sign-up-message').addClass('success')

  setTimeout(() => {
    $('#sign-up-message').fadeOut()
  }, 2000)

  setTimeout(() => {
    $('#modal-signup').fadeOut()
  }, 3000)
}

module.exports = {
  showModalSignUpSuccess,
  showModalLogInSuccess,
  showModalChangeSuccess,
  signUpSuccess,
  showModalSignUpfail,
  showModalLogInfail,
  showModalChangefail
}
