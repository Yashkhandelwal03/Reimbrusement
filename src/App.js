import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRupeeSign} from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'reactstrap';
import BasicTable from './Component/BasicTable';
import Forms from './Component/Forms';

import "./App.css"



const App = () => {
  return (
     <Container style={{backgroundColor:"#ecf0f1",width:'100%'}} fluid>
         <Row>
           <Col md="6">
           <h3 className="title" >
             <FontAwesomeIcon  style={{marginRight:'20px'}} icon={faRupeeSign} color="blue"/>
             Reimbursement
           </h3>
           </Col>
           <Col md="6">
             <h6 style={{float:"right",margin: '38px 30px 0px 0px'}}>
               Employee Name
             </h6>
          </Col>
        </Row>
          <Row>
            <Col md="9" >
              <BasicTable style={{padding:"20"}}/>
            </Col>
            <Col md="3" style={{ backgroundColor: "#dfe6e9" }}>
              <Forms />
            </Col>
          </Row>
    </Container>
      
  )
}

export default App

//  <div style={{backgroundColor:"#ecf0f1"}}>
      
//   </div> 
//  {/* <Container  fluid>
//         <Row>
//           <Col md="6">
//           <h3 className="title" >
//             <FontAwesomeIcon  style={{marginRight:'20px'}} icon={faRupeeSign} color="blue"/>
//             Reimbursement
//           </h3>
//           </Col>
//           <Col md="6">
//             <h6 style={{float:"right",margin: '38px 30px 0px 0px'}}>
//               Employee Name
//             </h6>
//           </Col>
//         </Row>
//       </Container>
// {/* <div style={{ backgroundColor: "white" }}>
//         <Container fluid >
//           <Row>
//             <Col md="8">
//               <BasicTable />
//             </Col>
//             <Col md="4" style={{ backgroundColor: "#dfe6e9" }}>
//               <Forms />
//             </Col>
//           </Row>
//         </Container >
//       </div> */}
      
     


    
    // <div>
    //  <h1 className="title" ><FontAwesomeIcon  style={{marginRight:'20px'}} icon={faRupeeSign} color="blue"/>Reimbursement</h1>
    //  <Container fluid>
    //    <h3 >Reimbursements Data</h3>
    //    <BasicTable />
    //    <Forms />
    //    <EditData />


    //  </Container>
      
    // </div>