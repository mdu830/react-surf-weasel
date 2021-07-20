import Icon from "../assets/images/Icon.png"
import '../assets/style.css'
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
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
                    

                    <NavbarToggler className="m-3" onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>

                            <NavItem>
                                <NavLink href="/login" onClick={() => useHistory.push('/login')}>Login</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/register">Register</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        </>
    )
}

export default Header;