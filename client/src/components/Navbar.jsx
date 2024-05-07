import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  const { logout } = props
  return (
    <div className="navbar">

      <Link to="/profile">
        <button>
          Profile
        </button>
      </Link>

      <Link to="/public">
        <button>
          Public
        </button>
      </Link>
      <button onClick={logout}>Logout</button>
    </div>
  )
}