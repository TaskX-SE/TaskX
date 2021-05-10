import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

import {BrowserRouter as Router, Switch, Route, useParams} from "react-router-dom";
import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
import App from './App';
import Motivation from './motivation';
import ContactUsPage from './ContactUs';
import UserDetails from './userdetails';
import Agenda from './agenda';
import MediaCard from './login';

class NavBarTaskX extends React.Component{
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <Router>
                            <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
                                <Navbar.Brand href="/">TaskX</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    {/* <Nav.Link href="/agenda">Agenda</Nav.Link> */}
                                    <Nav.Link href="/motivation">Motivational Content</Nav.Link>
                                    <Nav.Link href="/contact-us">Contact Us</Nav.Link>
                                    <Nav.Link href="/user">User</Nav.Link>
                                    {/* <Nav.Link href="/login">Login</Nav.Link> */}
                                    {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                    </NavDropdown> */}
                                    </Nav>
                                    {/* <Form inline>
                                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                    <Button variant="outline-success">Search</Button>
                                    </Form> */}
                                </Navbar.Collapse>
                            </Navbar>
                            <br />
                            <Switch>
                                <Route exact path="/">
                                    <App />
                                </Route>
                                
                                {/* <Route path="/about-us">
                                    <AboutUs />
                                </Route> */}
                                <Route path="#home">
                                    <App />
                                </Route>
                                <Route path="/contact-us">
                                    <ContactUsPage />
                                </Route>
                                {/* <Route path="/agenda">
                                    <Agenda />
                                </Route> */}
                                <Route path="/motivation">
                                    <Motivation />
                                </Route>
                                <Route path="/user">
                                    <UserDetails />
                                </Route>
                                <Route path="/login">
                                    <MediaCard />
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        )  
    }
}


export default NavBarTaskX;