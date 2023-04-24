import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo1.svg';
import './Home.scss';

const Home = () => {
  return (
    <div className='home'>
      <span>
        <img src={Logo} alt='logo' />
      </span>
      <h3>Welcome to chat gpt5.0</h3>
      <h3>Log in with your OpenAI account to continue</h3>
      <div>
        <button><Link to='/signin'>Login</Link></button>
        <button><Link to='/signup'>Register</Link></button>
      </div>
    </div>
  )
}

export default Home