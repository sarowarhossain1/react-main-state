import React from 'react'

const FormAdd = ({name,email,password}) => {
  return (
    <div >
  
        <p>
           Name: {name}
        </p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
    </div>
  )
}

export default FormAdd