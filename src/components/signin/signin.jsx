import React from 'react'
import Button from '@mui/material/Button';
import { login } from '../../services/UserServices';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './signin.css'
import { useNavigate } from "react-router-dom";
import { useAuth } from '../authRoutes/auth';

const theme = createTheme({
  palette: {
    neutral: {
      main: '#A03037',
      contrastText: '#fff',
    },
    google: {
      main: '#E4E4E4',
      contrastText: '#0A0102',
    },
  },
});
const regexPassword =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
const regexEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function Signin() {
  const navigate = useNavigate();
  // const [user, setUser] = React.useState('')
  // const auth = useAuth()
  // const [displayLoginSignup, setDisplayLoginSignup] = React.useState(true);

  const [signinObj, setSigninObj] = React.useState({
    email: "",
    password: "",
  });
  const [regexObj, setRegexObj] = React.useState({
    emailBorder: false,
    passwordBorder: false,
    emailHelper: "",
    passwordHelper: "",
  });

  const takeEmail = (event) => {
    // creating a new object combining the old version of object
    setSigninObj((prevState) => ({
      ...prevState,
      email: event.target.value,
    }));
  };

  const takePassword = (event) => {
    setSigninObj((abc) => ({ ...abc, password: event.target.value }));
  };

  const submit = () => {
    let emailTest = regexEmail.test(signinObj.email);
    let passwordTest = regexPassword.test(signinObj.password);

    if (emailTest === false) {
      setRegexObj((prevState) => ({
        ...prevState,
        emailBorder: true,
        emailHelper: "enter correct email",
      }));
    } else {
      setRegexObj((abc) => ({ ...abc, emailBorder: false, emailHelper: "" }));
    }
    if (passwordTest === false) {
      setRegexObj((prevState) => ({
        ...prevState,
        passwordBorder: true,
        passwordHelper: "enter correct password",
      }));
    } else {
      setRegexObj((abc) => ({
        ...abc,
        passwordBorder: false,
        passwordHelper: "",
      }));
    }
    // check entered input with backend api
    if (emailTest === true && passwordTest === true) {
      login(signinObj).then((response) => { console.log(response); localStorage.setItem('token', response.data.result.accessToken); navigate('/Dashboard') })
        .catch((error) => { console.log(error) })
      console.log("successfull login");
    }
  };

  // var auth = localStorage.getItem("token")
  // console.log("hii",auth);
  return (
    <div className='signinDiv'>
      {/* {
        auth ? navigate('/Dashboard') : null
      } */}
      <div className='textDivSignin'>

        <div className='textbox'>
          {/* <label style={{ textAlign: "left" }}>Email</label> */}
          <TextField id="outlined-basic" error={regexObj.emailBorder} helperText={regexObj.emailHelper} label="Email" variant="outlined" size='small' onChange={takeEmail} />
        </div>
        <div className='textbox'>
          {/* <label style={{ textAlign: "left" }}>Password</label> */}
          <TextField id="outlined-basic" error={regexObj.passwordBorder} onChange={takePassword} helperText={regexObj.passwordHelper} label="Password" variant="outlined" size='small' />
        </div>
        <div className='btn1'>
          <ThemeProvider theme={theme}>
            <Button variant="contained" color="neutral" onClick={submit} fullWidth>LOGIN</Button>
          </ThemeProvider>
        </div>
        <div>
          <h3 style={{ textAlign: "center" }} >OR</h3>
        </div>
        <div className='btn2'>
          <Button variant="contained">FACEBOOK</Button>
          <ThemeProvider theme={theme}><Button variant="contained" color="google">GOOGLE</Button></ThemeProvider>
        </div>
      </div>
    </div>
  )
}

export default Signin