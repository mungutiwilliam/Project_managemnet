import React from 'react';
import { Input, Spacer, Container,Card,Checkbox,Label} from "@nextui-org/react";
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
      <Checkbox.Group
      color="secondary"
      defaultValue={["1"]}
    >
      <Checkbox value="1">Single Bedroom</Checkbox>
      <Checkbox value="2">Two Bedrooms</Checkbox>
      <Checkbox value="3">Three Bedrooms</Checkbox>
      <Checkbox value="4">Four Bedrooms</Checkbox>
    </Checkbox.Group>
      <Spacer y={1.5} />
      <Input clearable bordered labelPlaceholder="Price" initialValue="NextUI" />
  
      <Spacer y={2.5} />
      </Card>
      </Container>
    </>
  );
}
