import React from 'react'
import { Row , Col } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Collaps from './Collaps';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


function RestView() {
  const [show, setShow] = useState(false);
  const {id} = useParams()
  console.log(id);

  const allResataurant = useSelector((state)=>state.restaurantSlice.allResataurant)
  console.log(allResataurant);
  const selectedRestaurant = allResataurant.find(item=>item.id == id)
  console.log(selectedRestaurant);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Row className='mt-5 mb-5'>
        <Col md={1}>
          
        </Col>
        <Col md={3}>
        <img width={'100%'} className='rounded' src={selectedRestaurant.photograph} alt="" />
        </Col>
        <Col md={7} className='p-4'>
          <hr />
          <h3 className='text-center'><span style={{color:"#b1ddf1"}}>RESTAURANT</span> DETAILS</h3>
          <hr />
          <ListGroup>
          <ListGroup.Item><h4 className='text-center p-3'>{selectedRestaurant.name}</h4></ListGroup.Item>
          <ListGroup.Item><p>Neighborhood : {selectedRestaurant.neighborhood}</p></ListGroup.Item>
          <ListGroup.Item><p>Cuisine_type : {selectedRestaurant.cuisine_type}</p> </ListGroup.Item>
           <ListGroup.Item><p>Address : {selectedRestaurant.address} </p></ListGroup.Item>
          <ListGroup.Item className='text-center p-3 mb-2'>
           
              <button onClick={handleShow} className='btn me-4' style={{backgroundColor:"#b1ddf1" , color:"black"}}>Operation Hours</button>
              
  
              <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
  
              <Modal.Header closeButton>
            <Modal.Title>Operating Hours</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <ListGroup>
        <ListGroup.Item>Monday :</ListGroup.Item>
        <ListGroup.Item>Tuesday :</ListGroup.Item>
        <ListGroup.Item>Wednesday :</ListGroup.Item>
        <ListGroup.Item>Thursday :</ListGroup.Item>
        <ListGroup.Item>Friday :</ListGroup.Item>
        <ListGroup.Item>Saturday :</ListGroup.Item>
        <ListGroup.Item>Sunday :</ListGroup.Item>
      </ListGroup>
          </Modal.Body>
  
        </Modal>
  
        <Collaps/>
        
          
            </ListGroup.Item>
          </ListGroup>
          <hr />
        </Col>
        <Col md={1}>
          
        </Col>
      </Row>
    </div>
  )
}

export default RestView