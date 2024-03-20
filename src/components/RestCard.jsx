import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function RestCard({restuarant}) {
  return (


    <Link to={`/restaurant_view/${restuarant.id}`} style={{textDecoration:'none'}}>
        <Card style={{ width: '100%' }}>
        <Card.Img height={'350px'}  variant="top" src={restuarant.photograph} />
        <Card.Body>
          <Card.Title className='text-center ' style={{color:"#b1ddf1"}}>{restuarant.name}</Card.Title>
          <hr />
         <Row className='p-4'>
              <Col className='ms-4'>
                  <Card.Text>
                     {restuarant.neighborhood}
                  </Card.Text>
              </Col>
              <Col className='ms-4'>
                  <Card.Text>
                    {restuarant.cuisine_type} 
                  </Card.Text>
              </Col>
         </Row>
        </Card.Body>
      </Card>
    </Link>
  )
}

export default RestCard