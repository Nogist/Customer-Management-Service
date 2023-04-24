import React from 'react';
import Modal from '../../containers/Modal';
import '../Signin/signin.scss';
import Logo from '../../assets/logo1.svg'


const SignUp = () => {
  return (
    <div className='signin'>
      <img src={Logo} alt='logo' />
      <Modal
        text1
        text2
        register
        google2
      />
    <p>Terms of use | Privacy Policy</p>
  </div>
  )
}

export default SignUp