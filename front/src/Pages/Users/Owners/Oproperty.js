import React from 'react';
import { Input, Spacer, Card,Dropdown,Checkbox } from "@nextui-org/react";
import Oside from './Oside';
import './owner.css'
export default function Oproperty() {
  const [selected, setSelected] = React.useState(new Set(["Estate"]));
  const [bathroom, bathSelected] = React.useState(new Set(["Number Of Bathrooms"]));
  const bathValue = React.useMemo(
    () => Array.from(bathroom).join(", ").replaceAll("_", " "),
    [bathroom]
  );
  
 
  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );
  
  return (
    <div className="owners">
    <Oside/>
      <Card  fluid style={{width:"130vh",marginTop:"-32vh",marginLeft:"50vh", height:"100vh"}}>
        <label style={{align:"center",justifyContent:"center", marginLeft:"40%"}}>Enter Property Details</label>
      <Spacer y={1.5} />
      <Input clearable label="Property Name" placeholder="Name" initialValue="" style={{width:"50vh"}} />
      <Spacer y={1.0} />
      <Input clearable label="City" placeholder="City" initialValue="" style={{width:"50vh"}} />
      <Spacer y={1.0} />
      <Dropdown>
      <Dropdown.Button flat color="secondary" css={{ tt: "capitalize" }}>
        {selectedValue}
      </Dropdown.Button>
      <Dropdown.Menu
        aria-label="Single selection actions"
        color="secondary"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selected}
        onSelectionChange={setSelected}
      >
        <Dropdown.Item key="KahawaWendani">KahawaWendani</Dropdown.Item>
        <Dropdown.Item key="Nyali">Nyali</Dropdown.Item>
        <Dropdown.Item key="Kilimani">Kilimani</Dropdown.Item>
        <Dropdown.Item key="Riverside">Riverside</Dropdown.Item>
        <Dropdown.Item key="Westlands">Westlands</Dropdown.Item>
        <Dropdown.Item key="SpringValley">SpringValley</Dropdown.Item>
        <Dropdown.Item key="Kileleshwa">Kileleshwa</Dropdown.Item>
        <Dropdown.Item key="Kikuyu">Kikuyu</Dropdown.Item>
        <Dropdown.Item key="Hurlingham">Hurlingham</Dropdown.Item>
        <Dropdown.Item key="Muthaiga">Muthaiga</Dropdown.Item>
        <Dropdown.Item key="Shanzu">Shanzu</Dropdown.Item>
        <Dropdown.Item key="Lavington">Lavington</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Input 
          label="Number of Units" 
          type="number" 
        />
         
         <Spacer y={1.0} />
         <label style={{align:"center",justifyContent:"center", marginLeft:"40%"}}>Select Aparment types that are available</label>
         <Checkbox color="primary" labelColor="primary" defaultSelected={false}>
        1B
      </Checkbox>
      <Spacer />
      <Checkbox color="secondary" labelColor="secondary" defaultSelected={false}>
        2B
      </Checkbox>
      <Spacer />
      <Checkbox color="success" labelColor="success" defaultSelected={false}>
        3B
      </Checkbox>
      <Spacer />
      <Checkbox color="warning" labelColor="warning" defaultSelected={false}>
        4B
      </Checkbox>
      <Dropdown>
      <Dropdown.Button flat color="secondary" css={{ tt: "capitalize" }}>
        {bathValue}
      </Dropdown.Button>
      <Dropdown.Menu
        aria-label="Single selection actions"
        color="secondary"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={bathroom}
        onSelectionChange={bathSelected}
      >
        <Dropdown.Item key="1">1</Dropdown.Item>
        <Dropdown.Item key="2">2</Dropdown.Item>
        <Dropdown.Item key="3">3</Dropdown.Item>
        <Dropdown.Item key="4">4</Dropdown.Item>
        <Dropdown.Item key="5">5</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Input 
          label="Units Occupied" 
          type="number" 
        />
         
      </Card>
    </div>
  );
}
