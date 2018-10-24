const fetch = window.fetch

document.querySelector('#submit').addEventListener('click', event => {
  event.preventDefault()

  fetch('/reservations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      name: document.querySelector('#name').value,
      phone: document.querySelector('#phone').value,
      email: document.querySelector('#email').value,
    })
  })
    .then(r => {
      window.location = './reservations'
    })
    .catch(e => console.error(e))
})