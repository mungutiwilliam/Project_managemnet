import React from 'react'
import './Hero.css'
import Spline from '@splinetool/react-spline';
import { Container, Card, Row, Text, Image} from "@nextui-org/react";

function HeroSection() {
  return (
  <Container fluid style={{marginTop:"10vh"}}>
      <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        weight="bold"
      >
        Let's
      </Text>
      <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, $purple600 -20%, $pink600 100%",
        }}
        weight="bold"
      >
        Manage Your 
      </Text>
      <Text
        h1
        size={60}
        css={{
          textGradient: "45deg, $yellow600 -20%, $red600 100%",
        }}
        weight="bold"
      >
        Property
      </Text>
      <Card style={{marginLeft:"90vh",marginTop:"-40vh",width:"70%"}}>
      <Image   
      showSkeleton
      width={400}
      height={300}
      src="https://imgur.com/gallery/FQW4gJP"
      alt="Default Image"
    />
    </Card>
      </Container>
  );
}

export default HeroSection;



