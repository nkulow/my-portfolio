import { Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import scroller from 'react-scroll'
import {Link} from 'react-scroll'
import './assets/NavBar.css'

function NavBar(){
    return(
        // <div className = "NavBar">
            <Navbar className="navbar-custom" expand="lg" fixed="top">
                    <Navbar.Brand href='home'>Nathan Kulow</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link className="nav-link">
                            <Link 
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                            >about</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link 
                                activeClass="active"
                                to="portfolio"
                                spy={true}
                                smooth={true}
                            >portfolio</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link 
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                            >contact</Link>
                        </Nav.Link>
                    </Nav>
               </Navbar>
               
        // </div>
    )
}

export default NavBar;