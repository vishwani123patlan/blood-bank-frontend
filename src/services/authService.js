export const handleLogin = (e, formData)=>{
  e.preventDefault()
  try {
    console.log('Login', JSON.stringify(formData))
  } catch (error) {
    console.log(error)
  }
}

export const handleRegister = (e, formData)=>{
  e.preventDefault()
  try {
    console.log('Login', JSON.stringify(formData))
  } catch (error) {
    console.log(error)
  }
}