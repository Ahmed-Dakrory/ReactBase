import React from 'react'
import { Navigate } from 'react-router-dom' 
function AuthCover({element, children}) {
    const token = localStorage.getItem("token")
  if (token === null | token === "") {
    return <Navigate to="/login" replace />
  }
  return children 

}
export default AuthCover