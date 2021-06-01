import React from "react";
import { Card } from "react-bootstrap";

///Product = ({product}) data will come from homescreen
const Product = ({ product }) => {
    return (
        <Card className="my-3 py-3 rounded">
            <a href={`/product/${product._id}`}>
                <Card.Img src={product.image} variant="top" />
            </a>
            <Card.Body>
                <a href={`/product/${product._id}`}>
                    <Card.Title>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </a>
            </Card.Body>

            <Card.Text as='div'>
                <div className="my-3">
                    {product.rating} from {product.numReviews} Reviews
                </div>
            </Card.Text>
        </Card>
    );
};

export default Product;
