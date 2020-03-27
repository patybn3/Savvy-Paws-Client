const store = require('./store')

// Buttons that open Modals
const showModalSignUpSuccess = function (response) {
  resetAll()
  $('#sign-up-message').text('')
  $('#modal-signin').modal('hide')
  $('.text-all').empty()
}

const showModalLogInSuccess = function (response) {
  resetAll()
  $('#modal-signin').modal('show')
  $('#login-message').text('')
  $('#modal-signup').modal('hide')
  $('.text-all').empty()
}

const showModalChangeSuccess = function (response) {
  resetAll()
  $('#edit-message').hide()
  $('#click-message').hide()
  $('#modal-changepw').modal('show')
  $('#changepw-message').text('')
  $('.text-all').empty()
}

// User forms start Here:
const signUpSuccess = function (response) {
  resetAll()
  $('#sign-up-message').removeClass('failure')
  $('#sign-up-message').text('You Have Successfully Signed Up!')
  $('#sign-up-message').addClass('success')

  setTimeout(() => {
    $('#modal-signup').modal('hide')
  }, 500)
}

const signUpFail = function (response) {
  resetAll()
  $('#sign-up-message').removeClass('success')
  $('#sign-up-message').text(`Sign Up Failed. Please Try Again!`)
  $('#sign-up-message').addClass('failure')
}

const logInSuccess = function (response) {
  resetAll()
  $('#login-message').removeClass('failure')
  $('#login-message').text('You Have Successfully Signed In!')
  $('#login-message').addClass('success')
  store.user = response.user
  $('#button-logout').show()
  $('.button-signup').hide()
  $('.button-login').hide()
  // this is the home button:
  $('#get-pets').show()
  $('#clear-pets').show()
  $('#middle-logo').hide()
  $('.middle-title').hide()

  $('#get').attr('disabled', false)

  setTimeout(() => {
    $('#modal-signin').modal('hide')
  }, 400)

  setTimeout(() => {
    $('#hamburger').fadeIn()
    $('#centered-bar').fadeOut()
  }, 450)
}

const logInFail = function (response) {
  resetAll()
  $('#login-message').removeClass('success')
  $('#login-message').text(`Sign In Failed. Please Try Again!`)
  $('#login-message').addClass('failure')
}

const changePwSuccess = function (response) {
  resetAll()
  $('.text-all').empty()
  $('#changepw-message').removeClass('failure')
  $('#changepw-message').text('You Have Changed Your Password.')
  $('#changepw-message').addClass('success')

  setTimeout(() => {
    $('#modal-changepw').modal('hide')
  }, 300)
}

const changePwFail = function (response) {
  resetAll()
  $('#changepw-message').removeClass('success')
  $('#changepw-message').text(`Change Password Failed. Please Try Again!`)
  $('#changepw-message').addClass('failure')
}

const logOutSuccess = function (response) {
  resetAll()
  $('#button-logout').hide()
  store.user = null
  $('.button-signup').show()
  $('.button-login').show()
  $('.text-all').empty()
  $('#edit-message').hide()
  $('#click-message').hide()
  $('.side-section').hide()

  $('#get').attr('disabled', true)

  $('.content').removeClass('aside')
  $('.handles').removeClass('handles-aside')

  setTimeout(() => {
    $('.space').text('')
    $('#hamburger').fadeOut()
    $('#hamburgerX').fadeOut()
    $('.main-section').fadeOut()
  }, 300)

  setTimeout(() => {
    $('#middle-logo').fadeIn()
    $('.middle-title').fadeIn()
    $('#centered-bar').fadeIn()
  }, 400)
}

// Button on side bar functionality (starts here):
//
const aboutMeSuccess = function (response) {
  resetAll()
  $('.main-section').show()
  $('.text-all').html('')
  $('#about-me').show()
  $('#welcome').show()
  $('.main-text').show()
}

const hamburgerSuccess = function () {
  resetAll()
  $('#hamburger').hide()
  $('#hamburgerX').show()
  $('.side-section').show()

  setTimeout(() => {
    $('.content').addClass('aside')
    $('.handles').addClass('handles-aside')
  }, 100)
}

const hamburgerXSuccess = function () {
  resetAll()
  $('#hamburger').show()
  $('#hamburgerX').hide()
  $('.side-section').show()

  setTimeout(() => {
    $('.content').removeClass('aside')
    $('.handles').removeClass('handles-aside')
  }, 100)
}

const resetAll = function () {
  $('#new-pets').trigger('reset')
  $('.add-new').trigger('reset')
  $('#get').trigger('reset')
  $('#get-pets').trigger('reset')
  $('#hamburgerX').trigger('reset')
  $('.side-section').trigger('reset')
  $('#hamburger').trigger('reset')
  $('#button-about').trigger('reset')
  $('.handles').trigger('reset')
  $('#modal-signup').trigger('reset')
  $('#modal-signin').trigger('reset')
  $('#modal-changepw').trigger('reset')
  $('#change-pw').trigger('reset')
  $('#sign-in').trigger('reset')
  $('.text-all').trigger('reset')
  $('#sign-up').trigger('reset')
  $('#sign-up').trigger('reset')
  $('#sign-in').trigger('reset')
}

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
  aboutMeSuccess,
  logOutSuccess,
  hamburgerSuccess,
  hamburgerXSuccess
}
