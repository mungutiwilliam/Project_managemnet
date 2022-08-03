import React, { useState } from "react";
import './Admin.css'
import AdminSide from './AdminSide'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Addagent() {
    const [first_name, setfname] = useState("");
    const [last_name, setlname] = useState("");
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
  return (
    <div className="admin">
<AdminSide/>
<div className="form">
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
        <TextField
          id="filled-search"
          label="Search field"
          type="search"
          variant="filled"
        />
        <TextField
          id="filled-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="filled"
        />
      </div>
      <div>
        <TextField
          required
          id="standard-required"
          label="Required"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          disabled
          id="standard-disabled"
          label="Disabled"
          defaultValue="Hello World"
          variant="standard"
        />
        <TextField
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
        />
        <TextField
          id="standard-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
          variant="standard"
        />
        <TextField
          id="standard-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="standard"
        />
        <TextField
          id="standard-search"
          label="Search field"
          type="search"
          variant="standard"
        />
        <TextField
          id="standard-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
          variant="standard"
        />
      </div>
    </Box>
</div>
    </div>
  )
}

export default Addagent