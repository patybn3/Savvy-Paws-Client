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
    .catch(ui.changePwFail)
}

const onLogout = event => {
  event.preventDefault()

  api.logOut()
    .then(ui.logOutSuccess)
    .catch(ui.logOutFail)
}

// Fuctions to make buttons work
const onAboutMe = event => {
  event.preventDefault()

  ui.aboutMeSuccess()
  // ui.showHomeFail()
}

const onShowPortal = event => {
  event.preventDefault()

  ui.showPortalSuccess()
  ui.showPortalFail()
}

const onGoBack = event => {
  event.preventDefault()

  ui.goBackSuccess()
  // ui.goBackFail()
}

const onHamburger = event => {
  event.preventDefault()

  ui.hamburgerSuccess()
  // ui.goBackFail()
}

const onHamburgerX = event => {
  event.preventDefault()

  ui.hamburgerXSuccess()
  // ui.goBackFail()
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
  onShowPortal,
  onGoBack,
  onHamburger,
  onHamburgerX
}
