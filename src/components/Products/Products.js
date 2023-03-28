import { Container, Row, Col, Card } from "react-bootstrap";
import './Products.css';


function Products() {
    return (
        <Container className="section-product-list">
            <h1 className="text-center">Products</h1>
            <br/>
            <Row>
                <Col lg='3' md='3' sm='12'>
                    <div className="product-box">
                        <Card >
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + 'assets/images/slider-4.svg'} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
                <Col lg='3' md='3' sm='12'>
                    <div className="product-box">
                        <Card>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + 'assets/images/slider-4.svg'} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
                <Col lg='3' md='3' sm='12'>
                    <div className="product-box">
                        <Card>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + 'assets/images/slider-4.svg'} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
                <Col lg='3' md='3' sm='12'>
                    <div className="product-box">
                        <Card>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + 'assets/images/slider-4.svg'} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            </Row>
            <br/>
            <br/>
            <Row>
                <Col lg='3' md='3' sm='12'>
                    <div className="product-box">
                        <Card >
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + 'assets/images/slider-4.svg'} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
                <Col lg='3' md='3' sm='12'>
                    <div className="product-box">
                        <Card>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + 'assets/images/slider-4.svg'} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
                <Col lg='3' md='3' sm='12'>
                    <div className="product-box">
                        <Card>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + 'assets/images/slider-4.svg'} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
                <Col lg='3' md='3' sm='12'>
                    <div className="product-box">
                        <Card>
                            <Card.Img variant="top" src={process.env.PUBLIC_URL + 'assets/images/slider-4.svg'} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                            <Card.Body>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Products;