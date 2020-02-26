
import React, {useState} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import Address from './Address';


const ShitDialog =()=> {
  const [open, setOpen] = useState(false);
 
  const [addressza, setAddressza] = React.useState();
  const handleChange = event => {
    setAddressza(event.target.value);
  };

  const [addressza2, setAddressza2] = React.useState();
  const handleChange2 = event => {
    setAddressza2(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const DropdownAddress = Address.map((option) => 
    <MenuItem 
        key={ option.value } 
        value={ option.value } 
        onChange={ ()=> {setAddressza(option.label)}} fullwidth >
        
            { option.label }
    </MenuItem>)

  return (
    <div className='container col col m-1  '>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Send a parcel
      </Button>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" className='p-5' fullWidth id='shitDialog'>
        <DialogTitle id="form-dialog-title" className='text-center'><h1>Shipping information </h1></DialogTitle><hr/>
          <DialogContent>
  
            <DialogTitle id="form-dialog-title" className='text-center'><h4>Sender </h4></DialogTitle>

            <TextField required id="nameSender" label="Name" variant="outlined" fullWidth/><br/><br/>
            <TextField required id="phoneSender" label="Phone Number" variant="outlined" fullWidth/><br/><br/>

            <TextField id="addressdropdown" className='col col-12 ' select label="Address" value={ addressza } onChange={ handleChange } fullwidth>
                { DropdownAddress }
            </TextField><br/><br/>{console.log( addressza )}

            <TextField id="addresstextarea" className='col col-11 float-right' variant="outlined"  
            multiline rows="4" InputProps={{readOnly: true, }} value={addressza}/><br/><br/><br/><br/><br/><br/><br/><br/><hr/>
      




            <DialogTitle id="form-dialog-title" className='text-center'><h4>Reciever</h4></DialogTitle>

            <TextField required id="nameSender" label="Name" variant="outlined" fullWidth/><br/><br/>
            <TextField required id="phoneSender" label="Phone Number" variant="outlined" fullWidth/><br/><br/>

            <TextField id="addressdropdown" className='col col-12 ' select label="Address" value={ addressza2 } onChange={ handleChange2}  fullwidth>
                { DropdownAddress }
            </TextField><br/><br/>

            <TextField id="addresstextarea" className='col col-11 float-right' variant="outlined"  
            multiline rows="4" InputProps={{readOnly: true, }} value={addressza2}/><br/><br/><br/><br/><br/><br/><br/><br/><hr/>

           



            <DialogTitle id="form-dialog-title" className='text-center'><h4>Pracel information </h4></DialogTitle>

            <TextField required id="namePracel" label="Pracel" variant="outlined" fullWidth/><br/><br/>
                          
            <TextField id="detailpraceltextarea" className='col col-11 float-right' variant="outlined"  
            multiline rows="4" />

        </DialogContent>

        <DialogActions>

          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>

          <Button onClick={handleClose} color="primary">
            Submit
          </Button>

        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ShitDialog;