
import React from 'react';
import { Form, FormGroup, Label, Input, FormText,Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import './Forms.css'


const Forms = (props) => {

    const box = {
        background: 'transparent',
        border: 'none',
        borderBottom: '1px solid #000000',
        outline: 'none'
    }
  return (
    <Form style={{padding:'20px'}}>
      <FormGroup>
       <h4 style={{margin:'15px 0 15px 0 '}}>Claim Reimbrusement</h4>
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Type of Reimbrusement</Label>
        <Input type="select" name="select" id="exampleSelect" style={{...box}}>
          <option value="" disabled selected hidden>Pick a type</option>
          <option>Accomodation</option>
          <option>Transport</option>
          <option>Fooding</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="exampleDate">Expense Date</Label>
        <Input
          type="date"
          name="date"
          id="exampleDate"
          placeholder="pick a date"
          style={{...box}}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Details</Label>
        <Input
          type="text"
          name="text"
          id="exampleEmail"
          placeholder="type in the details"
          style={{...box}}
        />
      </FormGroup>
      
      <FormGroup>
        <Label for="exampleNumber">Amount</Label>
        <Input
          type="number"
          name="number"
          id="exampleNumber"
          placeholder="eg:8977"
          style={{...box}}
        />
      </FormGroup>
      
      
      <FormGroup>
      <label for="files" ><p style = {{ color:"yellow"}} ><AddCircleOutlineOutlinedIcon /> Add new File</p></label>
      <Input id="files" type="file" style={{display:"none"}} />
      </FormGroup>
      <Button style={{backgroundColor:"#50DBB4",width:"90%",margin:"auto",display:"block"}}>Request Reimbrusement</Button>
    </Form>
  );
}

export default Forms;
