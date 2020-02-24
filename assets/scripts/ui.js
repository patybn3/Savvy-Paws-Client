const store = require('./store')

// Buttons that open Modals
const showModalSignUpSuccess = function (response) {
  // console.log('something')
  $('#sign-up').trigger('reset')
  $('#modal-signup').modal('show')
  $('#sign-up-message').text('')
  $('#modal-signin').modal('hide')
}

const showModalSignUpFail = function (response) {
  $('#about-me').hide()
  $('#welcome').text('Sign Up Window Failed to Open, Please Try Again.')
  $('#welcome').addClass('failure')
  $('#main-text').text(`Click on "Home" to go back.`)
}

const showModalLogInSuccess = function (response) {
  // console.log('something')
  $('#sign-up').trigger('reset')
  $('#modal-signin').modal('show')
  $('#login-message').text('')
  $('#modal-signup').modal('hide')
}

const showModalLogInFail = function (response) {
  $('#about-me').hide()
  $('#welcome').text('Sign In Window Failed to Open, Please Try Again.')
  $('#welcome').addClass('failure')
  $('#main-text').text(`Click on "Home" to go back.`)
}

const showModalChangeSuccess = function (response) {
  // console.log('something')
  $('#sign-up').trigger('reset')
  $('#modal-changepw').modal('show')
  $('#changepw-message').text('')
}

const showModalChangeFail = function (response) {
  $('#about-me').hide()
  $('#welcome').text('Change Password Window Failed to Open, Please Try Again.')
  $('#welcome').addClass('failure')
  $('#main-text').text(`Click on "Home" to go back.`)
}

// User forms start Here:
const signUpSuccess = function (response) {
  $('#sign-up').trigger('reset')
  $('#sign-up-message').removeClass('failure')
  $('#sign-up-message').text('You Have Successfully Signed Up!')
  $('#sign-up-message').addClass('success')

  setTimeout(() => {
    $('#modal-signup').modal('hide')
  }, 1500)
}

const signUpFail = function (response) {
  $('#sign-up').trigger('reset')
  $('#sign-up-message').removeClass('success')
  $('#sign-up-message').text(`Sign Up Failed. Please Try Again or Click on the "GO BACK" Button to Return.`)
  $('#sign-up-message').addClass('failure')
}

const logInSuccess = function (response) {
  $('#sign-in').trigger('reset')
  $('#login-message').removeClass('failure')
  $('#login-message').text('You Have Successfully Signed In!')
  $('#login-message').addClass('success')
  $('#modal-changepw').trigger('reset')
  store.user = response.user
  $('#button-changepw').show()
  $('#button-logout').show()
  $('#button-portal').show()
  $('.button-signup').hide()
  $('.button-login').hide()

  setTimeout(() => {
    $('#modal-signin').modal('hide')
  }, 1500)
}

const logInFail = function (response) {
  $('#sign-in').trigger('reset')
  $('#login-message').removeClass('success')
  $('#login-message').text(`Sign In Failed. Please Try Again or Click on the "GO BACK" Button to Return.`)
  $('#login-message').addClass('failure')
}

const changePwSuccess = function (response) {
  $('#change-pw').trigger('reset')
  $('#changepw-message').removeClass('failure')
  $('#changepw-message').text('You Have Changed Your Password.')
  $('#changepw-message').addClass('success')

  setTimeout(() => {
    $('#modal-changepw').modal('hide')
  }, 1500)
}

const changePwFail = function (response) {
  $('#change-pw').trigger('reset')
  $('#changepw-message').removeClass('success')
  $('#changepw-message').text(`Change Password Failed. Please Try Again or Click on the "GO BACK" Button to Return.`)
  $('#changepw-message').addClass('failure')
}

const logOutSuccess = function (response) {
  $('#button-changepw').hide()
  $('#button-portal').hide()
  $('#button-logout').hide()
  $('.space').text('You Have Successfully Signed Out!')
  $('.space').addClass('success')
  $('#modal-signup').trigger('reset')
  $('#modal-signin').trigger('reset')
  $('#modal-changepw').trigger('reset')
  store.user = null
  $('.button-signup').show()
  $('.button-login').show()

  setTimeout(() => {
    $('.space').text('')
  }, 1500)
}

// Button on side bar functionality (starts here):
const showHomeSuccess = function (response) {
  $('#about-me').show()
  $('#welcome').show()
  $('#main-text').show()
}

const showPortalSuccess = function (response) {
  $('#about-me').hide()
  $('#welcome').hide()
  $('#main-text').hide()
}

module.exports = {
  showModalSignUpSuccess,
  showModalLogInSuccess,
  showModalChangeSuccess,
  signUpSuccess,
  showModalSignUpFail,
  showModalLogInFail,
  showModalChangeFail,
  logInSuccess,
  signUpFail,
  logInFail,
  changePwSuccess,
  changePwFail,
  showHomeSuccess,
  showPortalSuccess,
  logOutSuccess
}
