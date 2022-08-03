import React from 'react';
import { Input, Spacer, Container,Card,label} from "@nextui-org/react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Oside from './Oside';
import './owner.css'
export default function Oproperty() {

  
  return (
    <div className="owners">
    <Oside/>
      <Card style={{width:"120vh",marginTop:"-30vh",marginLeft:"50vh", height:"60vh"}}>
        <label style={{align:"center",justifyContent:"center"}}>Enter Property Details</label>
        <Input clearable bordered labelPlaceholder="Name" initialValue="NextUI" />
      <Spacer y={2.5} />
      <Input
        clearable
        underlined
        labelPlaceholder="Name"
        initialValue="NextUI"
      />
      <Spacer y={1.5} />
      <Input clearable label="Name" placeholder="Name" initialValue="NextUI" />
      </Card>
    </div>
  );
}
