import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  
    return (
      <div>
        <header style={headerstyle}>
          <h3>To Do List</h3>
          <nav>
           <Link style={linkStyle} to="/">Home </Link> | <Link style={linkStyle}  to="/about">About </Link>
          </nav>
        </header>
        
      </div>
    )
  
}


const headerstyle = {
background: '#333',
color: '#fff',
textAlign: 'center',
padding: '10px',

}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}



export default Header
