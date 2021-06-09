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
                    <Image src="../../../assets/images/woman.png" roundedCircle />
                </Nav.Link>
                {/* Cart */}
                <NavDropdown title="Cart" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                </NavDropdown>
                
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
