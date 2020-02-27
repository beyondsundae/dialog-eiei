import React, {useState, useEffect} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
// import DialogContentText from '@material-ui/core/DialogContentText';
import Address from './Address';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DoneIcon from '@material-ui/icons/Done';
import FaceIcon from '@material-ui/icons/Face';
import MenuItem from '@material-ui/core/MenuItem';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import ArchiveIcon from '@material-ui/icons/Archive';
import Typography from '@material-ui/core/Typography';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const ShitDashboard =()=>{

    const [AddData, setAddData] = useState([])
    const [AddDoc, setAddDoc] = useState([])

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
    
    function PushDoc (e){
        var data = AddDoc
        AddDoc.push({
            SName:SName,
            SPhone:SPhone,
            addressza:addressza,
            RName:RName,
            RPhone:RPhone,
            addressza2:addressza2,
            PName:PName,
            Dparcel:Dparcel
        })
        setAddDoc(data)

        setSName(e.target.value)
        setSPhone(e.target.value)
        setAddressza(e.target.value); 
        setRName(e.target.value)
        setRPhone(e.target.value)
        setAddressza2(e.target.value);
        setPName(e.target.value)
        setDparcel(e.target.value)

        setTimeout(() => {
            addData();
            setOpen(false);
            }, 500);  
    }

    function GetIndex (index){
        console.log(index)

    }

    function addData(){
        setAddData([...AddData, {item:false, status: 'SENT'}])
    }
      
    const updateAccept = (index)  => {
        let newArr = [...AddData]; // copying the old datas array
        newArr[index] = { index, item:false, status: 'ACCEPTED'} // replace e.target.value with whatever you want to change it to
        console.log(newArr)
        setAddData(newArr); // ??
    }

    const updateDecline = (index)  => {
        let newArr = [...AddData]; // copying the old datas array
        newArr[index] = { index, item:false, status: 'REJECTED'} // replace e.target.value with whatever you want to change it to
        console.log(newArr)
        setAddData(newArr); // ??       
        
    }

    // const Nothin = (index) =>{
    //     let newArr = [...AddData]; // copying the old datas array
    //     newArr[index] = { index, item:false, status: 'SENT'} // replace e.target.value with whatever you want to change it to
    //     console.log(newArr)
    //     setAddData(newArr);
    // }
    
    const AddButton =AddData.map((item,index)=>(
        
        <div className='my-3'>
          <button key={index} className="btn btn-warning btn-lg btn-block mr-3" onClick={ ()=>GetIndex(index) } >
            { item.status } {/*{index}*/} 
          </button><br/>
        

          <button key={index} className='btn btn-success btn-sm' onClick={ ()=>updateAccept(index) }>
            Accept Parcel {/*{index}*/}
          </button>
          <button key={index} className='btn btn-danger btn-sm' onClick={ ()=>updateDecline(index) } >
            Decline Parcel {/*{index}*/}
          </button><hr/>
        </div> 
      ))

    const DropdownAddress = Address.map((option) => 
        <MenuItem 
            key={ option.value } 
            value={ option.value } 
            onChange={ ()=> {setAddressza(option.label)}} fullwidth >
                { option.label }
        </MenuItem>)

    // const ClosenCreate =(e)=>{  
    //     setSName(e.target.value)
    //     setSPhone(e.target.value)
    //     setAddressza(e.target.value); 
    //     setRName(e.target.value)
    //     setRPhone(e.target.value)
    //     setAddressza2(e.target.value);
    //     setPName(e.target.value)
    //     setDparcel(e.target.value)
       


    //     console.log("SenderName", SName)
    //     console.log("SenderPhone", SPhone)
    //     console.log("SenderAddress", addressza)
    //     console.log("ReceiverName", RName)
    //     console.log("ReceiverPhone", RPhone)
    //     console.log("Address2", addressza2)
    //     console.log("ReceiverPhone", PName)
    //     console.log("DescriptionParcel", Dparcel)
        

    //     setTimeout(() => {
    //     addData();
    //     setOpen(false);
    //     }, 500);
    // }

    


    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
useEffect(() => {
    console.log(...AddData)
    console.log(...AddDoc)})
    console.log(AddDoc.indexOf(1))

    return(
        <div class='owwDashboard'>
            
            <div className='container border border-info'>
                <Typography variant="subtitle1" gutterBottom>
                    <h1 class='text-center' id='parcelH1'>Parcel registration</h1>
                    <Button 
                    variant="contained" 
                    size="large" 
                    color="primary" 
                    onClick={handleClickOpen}>
                        Send a parcel <br/>  { <ArchiveIcon/> }{ <ArrowForwardIcon/> }
                    </Button>
                </Typography>
                
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
                        value={ addressza }/><br/><br/><br/><br/><br/><br/><br/><br/><hr/>



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
                        value={ addressza2 }/><br/><br/><br/><br/><br/><br/><br/><br/><hr/>

                    

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
                    onClick={ PushDoc } 
                    variant="contained" 
                    size="large" 
                    color="primary" >
                    {<DoneIcon/>}
                        Submit
                    </Button>

                    </DialogActions>
                </Dialog>

            <Card variant="outlined " className='my-5' id='shitCard'>
            
                <div className='containter row pl-2'>
                    <div className='col col-4 m-3 mb-5 ' id='boxLeft'>
                        <div id='containerShit' class='border border-success'>
                                <div id='center-col' class='text-center'>
                                    <ul class='p-2'>
                                        {AddButton}
                                    </ul>
                                </div>
                        </div>
                    </div>
                        <div class="vl"></div>
                    <div className='col col-7 m-3' id='boxRight'>
                    <div id='containerShit' class='border border-success'>
                                <div id='center-col' class='text-center'>
                                    <ul class='p-2'>
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

                                                        <TextField required autoFucus
                                                        id="nameSender" 
                                                        helperText="Name"
                                                        variant="outlined" 
                                                        value={ SName }
                                                        type="text"
                                                        onChange={ SNameChange }
                                                        InputProps={{readOnly: true, }}
                                                        fullWidth/><br/><br/>
                                                        <TextField required 
                                                        id="phoneSender" 
                                                        helperText="Phone Number"
                                                        variant="outlined" 
                                                        value={SPhone}
                                                        type="text"
                                                        onChange={ SPhonehange }
                                                        InputProps={{readOnly: true, }}
                                                        fullWidth/><br/><br/>

                                                        {/* <TextField required 
                                                        id="addressdropdown" 
                                                        helperText="Address"
                                                        className='col col-12 ' 
                                                        select 
                                                        value={ addressza } 
                                                        onChange={ handleChange } 
                                                        fullwidth>
                                                            { DropdownAddress }
                                                        </TextField><br/><br/> */}

                                                        <TextField 
                                                        id="addresstextarea" 
                                                        helperText="Address"
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
                                                        helperText="Name"
                                                        variant="outlined" 
                                                        value={RName}
                                                        type="text"
                                                        onChange={ RNameChange }
                                                        InputProps={{readOnly: true, }}
                                                        fullWidth/><br/><br/>
                                                        <TextField required 
                                                        id="phoneSender" 
                                                        helperText="Phone"
                                                        variant="outlined" 
                                                        value={RPhone}
                                                        type="text"
                                                        onChange={ RPhoneChange }
                                                        InputProps={{readOnly: true, }}
                                                        fullWidth/><br/><br/>

                                                        {/* <TextField required 
                                                        id="addressdropdown" 
                                                        helperText="Address"
                                                        className='col col-12 ' 
                                                        select label="Address" 
                                                        value={ addressza2 } 
                                                        onChange={ handleChange2}  
                                                        
                                                        fullwidth>
                                                            { DropdownAddress }
                                                        </TextField><br/><br/> */}

                                                        <TextField  
                                                        id="addresstextarea" 
                                                        helperText="Address"
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
                                                        helperText="Pracel"
                                                        variant="outlined" 
                                                        value={PName}
                                                        type="text"
                                                        onChange={ PNameChange }
                                                        fullWidth/><br/><br/>
                                                                    
                                                        <TextField required 
                                                        id="detailpraceltextarea" 
                                                        helperText="Pracel Description"
                                                        className='col col-11 float-right' 
                                                        variant="outlined"  
                                                        value={Dparcel}
                                                        type="text"
                                                        onChange={ DparcelChange }
                                                        multiline rows="4" />

                                            </DialogContent>
  
                                    </ul>
                                </div>
                        </div>
                    
                    </div>
                </div>
                        

                        

                            
                
                
                    
            </Card>
            </div>
        </div>
    )

}

export default ShitDashboard