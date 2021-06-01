import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'


const date = new Date().getFullYear();
const Footers = () => {
    return <footer className="page-footer font-small unique-color-dark pt-4">
        <Container>
            <Row>
                <Col className='footer-copyright text-center py-3'>
                    Copyright &copy; Products {date}
                    <a href="/"> Ecommerce.com</a>
                </Col>
            </Row>
        </Container>
    </footer>  
    
};

export default Footers
