import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import image from '../components/Images/pngtree-chef-restaurant-logo-png-image_6136204.png';
import { useDispatch } from 'react-redux';
import { search } from '../redux/restaurantSlice';


function Header() {
  const dispatch = useDispatch()
  return (
    <div>
       <Navbar variant='dark'>
        <Container>
          <Navbar.Brand href="#home">
            <img 
            src={image}
            alt=""
            width="50"
            height="50"
            className='d-inline-block aling-top' 
            />{' '}   
            </Navbar.Brand>   

              <input onChange={(e)=>dispatch(search(e.target.value))} type="text" className='form-control w-25' placeholder='search by Neighborhood' />      

         <h5 className='mt-3 ms-4'><span style={{color:"#b1ddf1"}}>Spice</span>Symphony</h5>       
        </Container>
      </Navbar>

    </div>
  )
}

export default Header