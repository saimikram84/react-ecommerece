import { Container, Row, Col, Card } from "react-bootstrap";
import './Product.css';
import { Link } from "react-router-dom";


function Product(products) {
    return (
        <Container className="section-product-list">
            <h1 className="text-center">Products</h1>
            <br />
            <Row>
                {
                    (products.products !== undefined && products.products.length > 0) ?
                        products.products.map((item, key) => {
                            return (
                                <Col lg='3' md='3' sm='12' key={key} className="mb-3">
                                    <div className="product-box">
                                        <Card >
                                            <Link to={`products/${item.id}`}>
                                                <Card.Img variant="top" src={item.images[0]} height={'300'} />
                                            </Link>
                                            <Card.Body>
                                                <Card.Title>{item.title.substring(0, 20)}</Card.Title>
                                                <h6><b>{item.category.name}</b></h6>
                                                <Card.Text>
                                                    {item.description.substring(0, 100)}
                                                </Card.Text>
                                                <h5>Price : ${item.price}</h5>
                                            </Card.Body>
                                            <Card.Body>
                                                <Link to='/'>View</Link>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </Col>
                            )
                        })
                        : ''
                }
            </Row>
        </Container>
    )
}

export default Product;