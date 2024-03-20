import React from 'react'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

function Collaps() {
    const [open, setOpen] = useState(false);
  return (
    <>
    
     <button onClick={() => setOpen(!open)} className='btn rounded ' style={{backgroundColor:"#b1ddf1" , color:"black"}}>Click Here to See the Reviews</button>

     <Collapse in={open}>
          <div className='my-2 '>
            <hr />
            <div className='mt-5'>
                <h4>Name and date</h4>
                <p>Rating</p>
                <p>Description</p>
            </div>     
      </div>
      </Collapse>
      
    </>
  )
}

export default Collaps