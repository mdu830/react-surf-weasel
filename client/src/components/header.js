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



function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    let history = useHistory();

    return (
        <>
            <div>
                <Navbar className="titleBar" color="light" light expand="md">
                    <NavbarBrand href="/"><img className="image-fluid icon" alt="" src={Icon}></img></NavbarBrand>
                    <div className="appTitle mr-auto">Surf Weasel</div>


                    <NavbarToggler className="m-3" onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>

                            <NavItem>
                                <NavLink onClick={() => history.push('/login')}>Login</ NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={() => history.push('/register')}>Register</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        </>
    )
}

export default Header;