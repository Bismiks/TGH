import React from 'react'
import { Row , Col  } from 'react-bootstrap'

import Quote from './Quote'
function Home() {
  return (
    <Row>
    {
     
        <Col sm={12} md={8} lg={6} xl={3}>
            <Quote/> 
           
        </Col>
    
    }
    </Row>
  )
}

export default Home