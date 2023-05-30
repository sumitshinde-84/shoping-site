import { useState } from 'react';
import "./style/sign-login-form.css";

const SignLoginForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('hello');
    try {
      const response = await fetch('https://inventryapp-production.up.railway.app/catalog/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Registration successful
        console.log('Registration successful');
      } else {
        // Registration failed
        console.log('Registration failed');
      }
    } catch (error) {
      console.error('Error occurred while registering:', error);
    }
  };

  const handleChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value
    }));
  };

  return (
    <div className="sign-login-form">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
          />
        </p>
        <p>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
          />
        </p>
        <p>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </p>
        <p>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </p>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default SignLoginForm;
