import React ,{useState} from 'react'
import Tside from './Tside'
import './tenant.css'
import { Container, Card, Input, Spacer, Text,Button, Textarea} from "@nextui-org/react";
import './internform.css'
import { send } from 'emailjs-com';
import Slide from 'react-reveal/Slide';



function Issues() {
  const [toSend, setToSend] = useState({
    from_name: '',
    from_email: '',
    message: '',
  })

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
 {/* const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_6f565cz',
      'template_5gxpjpz',
      toSend,
      'CBufH4BZYz99qOEQh'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert("Thank you for your message, We will reach out to you soon.")
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };*/};
  return (
    <div className="tenants">
        <Tside/>
    <div className="issues">
    <Container  style={{ color:"white" }}>
    <Slide bottom>
    <Spacer y={2.5} />
<Card color="white" align="center" style={{backgroundColor:"white", color:"black",width:"100%",height:"100%",marginTop:"-51.5px"}} >

 <label>Topic</label>
 <Spacer y={0.0004} />
  <Input clearable bordered labelPlaceholder=""  style={{ color:"black"}} initialValue="Enter Name Here"  value={toSend.from_name} name="from_name" onChange={handleChange}/>
  <Spacer y={0.5} />
  <label>More Details on Issue</label>
 <Textarea
      placeholder=""
      style={{color:"black",height:"30vh" }} 
      value={toSend.message} 
      onChange={handleChange}
      name="issue"

    />

  <Spacer y={0.5} />
  
    <Button size="sm" style={{backgroundColor:"gray"}} ><Text style={{color:"white"}}>Submit</Text></Button>


</Card>
</Slide>
</Container>
</div>
    </div>
  )
}

export default Issues