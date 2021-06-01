import React from 'react'
import { Col, Row } from 'react-bootstrap'
import products from'../products.js'
import Product from '../components/Product.js'

// after data went to product screen then data will come {Product}rpoductscreen product={product} 

const HomeScreen = () => {
    return (
        <>
        <h1>Latest Products</h1>
        <Row>
            {products.map(product => (
                <Col sm={12} md={6} lg={4} xl={3}>
                    <h3>
                        <Product product={product} />
                    </h3>
                </Col>
            ))}
        </Row>
        </>
    )
}

export default HomeScreen
