import React from 'react'
import './Hero.css'
import Spline from '@splinetool/react-spline';
import { Container, Card, Row, Text } from "@nextui-org/react";

function HeroSection() {
  return (
  
<Card color="primary" style={{width:"90vh",height:"70vh",marginTop:"10vh",marginLeft:"2%"}}>
    <Spline scene="https://prod.spline.design/JY8JJQK7OFEdi0Cq/scene.splinecode" />
</Card>
  );
}

export default HeroSection;



