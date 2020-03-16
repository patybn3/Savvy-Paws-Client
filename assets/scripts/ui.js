const store = require('./store')

// Buttons that open Modals
const showModalSignUpSuccess = function (response) {
  // console.log('something')
  $('#sign-up').trigger('reset')
  $('#sign-up-message').text('')
  $('#modal-signin').modal('hide')
  $('.text-all').empty()
}

const showModalLogInSuccess = function (response) {
  // console.log('something')
  $('#sign-in').trigger('reset')
  $('#modal-signin').modal('show')
  $('#login-message').text('')
  $('#modal-signup').modal('hide')
  $('.text-all').empty()
}

const showModalChangeSuccess = function (response) {
  // console.log('something')
  $('#edit-message').hide()
  $('#click-message').hide()
  $('#sign-up').trigger('reset')
  $('#modal-changepw').modal('show')
  $('#changepw-message').text('')
  $('.text-all').empty()
}

// User forms start Here:
const signUpSuccess = function (response) {
  $('#sign-up').trigger('reset')
  $('#sign-up-message').removeClass('failure')
  $('#sign-up-message').text('You Have Successfully Signed Up!')
  $('#sign-up-message').addClass('success')

  setTimeout(() => {
    $('#modal-signup').modal('hide')
  }, 500)
}

const signUpFail = function (response) {
  $('#sign-up').trigger('reset')
  $('#sign-up-message').removeClass('success')
  $('#sign-up-message').text(`Sign Up Failed. Please Try Again!`)
  $('#sign-up-message').addClass('failure')
}

const logInSuccess = function (response) {
  $('.side-section').trigger('reset')
  $('.text-all').empty()
  $('#sign-in').trigger('reset')
  $('#login-message').removeClass('failure')
  $('#login-message').text('You Have Successfully Signed In!')
  $('#login-message').addClass('success')
  $('#modal-changepw').trigger('reset')
  store.user = response.user
  $('#button-changepw').show()
  $('#button-logout').show()
  $('#button-home').show()
  $('.button-signup').hide()
  $('.button-login').hide()
  $('#get-pets').show()
  $('#clear-pets').show()
  $('#new-pets').show()
  $('.side-section').show()
  $('#centered-bar').hide()

  setTimeout(() => {
    $('#modal-signin').modal('hide')
    $('#centered-bar').fadeOut()
  }, 500)

  setTimeout(() => {
    $('#hamburger').fadeIn()
    $('#dog-image').addClass('background')
    $('#cat-image').addClass('background')
    $('#dog-sun-image').addClass('background')
  }, 600)
}

const logInFail = function (response) {
  $('#sign-in').trigger('reset')
  $('#login-message').removeClass('success')
  $('#login-message').text(`Sign In Failed. Please Try Again!`)
  $('#login-message').addClass('failure')
}

const changePwSuccess = function (response) {
  $('#get-pets').trigger('reset')
  $('.text-all').empty()
  $('#change-pw').trigger('reset')
  $('#changepw-message').removeClass('failure')
  $('#changepw-message').text('You Have Changed Your Password.')
  $('#changepw-message').addClass('success')

  setTimeout(() => {
    $('#modal-changepw').modal('hide')
  }, 500)
}

const changePwFail = function (response) {
  $('#change-pw').trigger('reset')
  $('#changepw-message').removeClass('success')
  $('#changepw-message').text(`Change Password Failed. Please Try Again!`)
  $('#changepw-message').addClass('failure')
}

const logOutSuccess = function (response) {
  $('#get-pets').trigger('reset')
  $('#button-changepw').hide()
  $('#button-home').hide()
  $('#button-logout').hide()
  $('.space').text('You Have Successfully Signed Out!')
  $('.space').addClass('success')
  $('#modal-signup').trigger('reset')
  $('#modal-signin').trigger('reset')
  $('#modal-changepw').trigger('reset')
  store.user = null
  $('.button-signup').show()
  $('.button-login').show()
  $('#get-pets').hide()
  $('#clear-pets').hide()
  $('#new-pets').hide()
  $('.text-all').empty()
  $('.edit-pet').hide()
  $('#edit-message').hide()
  $('#click-message').hide()
  $('.side-section').hide()

  setTimeout(() => {
    $('.space').text('')
    $('#hamburger').fadeOut()
    $('.main-section').fadeOut()
    $('#dog-image').fadeIn()
    $('#cat-image').fadeIn()
    $('#dog-sun-image').fadeIn()
  }, 500)

  setTimeout(() => {
    $('#centered-bar').fadeIn()
  }, 600)
}

// Button on side bar functionality (starts here):
//
const showHomeSuccess = function (response) {
  $('.main-section').show()
  $('#about-me').show()
  $('#welcome').show()
  $('.main-text').show()
  $('.add-new').hide()
}

// const showHomeFail = function (response) {
//   $('#about-me').hide()
//   $('#welcome').text('Home Failed to Open, Please Try Again.')
//   $('#welcome').addClass('failure')
//   $('#main-text').text('')
// }

const showPortalSuccess = function (response) {
  $('.text-all').hide()
  $('#about-me').hide()
  $('#welcome').hide()
  $('.main-text').hide()
}

const showPortalFail = function (response) {
  $('#about-me').hide()
  $('#welcome').text('User Portal Failed to Open, Please Try Again.')
  $('#welcome').addClass('failure')
  $('.main-text').text('')
}

const goBackSuccess = function (response) {
  $('#edit-form').trigger('reset')
  $('.text-all').trigger('reset')
  $('#modal-signin').modal('hide')
  $('#modal-signup').modal('hide')
  $('#modal-changepw').modal('hide')
  $('.add-new').hide()
  $('#edit-form').modal('hide')
  $('#get-pets').trigger('reset')
  // $('#about-me').show()
  // $('#welcome').hide()
  // $('#main-text').hide()
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
  showModalSignUpSuccess,
  showModalLogInSuccess,
  showModalChangeSuccess,
  signUpSuccess,
  logInSuccess,
  signUpFail,
  logInFail,
  changePwSuccess,
  changePwFail,
  showHomeSuccess,
  showPortalSuccess,
  logOutSuccess,
  goBackSuccess,
  showPortalFail
  // goBackFail
}
