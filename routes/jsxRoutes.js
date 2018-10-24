const fetch = window.fetch

document.querySelector('#addUser').addEventListener('click', event => {
  event.preventDefault()
  fetch('/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      name: document.querySelector('#name').value,
      phonenumber: document.querySelector('#phoneNumber').value,
      email: document.querySelector('#email').value,
    })
  })
    .then(r => { window.location = './users' })
    .catch(e => console.error(e))
  document.querySelector('#name').value = ''
  document.querySelector('#phoneNumber').value = ''
  document.querySelector('#email').value = ''
})