const React = require('react')

const Form = () =>
  <form>
    <div className='form-group'>
      <label htmlFor='name'>Name</label>
      <input type='text' className='form-control' id='name' aria-describedby='nameHelp' placeholder='Enter name' />
    </div>
    <div className='form-group'>
      <label htmlFor='address'>Phone Number</label>
      <input type='address' className='form-control' id='phone' placeholder='Enter phone number' />
    </div>
    <div className='form-group'>
      <label htmlFor='email'>Email address</label>
      <input type='email' className='form-control' id='email' aria-describedby='emailHelp' placeholder='Enter email' />
      <small id='emailHelp' className='form-text text-muted'>We'll never share your email with anyone else.</small>
    </div>
    <button id='submit' type='submit' className='btn btn-primary'>Add User</button>
  </form>

module.exports = Form