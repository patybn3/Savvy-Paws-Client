const config = require('./config')

// const store = require('./store')

// Shows all Modals
const showModal = () => {
  return $.ajax({
    url: config.apiUrl + '/pets',
    method: 'GET'
  })
}
// User forms
const onSignUp = (data) => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

module.exports = {
  showModal,
  onSignUp
}
