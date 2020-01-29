import React from 'react';
import {Navbar, Nav}  from 'react-bootstrap';

const Menu =()=>{
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Bivakzones</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/filter">Filter</Nav.Link>
                <Nav.Link href="/favorite">Favorites</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default Menu;