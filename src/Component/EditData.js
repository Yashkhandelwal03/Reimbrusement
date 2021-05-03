import React from 'react';
import { Form, FormGroup, Label, Input, FormText,Button } from 'reactstrap';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Forms.css'


const EditData = (props) => {

    const box = {
        background: 'transparent',
        border: 'none',
        borderBottom: '1px solid #000000',
        outline: 'none'
    }
  return (
    <Form style={{backgroundColor:'#fff',padding:'20px'}}>
      <FormGroup>
       <h5><CancelPresentationIcon style={{float:"right"}} onClick={()=>props.editData()} />Edit Reimbrusement Data</h5>
      </FormGroup>
      <FormGroup>
        <Label for="exampleDate">Date</Label>
        <Input
          type="date"
          name="date"
          id="exampleDate"
          placeholder="pick a date"
          style={{...box}}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleSelect">Type</Label>
        <Input type="select" name="select" id="exampleSelect" style={{...box}}>
          <option value="" disabled selected hidden>Wild Flower</option>
          <option>Accomodation</option>
          <option>Transport</option>
          <option>Fooding</option>
        </Input>
      </FormGroup>
      
      <FormGroup>
        <Label for="text">Details</Label>
        <Input
          type="text"
          name="text"
          id="text"
          placeholder="There are some details"
          style={{...box}}
        />
      </FormGroup>
      
      <FormGroup>
        <Label for="exampleNumber">Amount</Label>
        <Input
          type="number"
          name="number"
          id="exampleNumber"
          placeholder="5000"
          style={{...box}}
        />
      </FormGroup>
      
      <Button style={{backgroundColor:"#50DBB4",width:"30%",margin:"auto",display:"block",float:"right"}}>Save</Button>
    </Form>
  );
}

export default EditData;
