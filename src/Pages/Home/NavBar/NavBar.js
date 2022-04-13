import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">Dynamic Car Solutions</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        
                        <Nav className='ms-auto menu-item '>
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link href="/home#services">Services</Nav.Link>
                            <Nav.Link href="/home#experts">Experts</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>  
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>  
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;