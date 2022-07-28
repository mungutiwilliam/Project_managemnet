import React from 'react';
import { Input, Spacer, Container,Card,Radio} from "@nextui-org/react";
import Oside from './Oside';
export default function Oproperty() {
  return (
    <>
    <Oside/>
    <Container fluid>
      <Card align="center" style={{width:"80%",marginTop:"-40vh",marginLeft:"40vh"}}>
    <Spacer y={2.5} />
      <Input bordered labelPlaceholder="Property Name" initialValue="NextUI" />
      <Spacer y={1.5} />
      <Input clearable bordered labelPlaceholder="Location" initialValue="NextUI" />
      <Spacer y={1.5} />
      <Radio.Group row value="primary"  >
<Radio value="primary" color="primary" >
 <label>Software Engineering </label> 
</Radio>
<Radio value="secondary" color="secondary" textColor="#ffffff">
<label>Security </label> 
</Radio>
<Radio value="succcess" color="success" >
 <label>Distributed Systems </label> 
</Radio>
<Radio value="gradient" color="primary" textColor="#ffffff">
<label>Networking </label> 
</Radio>
</Radio.Group>

      <Spacer y={1.5} />
      <Input clearable bordered labelPlaceholder="Price" initialValue="NextUI" />
  
      <Spacer y={2.5} />
      </Card>
      </Container>
    </>
  );
}
