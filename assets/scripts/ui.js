// config store = require('./store')

const showModalSignUpSuccess = function (response) {
  // console.log('something')
  $('#sign-up').trigger('reset')
  $('#modal-signup').modal('show')
}

const showModalLogInSuccess = function (response) {
  // console.log('something')
  $('#sign-up').trigger('reset')
  $('#modal-signin').modal('show')
}

const showModalChangeSuccess = function (response) {
  // console.log('something')
  $('#sign-up').trigger('reset')
  $('#modal-changepw').modal('show')
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
  signUpSuccess
}
