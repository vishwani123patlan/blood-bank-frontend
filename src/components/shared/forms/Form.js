import React, {useState} from 'react'
import InputType from './InputType'
import { handleLogin, handleRegister } from '../../../services/authService'

function Form({ formTitle, formButton, formType, formData, setFormData }) {
  const setFormInput = (key, value) => {
    setFormData(prevState => ({
      ...prevState,
      [key]: value
    }))
  }

  return (
    <div>
      <form onSubmit={(e)=>{
        if(formType==='login') 
          return handleLogin(e, formData)
        if(formType==='register')
          return handleRegister(e, formData)
      }}>
        <h1 className='text-center'>{ formTitle }</h1>
        <hr />
        {
          (() => {
            switch (true) {
              case formType === 'login':
                return(
                  <>
                  <div>
                    <InputType 
                      labelFor={'forEmail'}
                      labelText={'Email'}
                      inputType={'email'}
                      inputName={'email'}
                      onChange={(e) => setFormInput('email', e.target.value)}
                    />
                    <InputType 
                      labelFor={'forPassword'}
                      labelText={'Password'}
                      inputType={'password'}
                      inputName={'password'}
                      onChange={(e) => setFormInput('password', e.target.value)}
                    />
                  </div>
                  </>
                )

              case formType === 'register':
                return(
                  <>
                    <div className='role-radios form-check'>
                      <InputType 
                        labelFor={'forDonor'}
                        labelText={'Donor'}
                        inputType={'radio'}
                        inputName={'role'}
                        inputClassName="form-check-input role-radio-button"
                        labelClassName='form-check-label'
                        checked={formData.role === 'donor'}
                        onChange={() => setFormInput('role', 'donor')}
                      />
                      <InputType 
                        labelFor={'forHospital'}
                        labelText={'Hospital'}
                        inputType={'radio'}
                        inputName={'role'}
                        inputClassName="form-check-input role-radio-button"
                        labelClassName='form-check-label'
                        checked={formData.role === 'hospital'}
                        onChange={() => setFormInput('role', 'hospital')}
                      />
                      <InputType 
                        labelFor={'forOrganisation'}
                        labelText={'Organisation'}
                        inputType={'radio'}
                        inputName={'role'}
                        inputClassName="form-check-input role-radio-button"
                        labelClassName='form-check-label'
                        checked={formData.role === 'organisation'}
                        onChange={() => setFormInput('role', 'organisation')}
                      />
                    </div>
                    {
                      (()=>{
                        switch (true) {
                          case formData.role === 'donor':
                            return(
                              <>
                                <InputType 
                                  labelFor={'forName'}
                                  labelText={'Name'}
                                  inputType={'text'}
                                  inputName={'name'}
                                  onChange={(e) => setFormInput('name', e.target.value)}
                                />
                              </>
                            )
                          case formData.role === 'hospital':
                            return(
                              <>
                                <InputType 
                                  labelFor={'forHospital'}
                                  labelText={'Hospital Name'}
                                  inputType={'text'}
                                  inputName={'hospitalName'}
                                  onChange={(e) => setFormInput('hospitalName', e.target.value)}
                                />
                              </>
                            )
                          case formData.role === 'organisation':
                              return(
                                <>
                                  <InputType 
                                    labelFor={'organisationName'}
                                    labelText={'Organisation Name'}
                                    inputType={'text'}
                                    inputName={'organisationName'}
                                    onChange={(e) => setFormInput('organisationName', e.target.value)}
                                  />
                                </>
                              )
                        }
                      })()
                    }
                    <InputType 
                      labelFor={'forEmail'}
                      labelText={'Email'}
                      inputType={'email'}
                      inputName={'email'}
                      onChange={(e) => setFormInput('email', e.target.value)}
                    />
                    <InputType 
                      labelFor={'forPassword'}
                      labelText={'Password'}
                      inputType={'password'}
                      inputName={'password'}
                      onChange={(e) => setFormInput('password', e.target.value)}
                    />
                    <InputType 
                      labelFor={'forPhone'}
                      labelText={'Phone Number'}
                      inputType={'number'}
                      inputName={'phone'}
                      onChange={(e) => setFormInput('phone', e.target.value)}
                    />
                    <InputType 
                      labelFor={'forAddress'}
                      labelText={'Address'}
                      inputType={'text'}
                      inputName={'address'}
                      onChange={(e) => setFormInput('address', e.target.value)}
                    />
                  </>
                )
            }
          })()
        }
        <div className='text-center form-button'>
          <button type="submit" className="btn btn-success">{ formButton }</button>
        </div>
      </form>
    </div>
  )
}

export default Form