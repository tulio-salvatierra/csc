import React from 'react'

function notFound() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="text-center">
        <h1 className="display-1 fw-bold">404</h1>
        <p className="fs-3">Page Not Found</p>
        <p className="lead">The page you are looking for does not exist.</p>
        <a href="/" className="btn btn-primary">
          Go Back Home
        </a>
      </div>
    </div>
  )
}

export default notFound