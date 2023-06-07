import { useState } from 'react';
import "./style/sign-login-form.css";
import { useNavigate } from 'react-router-dom';

const SignLoginForm = () => {

  const navigate = useNavigate();
  const [registerFormData, setRegisterFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  });

  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: ''
  });

  const openLoginForm = () => {
    document.querySelector('.register-form').style.display = 'none';
    document.querySelector('.login-form').style.display = 'block';
  };

  const openRegisterForm = () => {
    document.querySelector('.register-form').style.display = 'block';
    document.querySelector('.login-form').style.display = 'none';
  };

  const handleRegisterSubmit = async (event) => {
    event.preventDefault();
    console.log('Registering...');
    try {
      const response = await fetch('https://inventryapp-production.up.railway.app/catalog/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(registerFormData)
      });

      if (response.ok) {
        // Registration successful
        console.log('Registration successful');
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 2);
        document.cookie = `email=${loginFormData.email}; expires=${expirationDate.toUTCString()}; path=/`;
       
      } else {
        // Registration failed
        console.log('Registration failed');
      }
    } catch (error) {
      console.error('Error occurred while registering:', error);
    }
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();
    console.log('Logging in...');
    try {
      const response = await fetch('https://inventryapp-production.up.railway.app/catalog/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginFormData)
      });

      if (response.ok) {
        // Login successful
        console.log('Login successful');
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 2);
        document.cookie = `email=${loginFormData.email}; expires=${expirationDate.toUTCString()}; path=/`;
        navigate('/Shop');
      } else {
        // Login failed
        console.log('Login failed');
        console.log(loginFormData)
      }
    } catch (error) {
      console.error('Error occurred while logging in:', error);
    }
  };

  const handleRegisterChange = (event) => {
    setRegisterFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value
    }));
  };

  const handleLoginChange = (event) => {
    setLoginFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value
    }));
  };

  return (
    <div className="sign-login-form">
      <div className="register-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleRegisterSubmit}>
          <p>
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              name="firstname"
              value={registerFormData.firstname}
              onChange={handleRegisterChange}
            />
          </p>
          <p>
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              name="lastname"
              value={registerFormData.lastname}
              onChange={handleRegisterChange}
            />
          </p>
          <p>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={registerFormData.email}
              onChange={handleRegisterChange}
            />
          </p>
          <p>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={registerFormData.password}
              onChange={handleRegisterChange}
            />
          </p>
          <button onClick={openLoginForm} type="submit">Register</button>
          <p onClick={openLoginForm} className='login-form-open'>already have account</p>
        </form>
      </div>
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleLoginSubmit}>
          <p>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={loginFormData.email}
              onChange={handleLoginChange}
            />
          </p>
          <p>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={loginFormData.password}
              onChange={handleLoginChange}
            />
          </p>
          <button type="submit">Login</button>
          <p onClick={openRegisterForm} className='open-register-form'>Register</p>
        </form>
      </div>
    </div>
  );
};

export default SignLoginForm;
