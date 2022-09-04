import React from 'react'
import { Container, Card, Row, Text, Image, Spacer} from "@nextui-org/react";
import './Hero.css'
import logo from '../Images/green-for-rent-sign-11552765473ia91ha2it3-removebg-preview.png'

function Textview() {
  return (
    <div className="container"> 
     <Spacer y={3.5} />
      <Text
    h1
    size={100}
    css={{
      textGradient: "45deg, $green600 -20%, $blue100 50%",
    }}
    weight="bold"
  >
    Let's
  </Text>
  <Spacer y={3.5} />
  <Text
    h1
    size={100}
    css={{
      textGradient: "45deg, $green600 -20%, $blue100 50%",
    }}
    weight="bold"
  >
    Manage Your 
  </Text>
  <Spacer y={3.5} />
  <Text
    h1
    size={100}
    css={{
      textGradient: "45deg, $green600 -20%, $blue100 50%",
    }}
    weight="bold"
  >
    Property
  </Text>
  <div className="rent">
  <img src={logo} alt="Logo" />
  </div>
  </div>
  )
}

export default Textview