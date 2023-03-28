import { Container, Row, Col, InputGroup, Form, Button } from "react-bootstrap";
import './Footer.css';

function Footer() {

    return (
        <Container className="footer-section" fluid>
            <Container>
                <Row>
                    <Col lg='6' md='6' sm='12'>
                        <h1>Newsletter</h1>

                        <InputGroup>
                            <Form.Control
                                placeholder="Email address"
                                aria-label="Recipient's username with two button addons"
                            />
                            <Button variant="outline-primary">Subscribe</Button>
                        </InputGroup>
                    </Col>
                    <Col lg='3' md='3' sm='12'>
                        <h4>Schedule</h4>
                        <p>Monday - Sunday</p>
                        <p>9am - 11pm</p>
                        <h4>Address</h4>
                        <p>13604 N Kendall Dr, 	Kendall, Florida, 33186, United States</p>
                    </Col>
                    <Col lg='3' md='3' sm='12'>
                        <h4>Follow us</h4>
                        <p>Facebook</p>
                        <p>Instagram</p>
                        <p>Youtube</p>
                        <h1>Contact</h1>
                        <p>T:	(305) 387-3716</p>
                        <p>E: john@gmail.com</p>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Footer;