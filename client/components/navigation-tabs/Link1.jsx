import React, {Component, useState} from 'react'
import PasswordStrengthBar from 'react-password-strength-bar';

function PasswordStrength(){
  const [password, setPassword] = useState('')

  function handleClick(e) {
    console.log(e)
    setPassword(e.target.value)
    console.log(password)
  }
  return (
    <form>
      <label>
        Username &nbsp;
        <input type='text' />
        </label>
        <br />
        <label>
          Password &nbsp;&nbsp;
          <input type='password' onChange={handleClick}/>
          <PasswordStrengthBar className='password' password={password} barColors={['#ddd', '#8b0000', '#ffc0cb', 'yellow', '#00ff00']} />
        </label>
        <br />
        <input type='submit' />
    </form>
  )
}

export default PasswordStrength;