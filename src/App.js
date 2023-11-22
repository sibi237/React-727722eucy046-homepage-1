import React from 'react'
import Signin from './Signin/Signin'
import Dashboard from './home/Dashboard'
import SignUp from './signup/signup'

export default function App() {
   const func1 = () =>{
    if (window.location.pathname=== "/Home")
    {
      return <Dashboard/>
    }
  }
   const func2 = () => {
    if (window.location.pathname=== "/Signin")
    {
      return <Signin/>
    }
  }
   const func3 = () => {
    if (window.location.pathname=== "/")
    {
      return <SignUp/>
    }
  }
    return <div className='ul container'>
    {func1()}
    {func2()}
    {func3()}
  </div>
  
}

