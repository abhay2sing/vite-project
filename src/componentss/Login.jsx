import React from 'react';
import './Login.css'

const Login = ({closeModal}) => {
  let modal = document.querySelector('.log1');

  return (
<div className='log1'>
<span  onClick = {() => closeModal(false)}className='close'>
&times;
</span>
    <h4>Login</h4>
    <p>please enter your email and password</p>
    
      
    
    <div className='log'>
    <form action="" className='logi'>
        <input type="email" placeholder='email' />
        <input type="password" placeholder='password' />
        <button type='submit' className='button1'>login</button>

    </form>
    </div>
    </div>
  )
}

export default Login