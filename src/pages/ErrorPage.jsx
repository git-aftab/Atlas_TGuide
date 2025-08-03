import React from 'react'
import { useRouteError } from 'react-router-dom'

const ErrorPage = () => {
    const error = useRouteError()

  return (
    <div>This is Error Page</div>
  )
}

export default ErrorPage