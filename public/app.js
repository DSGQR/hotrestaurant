const getReservations = () => {
    // Get from server the tables reservation list
    fetch('/reservations')
      .then(r => r.json())
      .then(r => {
        document.querySelector('#tableList').innerHTML = ''
        r.forEach(reservation => {
          let reservItem = document.createElement('li')
          reservItem.innerHTML = "Name: " + reservation.name + ", phone: " + reservation.phone + ", email: " + reservation.email;
          document.querySelector('#tableList').appendChild(reservItem)
        })
      })
      .catch(e => console.error(e))
  }
  
  const getWaitingList = () => {
    // Get from server the waiting list
    fetch('/waitList')
      .then(r => r.json())
      .then(r => {
        document.querySelector('#waitList').innerHTML = ''
        r.forEach(reservation => {
          let waitItem = document.createElement('li')
          waitItem.innerHTML = "Name: " + reservation.name + ", phone: " + reservation.phone + ", email: " + reservation.email;
          document.querySelector('#waitList').appendChild(waitItem)
        })
      })
      .catch(e => console.error(e));
  }
  
  const createReservation = () => {
  
    // override default behavior
    event.preventDefault();
    // get data from screen 
    let resName = document.querySelector('#name').value.trim();
    let resPhone = document.querySelector('#phone').value.trim();
    let resEmail = document.querySelector('#email').value.trim();
  
    if (resName != '' || resPhone != '' || resEmail != "") {
      // Post the screen entries 
      fetch('/reservations', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8'
          },
          body: JSON.stringify({
            name: resName,
            phone: resPhone,
            email: resEmail
          })
        })
        .then(r => {
          // getBooks()
          console.log(r)
        })
      .catch(e => console.error(e));
      // Clear screen 
      document.querySelector('#name').value = '';
      document.querySelector('#phone').value = '';
      document.querySelector('#email').value = '';
    } else {
      console.log('Please complete each entry in the form to proceed')
    }
  
  
  }