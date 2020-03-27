const getForm = require('./../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')
const eventsPets = require('./pets/events')

// Shows the three modals
const onShowSignUpModal = event => {
  event.preventDefault()

  ui.showModalSignUpSuccess()
}

const onShowLogInModal = event => {
  event.preventDefault()

  ui.showModalLogInSuccess()
}
//
const onShowChangeModal = event => {
  event.preventDefault()

  ui.showModalChangeSuccess()
}
// User forms start Here
const onSignUp = event => {
  event.preventDefault()

  const form = event.target
  const data = getForm(form)

  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFail)
}

const onLogIn = event => {
  event.preventDefault()

  const form = event.target
  const data = getForm(form)

  api.logIn(data)
    .then(ui.logInSuccess)
    .then(function () {
      eventsPets.seeAllPets(event)
    })
    .catch(ui.logOutFail)
}

const onChangePw = event => {
  event.preventDefault()

  const form = event.target
  const data = getForm(form)

  api.onChange(data)
    .then(ui.changePwSuccess)
    .then(function () {
      eventsPets.seeMyPets(event)
    })
    .catch(ui.changePwFail)
}

const onLogout = event => {
  event.preventDefault()

  api.logOut()
    .then(ui.logOutSuccess)
    .catch(ui.fail)
}

// Fuctions to make buttons work
const onAboutMe = event => {
  event.preventDefault()

  ui.aboutMeSuccess()
}

const onHamburger = event => {
  event.preventDefault()

  ui.hamburgerSuccess()
}

const onHamburgerX = event => {
  event.preventDefault()

  ui.hamburgerXSuccess()
}

module.exports = {
  onShowSignUpModal,
  onShowLogInModal,
  onShowChangeModal,
  onSignUp,
  onLogIn,
  onChangePw,
  onLogout,
  onAboutMe,
  onHamburger,
  onHamburgerX
}
