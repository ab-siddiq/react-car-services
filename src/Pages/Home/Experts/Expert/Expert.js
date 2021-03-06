import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Expert = ({ expert }) => {
    const {name, img, description}= expert;
    return (
        <div>
            <Card >
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Expert;