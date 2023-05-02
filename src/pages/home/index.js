import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import './index.css';
import Header from './../../components/Header';
import Slider from "../../components/Slider";
import Product from "../../components/Product/Product";
import Footer from "../../components/Footer/Footer";
import { Container, Row, Col, ListGroup, Image } from 'react-bootstrap';
import { getProducts } from '../../redux/products/actions';

const Home = (props) => {
    const [products,setProducts] = useState([]);
    useEffect(() => {
        if(props.products!==undefined && props.products.length>0){
            setProducts(props.products);
        }
    }, [props.products]);

    useEffect(() => {
        return ()=>{
            props.getProductsFunc();
        }
    }, [])
    return (
        <div className="home">
            <Header />
            <Container className='home-section-1'>
                <Row>
                    <Col lg='3' md='3' sm='12'>
                        <div className="categories">
                            <h5>MY MARKET</h5>
                            <ListGroup>
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg='7' md='7' sm='12'>
                        <Slider />
                    </Col>
                    <Col lg='2' md='2' sm='12'>
                        <div className="popular-categories">
                            <h6>Popular categories</h6>
                            <Row>
                                <Col>
                                    <p>Men Clothing</p>
                                </Col>
                                <Col>
                                    <Image src={process.env.PUBLIC_URL + 'assets/images/slider-4.svg'} fluid />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>Winter Clothing</p>
                                </Col>
                                <Col>
                                    <Image src={process.env.PUBLIC_URL + 'assets/images/slider-4.svg'} fluid />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>Home Clothing</p>
                                </Col>
                                <Col>
                                    <Image src={process.env.PUBLIC_URL + 'assets/images/slider-4.svg'} fluid />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>Men Clothing</p>
                                </Col>
                                <Col>
                                    <Image src={process.env.PUBLIC_URL + 'assets/images/slider-4.svg'} fluid />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <p>Men Clothing</p>
                                </Col>
                                <Col>
                                    <Image src={process.env.PUBLIC_URL + 'assets/images/slider-4.svg'} fluid />
                                </Col>
                            </Row>

                        </div>
                    </Col>
                </Row>
            </Container>
            <Product products={products}/>
            <Footer />
        </div>
    )
}
Home.propTypes = {
    getProductsFunc: PropTypes.func
}
const mapStateToProps = state => {
    return {
        products: state.productReducer.products
    };
};
const mapDispatchToProps = dispatch => {
    return {
        getProductsFunc: () => {
            dispatch(getProducts());
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);
