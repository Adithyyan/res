import React, { useEffect } from 'react'
import { Col, Row, Spinner } from 'react-bootstrap'
import RestCard from '../components/RestCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchResataurant } from '../redux/restaurantSlice'

function Home() {
  const allResataurant = useSelector((state)=>state.restaurantSlice.allResataurant)
  console.log(allResataurant);
  const dispatch = useDispatch()
  useEffect(()=>{
      dispatch(fetchResataurant())
  },[])

  return (
    <Row>
     
     {/*<div>
      {
        loading &&
        <p> <Spinner animation='border' className='text-warning'/>Loading ....</p>
      }
     </div>*/}

{ allResataurant?.length>0?
    allResataurant?.map((restuarant)=>(<Col className='px-5 py-3' sm={6} md={4}>
    <RestCard restuarant={restuarant}/>
</Col>))
      : <p className='text-danger fw-bolder'> No Restuarant avalialble </p>
    
}
    </Row>
  )
}

export default Home