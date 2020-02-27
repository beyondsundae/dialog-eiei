
import React, {useState} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArchiveIcon from '@material-ui/icons/Archive';
import FaceIcon from '@material-ui/icons/Face';
import Address from './Address';


const InformationRight =(props)=> {
  const [open, setOpen] = useState(true);
 
  const [addressza, setAddressza] = React.useState();
  const handleChange = event => {
    setAddressza(event.target.value);
  };

  const [addressza2, setAddressza2] = React.useState();
  const handleChange2 = event => {
    setAddressza2(event.target.value);
  };

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

  const handleClose = () => {
    setOpen(false);
  };

  const ClosenCreate =()=>{  
    setTimeout(() => {
      props.btn();
      setOpen(false);
      }, 0);
  }



  const DropdownAddress = Address.map((option) => 
    <MenuItem 
        key={ option.value } 
        value={ option.value } 
        onChange={ ()=> {setAddressza(option.label)}} fullwidth >
            { option.label }
    </MenuItem>)


  return (
    <div className='container col col m-1  '>
        
        <DialogTitle id="form-dialog-title" className='text-center'><h1>Shipping information </h1></DialogTitle><hr/>
          <DialogContent>
  
        <DialogTitle id="form-dialog-title" className='text-center'><h4>Sender { <FaceIcon/> }{ <ArrowForwardIcon/> }</h4></DialogTitle>

            <TextField required id="nameSender" label="Name" variant="outlined" fullWidth InputProps={{readOnly: true, }}/><br/><br/>
            <TextField required id="phoneSender" label="Phone Number" variant="outlined" fullWidth InputProps={{readOnly: true, }}/><br/><br/>

            <TextField required id="addressdropdown" className='col col-12 ' select label="Address" value={ addressza } onChange={ handleChange } fullwidth>
                { DropdownAddress }
            </TextField><br/><br/>

            <TextField id="addresstextarea" className='col col-11 float-right' variant="outlined"  
            multiline rows="4" InputProps={{readOnly: true, }} value={addressza}/><br/><br/><br/><br/><br/><br/><br/><br/><hr/>



        <DialogTitle id="form-dialog-title" className='text-center'><h4>Reciever { <ArrowForwardIcon/> }{ <FaceIcon/> }</h4></DialogTitle>

            <TextField required id="nameSender" label="Name" variant="outlined" fullWidth InputProps={{readOnly: true, }}/><br/><br/>
            <TextField required id="phoneSender" label="Phone Number" variant="outlined" fullWidth InputProps={{readOnly: true, }}/><br/><br/>

            <TextField required id="addressdropdown" className='col col-12 ' select label="Address" value={ addressza2 } onChange={ handleChange2} fullwidth>
                { DropdownAddress }
            </TextField><br/><br/>

            <TextField  id="addresstextarea" className='col col-11 float-right' variant="outlined"  
            multiline rows="4" InputProps={{readOnly: true, }} value={addressza2}/><br/><br/><br/><br/><br/><br/><br/><br/><hr/>

           



            <DialogTitle id="form-dialog-title" className='text-center'><h4>Pracel information { <ArchiveIcon/> } </h4></DialogTitle>

            <TextField required id="namePracel" label="Pracel" variant="outlined" fullWidth InputProps={{readOnly: true, }}/><br/><br/>
                          
            <TextField required id="detailpraceltextarea" label="Description" className='col col-11 float-right' variant="outlined"  
            multiline rows="4" InputProps={{readOnly: true, }} />

        </DialogContent>

        <DialogActions>
          <br/><br/><br/><br/>
          <Button onClick={handleClose} variant="contained" size="large" color="secondary">
          {<DeleteIcon />}
            Cancel
          </Button>

          <Button onClick={ClosenCreate} variant="contained" size="large" color="primary" >
          {<DoneIcon/>}
            Submit
          </Button>
        </DialogActions>

    </div>
  );
}

export default InformationRight;