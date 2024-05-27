import React, { useState } from 'react'
import Form from '../../components/shared/forms/Form'
import { Link } from 'react-router-dom'

const Register = () => {
  const [formData, setFormData] = useState({
    role: 'donor',
    email: '',
    password: '',
    name: '',
    organisationName: '',
    hospitalName: '',
    phone: '',
    address: ''
  })
  const submitRegisterForm = () => {
    alert( JSON.stringify(formData))
  }
  return (
    <>
      <div className='row'>
        <div className='col-md-8 login-page'>
          <img className='form-banner' src="./assets/images/login.jpg" alt='bannerImage'/>
        </div>
        <div className='col-md-4 register-form'>
          <Form 
            formTitle={'Register User'} 
            formButton={'Register'}
            formType={'register'}
            onSubmitForm={submitRegisterForm}
            formData={formData}
            setFormData={setFormData}
          />
          <div className='register-link'>
            <p>Already have and account?</p>
            <Link to={'/login'}>Login</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
