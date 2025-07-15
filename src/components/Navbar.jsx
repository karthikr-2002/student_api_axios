import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>

     <nav class="navbar navbar-expand-lg bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Student App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Add Student</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/delete">Delete Student</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/search">Search Student</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/view">View ALL</Link>
        </li>
        
       
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar