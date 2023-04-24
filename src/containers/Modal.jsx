import React from 'react';
import './Modal.scss';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Modal = (props) => {
  return (
   <form>
   {props.text && <h1>Welcome Back</h1>}
   {props.text2 && <h1>Register your Account</h1>}
   {props.text2 && <p>Please note that phone verification is required for signup. Your number will only be used to verify your identity for security purposes.</p>}
    <input type='email' placeholder='Email Address' />
    {props.password && <input type='password' />}
    {props.login && <button className='sign' type='submit'>Continue</button>}
    {props.register && <button className='sign' type='submit'>Register</button>}
    {props.text3 && <span><p>Don't have an account ? <Link to='/signup'>Sign up</Link></p></span>}
    <h5>OR</h5>
    {props.google1 && <button type='submit'> <FcGoogle />Continue with Google</button>}
    {props.google2 && <button type='submit'><FcGoogle />Register with Google</button>}
   </form>
  )
}

export default Modal