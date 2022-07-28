import React from 'react'
import './LoginSignup.css'
import Button from '@mui/material/Button';
import { login } from '../../services/UserServices';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Signup from './Signup';
import Signin from '../../components/signin/signin';

function Login() {
  const [loginTab, setLoginTab] = React.useState(true)
  // const [signupTab, setSignupTab] = React.useState(false)
  const loginPage = () => {
    setLoginTab(true)
  }

  const signupPage = () => {
    setLoginTab(false)
  }

  return (
    <div className='mainDiv'>
      <div className='imgDiv'>
        <div className='img1'>
          <img src='./images/component.png' alt='' className='image' />
        </div>
        <div className='imgText'>
          <p id='text1'>ONLINE BOOK SHOPPING</p>
        </div>
      </div>
      <div className='textDiv'>
        <div className='text2'>
          <h3 onClick={loginPage}>LOGIN</h3>
          <h3 onClick={signupPage}>SIGNUP</h3>
        </div>
        <div className='blankDiv'>
          {
            loginTab ? <Signin /> : <Signup />
          }
        </div>
      </div>


    </div>
  )
}

export default Login