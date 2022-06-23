import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.css'
import './home.css'

import HeroSection from './HeroSection';
function Home() {
  return (
    <div className="home">
        <Container>
            <Row><Col sm={8}>
            <HeroSection/>
                </Col></Row>
    </Container>

    </div>
  )
}

export default Home