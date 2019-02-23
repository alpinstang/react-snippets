import React, { Component } from 'react';
import { Col, Container, Row, Footer } from 'mdbreact'; // see https://mdbootstrap.com/docs/react/

class Footer extends Component {

    render(){
        return(
            <Footer className="font-small pt-4">
                <Container className="text-left">
                    <Row>
                        <Col sm="12" className="text-center">
                            <a className="mr-4 fa fa-2x fa-facebook" href="https://www.facebook.com" />
                            <a className="fa fa-2x fa-envelope" href="mailto:<YOUR EMAIL>" />
                            <br />
                            <hr className="your-style" />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="6">
                            <h5 className="title>Business</h5>
                            <p>Your disruptive technology / great idea description here.</p>
                        </Col>
                        <Col sm="6">
                            <h5 className="title">Links</h5>
                            <ul>
                                <li className="list-unstyled"><Link href="#">Our Company Blog</Link></li>
                                <li className="list-unstyled"><Link href="#">Terms of Service</Link></li>
                                <li className="list-unstyled"><Link href="#">Privacy Policy</Link></li>
                                <li className="list-unstyled"><Link href="#">End User License Agreement</Link></li>
                                <li className="list-unstyled"><Link href="#">Earnings Disclaimer</Link></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <div className="footer-copyright text-center">
                    <Container fluid className="mb-2 mt-2">
                        &copy; {(new Date().getFullYear())} Copyright: <a href="#"> Example.com </a>
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default Footer;
