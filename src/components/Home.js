import './assets/home.css'
import MovingText from 'react-moving-text'
import MovingComponent from 'react-moving-text'
import {Container, Row} from 'react-bootstrap'
import NavBar from './NavBar'
import {Link} from 'react-scroll'
function Home(){
    
    
    return(
        <div className = "Home" >

            <Container fluid>   
                <NavBar/>
                    <div id="div-one" >
                    
                        <h1 id="movingHello">
                            <MovingText
                                type="fadeInFromLeft"
                                duration="2000ms"
                                delay="0s"
                                direction="normal"
                                timing="ease"
                                iteration="1"
                                fillMode="none">
                                Hello
                            </MovingText>  
                        </h1>
                        <p id="title"> My name is <span id="myname">
                        <Link 
                                activeClass="active"
                                to="about"
                                spy={true}
                                smooth={true}
                            ><a id="dev">Nathan Kulow</a>
                        </Link>
                        </span>. I am a full-stack developer from Tampa, Florida. </p>
                        {/* <p id="title"> My name is Nathan Kulow. I am a <span><a id="dev" href="https://github.com/nkulow" target="_blank">developer</a></span> from Tampa, Florida. </p> */}
                        
                        
                    </div>
              
                <Row>
                    <div id="about" >
                        
                    <h1 >About Me</h1>
                        
                    </div>
                </Row>
                <Row>
                    <div id="portfolio" >
                        
                    <h1 >Portfolio</h1>
                        
                    </div>
                </Row>
                <Row>
                    <div id="contact" >
                        
                    <h1 >Contact Me</h1>
                    {/* <li><FontAwesomeIcon icon={faFile}/><a href={pdf} download="resume.pdf" id="fileIcon"><i> Download my Resume </i></a></li> */}
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default Home;