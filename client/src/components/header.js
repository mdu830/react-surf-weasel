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
    NavLink,
    Button,
    Modal
} from 'reactstrap';
import { TextField } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';



function Header(props) {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    let history = useHistory();

    const [modal, setModal] = useState(false);

    const toggle2 = () => setModal(!modal);

    // modal clicks
    const handleLoginReq = () => {
        toggle2();
    }

    const handleRegisterReq = () => {
        history.push('/register');
        toggle2();
    }

    const handleRegisterLink = () => {
        history.push('/register');
        toggle();
    }


    return (
        <>
            <div>
                {/* Login popup modal */}

                <Modal isOpen={modal}
                    toggle={toggle2}
                    className="modaler">
                    <form className="m-3" id="loginForm" noValidate autoComplete="off">
                        <div>
                            <h1 className="text-center p-3">Login</h1>
                        </div>
                        <div>
                            <AccountCircle className="accountCircle" />
                            <TextField id="" type="email" label="Email" />
                        </div>
                        <div>
                            <AccountCircle className="accountCircle" />
                            <TextField id="" type="password" label="Password" defaultValue="" />
                        </div>
                        <div className="loginButtons">
                            <Button className="m-1" color="outline-secondary" onClick={handleRegisterReq}>Register</Button>
                            <Button className="m-1" color="primary" type="submit" onSubmit={handleLoginReq}>Login</Button>{' '}
                        </div>
                    </form>
                </Modal>

                {/* Navbar */}
                <Navbar className="titleBar" color="light" light expand="md">
                    <NavbarBrand href="/"><img className="image-fluid icon" alt="" src={Icon} /></NavbarBrand>
                    <NavbarBrand href="/"><div className="appTitle mr-auto">Surf Weasel</div></NavbarBrand>


                    <NavbarToggler className="m-3" onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>

                            <NavItem>
                                <NavLink onClick={toggle2}>Login</ NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={handleRegisterLink}>Register</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        </>
    )
}

export default Header;