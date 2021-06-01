import React from 'react';
import { Card } from 'react-bootstrap';

///Product = ({product}) data will come from homescreen 
const Product = ({product}) => {
    return (
        <Card className='my-3 py-3 rounded'>
            <a href={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top'/>
                <h1>{product.name}</h1>


            </a>

        </Card>
    )
}

export default Product
