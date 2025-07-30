import React from 'react'
import './newsletter.css'
import { Container,Row,Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

const Newsletter = () => {
  return  <section className='newsletter'>
    <Container>
        <Row>
            <Col lg='6'>
               <div className="newsletter__content">
                <h2>Join now to get useful traveling information.</h2>

               

                 <p>Sign up today to receive valuable travel information, tips, and 
                  updates that will help you plan your next adventure with ease!</p>
               </div>
            </Col>

            <Col lg="6">
               <div className="newsletter__img">
                  <img src={maleTourist} alt='' />
               </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default Newsletter