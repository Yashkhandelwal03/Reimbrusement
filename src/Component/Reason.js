import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const Reason = (props) => {
  return (
    <div>
      <Card body>
        <CardTitle tag="h3">Rejection Reason</CardTitle>
        <CardText>The Reimbrusement was rejected due to invalid document provided by you.
            Please apply again with valid documents.</CardText>
        <Button style={{textColor:"yellow",backgroundColor:"white",margin:"auto",display:"block"}}>close message</Button>
      </Card>
    </div>
  );
};

export default Reason;

