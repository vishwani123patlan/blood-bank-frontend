import React, { useState } from 'react'
import Form from '../../components/shared/forms/Form'
import { Link } from 'react-router-dom'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const submitLoginForm = () => {
    alert("login Success")
  }
  return (
    <>
      <div className='row'>
        <div className='col-md-8 login-page'>
          <img className='form-banner' src="./assets/images/login.jpg" alt='bannerImage'/>
        </div>
        <div className='col-md-4 login-form'>
          <Form 
            formTitle={'Login'} 
            formButton={'Login'}
            formType={'login'}
            onSubmitForm={submitLoginForm}
            formData={formData}
            setFormData={setFormData}
          />
          <div className='register-link'>
            <p>Don't have any account?</p>
            <Link to={'/register'}>Regsiter</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login