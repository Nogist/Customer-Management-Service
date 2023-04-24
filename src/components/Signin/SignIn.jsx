import React from 'react';
import Modal from '../../containers/Modal';
import './signin.scss';
import Logo from '../../assets/logo1.svg'

const SignIn = () => {
  return (
    <div className='signin'>
      <img src={Logo} alt='logo' />
      <Modal
        text
        login
        text3
        google1
      />
      <p>Terms of use | Privacy Policy</p>
    </div>
  )
}

export default SignIn