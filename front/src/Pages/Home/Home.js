import React from 'react'
import { Container, Card, Row, Text } from "@nextui-org/react";

import HeroSection from './HeroSection';
function Home() {
  return (
    <div>
        <Container fluid>
    <HeroSection/>
    </Container>

    </div>
  )
}

export default Home