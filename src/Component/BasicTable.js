import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditData from './EditData';
import './basicTable.css';
import pending from '../Public/pending.svg';
import Accepted from '../Public/Accepted.svg';
import rejected from '../Public/rejected.svg';
// import Reason from './Reason';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
function createData( date ,requestedon,type,reason,amount,attachment,status) {
  return { date ,requestedon,type,reason,amount,attachment,status  };
}

const rows = [
  createData('13th Mar,2020','23rd Mar,2020','Accomodation','Company Work',500,'1,2,3','Pending'),
  createData('13th Mar,2020','23rd Mar,2020','Accomodation','Company Work',500,'1,2,3','Accepted'),
  createData('13th Mar,2020','23rd Mar,2020','Accomodation','Company Work',500,'1,2,3','Accepted'),
  createData('13th Mar,2020','23rd Mar,2020','Accomodation','Company Work',500,'1,2,3','Accepted'),
  createData('13th Mar,2020','23rd Mar,2020','Accomodation','Company Work',500,'1,2,3','Accepted'),
  createData('13th Mar,2020','23rd Mar,2020','Accomodation','Company Work',500,'1,2,3','Accepted'),
  createData('13th Mar,2020','23rd Mar,2020','Accomodation','Company Work',500,'1,2,3','Accepted'),
  createData('13th Mar,2020','23rd Mar,2020','Accomodation','Company Work',500,'1,2,3','Rejected'),
  
];

export default function BasicTable() {


  const [popupStatus,setPopUpStatus] = React.useState('inactive')

  const imageStatus=(status)=>{
    if(status==='Pending'){
      return(<p><img src={pending}/> {status}</p>)
    }else if(status==='Accepted'){
      return(<p><img src={Accepted}/> {status}</p>)
    }else{
      return(<><a href='./Component/Reason'>Reason</a><p><img src={rejected}/> {status}</p></>)
    }
  }

  const editData = () =>{
    if(popupStatus==='inactive'){
      setPopUpStatus('active')
    }
    else{
      setPopUpStatus('inactive')
    }
    
  }
  const classes = useStyles();
  
  console.log(rows);
  return (
    <>
    <TableContainer className='table-container' component={Paper} style={{justifyContent:"center"}}>
      <h5>Reimbrusement Data</h5>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell >Requested on</TableCell>
            <TableCell >Type&nbsp;</TableCell>
            <TableCell >Reason&nbsp;</TableCell>
            <TableCell >Amount&nbsp;</TableCell>
            <TableCell >Attachment&nbsp;</TableCell>
            <TableCell >Status&nbsp;</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.date}>
              <TableCell scope="row">
                {row.date}
              </TableCell>
              <TableCell >{row.requestedon}</TableCell>
              <TableCell >{row.type}</TableCell>
              <TableCell >{row.reason}</TableCell>
              <TableCell >{row.amount}</TableCell>
              <TableCell >{row.attachment}</TableCell>
              <TableCell className={row.status.toLowerCase()} >{imageStatus(row.status)}</TableCell>
              <EditOutlinedIcon style={{marginTop:'13'}} onClick={editData}/>
              <DeleteOutlineIcon style={{marginTop:'13'}}/>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <div className={popupStatus} >
      <EditData style={{backgroundColor:'#fff'}} editData={editData}/>
    </div>
    </>
  );
}
