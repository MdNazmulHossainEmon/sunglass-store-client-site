import React from 'react';
import { Container,  Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
// import { HashLink } from 'react-router-hash-link';
import './Navigation.css'
const Navigation = () => {
  const {user,logOut} = useAuth()
    return (
        <>
        
        <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg" sticky='top'>
          <Container>
          <Navbar.Brand href="#home">Sunglass</Navbar.Brand>
          <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end navbar-spacing">
    <Link style={{textDecoration : 'none'}} className='text-white'  to="/home">Home</Link>
   {
   user?.email ? 
   <button onClick={logOut} className='btn btn-danger'>Logout</button>
   :
     <Link to='/login'>
   <button  className='btn text-white'>Login</button>
   </Link>
   }
      {/* {
        user?.email && <Navbar.Text>
        Signed in as: <a href="#login">{user?.displayName}</a>
      </Navbar.Text>
      } */}
    </Navbar.Collapse>
          </Container>
        </Navbar>
      
       
      </>
    );
};

export default Navigation;