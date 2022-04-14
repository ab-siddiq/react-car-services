import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import {  signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const NavBar = () => {
    const [user] = useAuthState(auth);
    const logOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Dynamic Car Solutions</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        
                        <Nav className=' menu-item '>
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link href="/home#services">Services</Nav.Link>
                            <Nav.Link href="/home#experts">Experts</Nav.Link>
                            {/* <Nav.Link as={Link} to="/about">About</Nav.Link>  
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>   */}
                            
                        </Nav>
                        <Nav className='ms-auto menu-item '>
                            {/* <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link href="/home#services">Services</Nav.Link>
                            <Nav.Link href="/home#experts">Experts</Nav.Link> */}
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            {user && <Nav.Link as={Link} to="/profile">{user?.email}</Nav.Link>}
                            {
                                user ?
                                    <button onClick={logOut}>SignOut</button>
                                    :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>  
                            }
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;