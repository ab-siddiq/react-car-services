import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import expert1 from '../../../images/experts/expert-1.jpg';
import expert2 from '../../../images/experts/expert-2.jpg';
import expert3 from '../../../images/experts/expert-3.jpg';
import expert4 from '../../../images/experts/expert-4.jpg';
import expert5 from '../../../images/experts/expert-5.jpg';
import expert6 from '../../../images/experts/expert-6.png';
import Expert from './Expert/Expert';

const Experts = () => {
    const experts = [
        { id: 1, name: 'Abdul Ohab', img: expert1, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quod, veniam, porro accusamus adipisci et deserunt reprehenderit cum illum voluptates recusandae voluptatem tempora soluta ea architecto libero sit explicabo magnam?' },
        { id: 2, name: 'Ariful Haque', img: expert2, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quod, veniam, porro accusamus adipisci et deserunt reprehenderit cum illum voluptates recusandae voluptatem tempora soluta ea architecto libero sit explicabo magnam?' },
        { id: 3, name: 'Anowar Hossain', img: expert3, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quod, veniam, porro accusamus adipisci et deserunt reprehenderit cum illum voluptates recusandae voluptatem tempora soluta ea architecto libero sit explicabo magnam?' },
        { id: 4, name: 'Nahidul Islam', img: expert4, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quod, veniam, porro accusamus adipisci et deserunt reprehenderit cum illum voluptates recusandae voluptatem tempora soluta ea architecto libero sit explicabo magnam?' },
        { id: 5, name: 'Aliul Azim', img: expert5, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quod, veniam, porro accusamus adipisci et deserunt reprehenderit cum illum voluptates recusandae voluptatem tempora soluta ea architecto libero sit explicabo magnam?' },
        { id: 6, name: 'Tasnuva Afrin', img: expert6, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quod, veniam, porro accusamus adipisci et deserunt reprehenderit cum illum voluptates recusandae voluptatem tempora soluta ea architecto libero sit explicabo magnam?' },
    ]
    return (
        <Container id="experts">
            <h2 className='text-center'>Our Experts</h2>
            <Row>
                {experts.map(expert => <Col className='my-3' lg={4} md={6} sm={12}><Expert key={expert.id} expert={expert}></Expert></Col>)}
            </Row>

        </Container>
    );
};

export default Experts;