import React from 'react'
import Aux from '../../../hoc/Auxilairy'
import {
Navbar,
NavDropdown,
Nav,
Form,
FormControl,
Button,
Image } from 'react-bootstrap';
import Cart from './Cart/Cart'

export default function Header() {
    return (
 <Aux>
        <Navbar bg="primary" expand="lg">
           
                <Nav 
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
                >
                <Nav.Link href="#action1">
                    <img src="../../../assets/images/woman.png"  />
                </Nav.Link>
                {/* Cart */}
               <Cart />
                </Nav>
                {/* Search Bar */}
                <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label="Search"
                />
                <Button variant="success">Search</Button>
                </Form>
           
            </Navbar>
    </Aux>
    )
}

