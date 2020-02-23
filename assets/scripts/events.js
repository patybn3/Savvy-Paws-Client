const getForm = require('./../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')

// Shows the three modals
const onShowSignUpModal = event => {
  event.preventDefault()

  api.showModal()
    .then(ui.showModalSignUpSuccess)
    .catch(ui.showModalSignUpfail)
}

const onShowLogInModal = event => {
  event.preventDefault()

  api.showModal()
    .then(ui.showModalLogInSuccess)
    .catch(ui.showModalLogInfail)
}

const onShowChangeModal = event => {
  event.preventDefault()

  api.showModal()
    .then(ui.showModalChangeSuccess)
    .catch(ui.showModalChangefail)
}
// User forms start Here
const onSignUp = event => {
  event.preventDefault()

  const form = event.target
  const data = getForm(form)

  api.onSignUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFail)
}

module.exports = {
  onShowSignUpModal,
  onShowLogInModal,
  onShowChangeModal,
  onSignUp
}
