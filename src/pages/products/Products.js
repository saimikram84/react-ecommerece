import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Header from "../../components/Header";
import ProductsList from "../../components/ProductList";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { getProductsList } from "../../redux/products/actions";

const Products = (props)=> {
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        if(props.products!==undefined && props.products.length>0){
            setProducts(props.products);
        }
    },[props.products])
    useEffect(()=>{
        return ()=>{
            props.getProductsListFunc(0);
        }
    },[]);
    return (
        <div className="products-page">
            <Header/>
            <Container className="products-page-sec-one">
                <ProductsList products={products}/>
            </Container>
        </div>
    )
}

Products.propTypes = {
    getProductsListFunc : PropTypes.func
}
const mapStateToProps = state => {
    return {
       products : state.productReducer.products_list
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getProductsListFunc : (page) => {
            dispatch(getProductsList(page))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Products);