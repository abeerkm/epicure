import React, { useState } from 'react'
import { UserLogin } from '../login/login'
import { Register } from '../register/register'

export const User = () => {
  const [currentForm,setCurrentForm]=useState('login')

  const toggleForm=(formName: React.SetStateAction<string>)=>{
    setCurrentForm(formName)
  }
  return (
    <div>
    {
      currentForm==="login"? <UserLogin onFormSwitch={toggleForm} />:<Register onFormSwitch={toggleForm}/>
    }
    </div>
  )
}
