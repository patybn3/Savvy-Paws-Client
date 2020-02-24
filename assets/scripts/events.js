const getForm = require('./../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')

// Shows the three modals
const onShowSignUpModal = event => {
  event.preventDefault()

  api.showModal()
    .then(ui.showModalSignUpSuccess)
    .catch(ui.showModalSignUpFail)
}

const onShowLogInModal = event => {
  event.preventDefault()

  api.showModal()
    .then(ui.showModalLogInSuccess)
    .catch(ui.showModalLogInFail)
}

const onShowChangeModal = event => {
  event.preventDefault()

  api.showModal()
    .then(ui.showModalChangeSuccess)
    .catch(ui.showModalChangeFail)
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
    .catch(ui.logInFail)
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
const onShowHome = event => {
  event.preventDefault()

  api.showModal()
    .then(ui.showHomeSuccess)
    .catch(ui.showHomeFail)
}

const onShowPortal = event => {
  event.preventDefault()

  api.showModal()
    .then(ui.showPortalSuccess)
    .catch(ui.showPortalFail)
}

const onGoBack = event => {
  event.preventDefault()

  api.showModal()
    .then(ui.goBackSuccess)
    .catch(ui.goBackFail)
}

module.exports = {
  onShowSignUpModal,
  onShowLogInModal,
  onShowChangeModal,
  onSignUp,
  onLogIn,
  onChangePw,
  onLogout,
  onShowHome,
  onShowPortal,
  onGoBack
}
