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
  $('.text-all').trigger('reset')
  $('#sign-in').trigger('reset')
  $('#login-message').removeClass('failure')
  $('#login-message').text('You Have Successfully Signed In!')
  $('#login-message').addClass('success')
  $('#modal-changepw').trigger('reset')
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
  $('#button-logout').hide()
  $('.space').text('You Have Successfully Signed Out!')
  $('.space').addClass('success')
  $('#modal-signup').trigger('reset')
  $('#modal-signin').trigger('reset')
  $('#modal-changepw').trigger('reset')
  store.user = null
  $('.button-signup').show()
  $('.button-login').show()
  $('.text-all').empty()
  $('#edit-message').hide()
  $('#click-message').hide()
  $('.side-section').hide()
  $('.side-section').trigger('reset')
  $('#hamburger').trigger('reset')
  $('.handles').trigger('reset')

  $('#get').attr('disabled', true)

  setTimeout(() => {
    $('.space').text('')
    $('#hamburger').fadeOut()
    $('#hamburgerX').fadeOut()
    $('.main-section').fadeOut()
    // $('#dog-image').fadeIn()
    // $('#cat-image').fadeIn()
    // $('#dog-sun-image').fadeIn()
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
  $('#button-about').trigger('reset')
  $('.main-section').show()
  $('.text-all').html('')
  $('#about-me').show()
  $('#welcome').show()
  $('.main-text').show()
}

// const showHomeFail = function (response) {
//   $('#about-me').hide()
//   $('#welcome').text('Home Failed to Open, Please Try Again.')
//   $('#welcome').addClass('failure')
//   $('#main-text').text('')
// }

// const showPortalSuccess = function (response) {
//   $('#button-about').trigger('reset')
//   $('.main-section').show()
//   $('.text-all').html('')
//   $('#about-me').hide()
//   $('#welcome').hide()
//   $('.main-text').hide()
//   $('#get-my-pets').show()
//   $('#button-changepw').show()
//   $('#new-pets').show()
//   $('#button-about').hide()
//   $('#button-portal').hide()
// }
//
// const showPortalFail = function (response) {
//   $('#about-me').hide()
//   $('#welcome').text('User Portal Failed to Open, Please Try Again.')
//   $('#welcome').addClass('failure')
//   $('.main-text').text('')
// }

const hamburgerSuccess = function () {
  $('#get').trigger('reset')
  $('#get-pets').trigger('reset')
  $('#hamburger').trigger('reset')
  $('#hamburger').hide()
  $('#hamburgerX').show()
  $('.side-section').trigger('reset')
  $('.side-section').show()

  setTimeout(() => {
    $('.content').addClass('aside')
    $('.handles').addClass('handles-aside')
  }, 100)
}

const hamburgerXSuccess = function () {
  $('#get').trigger('reset')
  $('#get-pets').trigger('reset')
  $('#hamburgerX').trigger('reset')
  $('#hamburger').show()
  $('#hamburgerX').hide()
  $('.side-section').trigger('reset')
  $('.side-section').show()

  setTimeout(() => {
    $('.content').removeClass('aside')
    $('.handles').removeClass('handles-aside')
  }, 100)
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
  // showPortalSuccess,
  logOutSuccess,
  // showPortalFail,
  hamburgerSuccess,
  hamburgerXSuccess
}
