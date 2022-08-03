import React, { useState } from "react";
import './Admin.css'
import AdminSide from './AdminSide'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

function Addagent() {
    const [first_name, setfname] = useState("");
    const [last_name, setlname] = useState("");
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const [phone_number, setPhoneNumber]= useState("");
  return (
    <div className="admin">
<AdminSide/>
<div className="form">
    <label>Fill Agent Details</label>
<Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          label="First Name"
          value={first_name}
          onchonChange={(e) => {
            setfname(e.target.value);
          }}
        />
          <TextField
          required
          id="outlined-required"
          label="last_name"
          value={last_name}
          onChange={(e) => {
            setlname(e.target.value);
          }}
        />

      </div>
      <div>
        <TextField
          required
          id="email"
          label="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);}}
        />
      
        <TextField
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);}}

        />
      </div>
      <div>
        <TextField
          required
          id="standard-required"
          label="Phone Number"
          defaultValue=""
          value={phone_number}
          onChange={(e) => {
            setPhoneNumber(e.target.value);}}

        />
      </div>
      <Button variant="contained" endIcon={<SendIcon />}>
  Add Agent
</Button>
    </Box>
</div>
    </div>
  )
}

export default Addagent