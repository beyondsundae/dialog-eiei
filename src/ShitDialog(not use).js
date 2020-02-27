
import React, {useState, useEffect} from 'react';
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
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArchiveIcon from '@material-ui/icons/Archive';
import FaceIcon from '@material-ui/icons/Face';
import Address from './Address';


const ShitDialog =(props)=> {
  const [open, setOpen] = useState(false);

  const [SName, setSName] = useState([]); 
  function SNameChange (e){
    setSName(e.target.value)
  }
  const [SPhone, setSPhone] = useState();
  function SPhonehange (e){
    setSPhone(e.target.value)
  }
  const [addressza, setAddressza] = useState();
  const handleChange = e => {
    setAddressza(e.target.value);
  };

  const [RName, setRName] = useState();
  function RNameChange (e){
    setRName(e.target.value)
  }
  const [RPhone, setRPhone] = useState();
  function RPhoneChange (e){
    setRPhone(e.target.value)
  }
  const [addressza2, setAddressza2] = useState();
  const handleChange2 = e => {
    setAddressza2(e.target.value);
  }

  const [PName, setPName] = useState();
  function PNameChange (e){
    setPName(e.target.value)
  }
  const [Dparcel, setDparcel] = useState();
  function DparcelChange (e){
    setDparcel(e.target.value)
  }


  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const ClosenCreate =(e)=>{  
    setSName(e.target.value)
    setSPhone(e.target.value)
    setAddressza(e.target.value); 
    setRName(e.target.value)
    setRPhone(e.target.value)
    setAddressza2(e.target.value);
    setPName(e.target.value)
    setDparcel(e.target.value)
    


    console.log("SenderName", SName)
    console.log("SenderPhone", SPhone)
    console.log("SenderAddress", addressza)
    console.log("ReceiverName", RName)
    console.log("ReceiverPhone", RPhone)
    console.log("Address2", addressza2)
    console.log("ReceiverPhone", PName)
    console.log("DescriptionParcel", Dparcel)

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
      
      <Button 
      variant="contained" 
      size="large" 
      color="primary" 
      onClick={handleClickOpen}>
        Send a parcel <br/>  { <ArchiveIcon/> }{ <ArrowForwardIcon/> }
      </Button>


      <Dialog 
      open={open} 
      onClose={handleClose} 
      aria-labelledby="form-dialog-title" 
      className='p-5' 
      fullWidth 
      id='shitDialog'>
        <DialogTitle 
        id="form-dialog-title" 
        className='text-center'>
          <h1>Shipping information </h1>
        </DialogTitle><hr/>
          <DialogContent>
  
        <DialogTitle 
        id="form-dialog-title" 
        className='text-center'>
          <h4>Sender { <FaceIcon/> }{ <ArrowForwardIcon/> }</h4>
        </DialogTitle>

            <TextField required 
            id="nameSender" 
            label="Name" 
            variant="outlined" 
            value={ SName }
            type="text"
            onChange={ SNameChange }
            fullWidth/><br/><br/>
            <TextField required 
            id="phoneSender" 
            label="Phone Number" 
            variant="outlined" 
            value={SPhone}
            type="text"
            onChange={ SPhonehange }
            fullWidth/><br/><br/>

            <TextField required 
            id="addressdropdown" 
            className='col col-12 ' 
            select 
            label="Address" 
            value={ addressza } 
            onChange={ handleChange } 
            fullwidth>
                { DropdownAddress }
            </TextField><br/><br/>

            <TextField 
            id="addresstextarea" 
            className='col col-11 float-right' 
            variant="outlined"  
            multiline rows="4" 
            InputProps={{readOnly: true, }} 
            value={addressza}/><br/><br/><br/><br/><br/><br/><br/><br/><hr/>



            <DialogTitle 
            id="form-dialog-title" 
            className='text-center'>
              <h4>Reciever { <ArrowForwardIcon/> }{ <FaceIcon/> }</h4>
            </DialogTitle>

            <TextField required 
            id="nameSender" 
            label="Name" 
            variant="outlined" 
            value={RName}
            type="text"
            onChange={ RNameChange }
            fullWidth/><br/><br/>
            <TextField required 
            id="phoneSender" 
            label="Phone Number" 
            variant="outlined" 
            value={RPhone}
            type="text"
            onChange={ RPhoneChange }
            fullWidth/><br/><br/>

            <TextField required 
            id="addressdropdown" 
            className='col col-12 ' 
            select label="Address" 
            value={ addressza2 } 
            onChange={ handleChange2}  
            fullwidth>
                { DropdownAddress }
            </TextField><br/><br/>

            <TextField  
            id="addresstextarea" 
            className='col col-11 float-right' 
            variant="outlined"  
            multiline rows="4" 
            InputProps={{readOnly: true, }} 
            value={addressza2}/><br/><br/><br/><br/><br/><br/><br/><br/><hr/>

           



            <DialogTitle 
            id="form-dialog-title" 
            className='text-center'>
              <h4>Pracel information { <ArchiveIcon/> } </h4>
            </DialogTitle>

            <TextField required 
            id="namePracel" 
            label="Pracel" 
            variant="outlined" 
            value={PName}
            type="text"
            onChange={ PNameChange }
            fullWidth/><br/><br/>
                          
            <TextField required 
            id="detailpraceltextarea" 
            label="Description" 
            className='col col-11 float-right' 
            variant="outlined"  
            value={Dparcel}
            type="text"
            onChange={ DparcelChange }
            multiline rows="4" />

        </DialogContent>
        
        <DialogActions>
          <br/><br/><br/><br/>
          <Button 
          onClick={ handleClose }  
          variant="contained" 
          ize="large" 
          color="secondary">
          {<DeleteIcon />}
            Cancel
          </Button>

          <Button 
          onClick={ ClosenCreate } 
          variant="contained" 
          size="large" 
          color="primary" >
          {<DoneIcon/>}
            Submit
          </Button>

        </DialogActions>
      </Dialog>
      
    </div>
  );
}

export default ShitDialog;