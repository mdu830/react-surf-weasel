import Icon from "../assets/images/Icon.png"
import '../assets/style.css'
import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

const Header = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <div>
                {/* <nav className="navbar justify-content-center bg-light titleBar">

                </nav> */}
                <Navbar className="titleBar" color="light" light expand="md">
                    <NavbarBrand href="/"><img className="image-fluid icon" alt="" src={Icon}></img></NavbarBrand>
                    <div className="appTitle mr-auto">Surf Weasel</div>
                    <NavbarToggler className="m-2" onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>

                            <NavItem>
                                {/* <NavLink href="/components/">Search form here</NavLink> */}
                            </NavItem>

                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Sign In
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <NavLink href="/login">Login</NavLink>
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        <NavLink href="/register">Register</NavLink>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        </>
    )
}

export default Header;