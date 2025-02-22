import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function AuthRoute({children}) {
    const { isAuthenticated } = useSelector(state => state.userAuth)

    return (
        !isAuthenticated ? children : <Navigate to="/"/>
  )
}

export default AuthRoute
