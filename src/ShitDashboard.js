import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

// import DialogContentText from '@material-ui/core/DialogContentText';
// import Address from './Address';
import "bootstrap/dist/css/bootstrap.css";
import Card from '@material-ui/core/Card';
import Zoom from '@material-ui/core/Zoom';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DoneIcon from '@material-ui/icons/Done';
import FaceIcon from '@material-ui/icons/Face';
import Tooltip from '@material-ui/core/Tooltip';
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
    window.onload = function() {
        ohWow();
      }

    const [AddData, setAddData] = useState([])
    const [AddDoc, setAddDoc] = useState([])

    const [open, setOpen] = useState(false);
    const [Gett, setGett] = useState();

    const [DBStatus, setDBStatus] = useState();
    const [DBColor, setDBColor] = useState();
    const [DBBoth, setDBBoth] = useState();
    const [OHwow, setOHwow] = useState();
    const [ShowDataxx, setShowDataxx] = useState();
    const [ShowAddressxx, setShowAddressxx] = useState();
    
    

    const [SName, setSName] = useState([]); 
    function SNameChange (e){ setSName(e.target.value) }
    const [SPhone, setSPhone] = useState();
    function SPhonehange (e){ setSPhone(e.target.value) }
    const [addressza, setAddressza] = useState();
    function handleChange  (e){ setAddressza(e.target.value) }
      
    
    const [RName, setRName] = useState();
    function RNameChange (e){ setRName(e.target.value) }  
    const [RPhone, setRPhone] = useState();
    function RPhoneChange (e){ setRPhone(e.target.value) }
    const [addressza2, setAddressza2] = useState();
    const handleChange2 = e => { setAddressza2(e.target.value) }
     

    const [PName, setPName] = useState();
    function PNameChange (e){ setPName(e.target.value) }
    const [Dparcel, setDparcel] = useState();
    function DparcelChange (e){ setDparcel(e.target.value) }
    /*
    ! Modal side
    */
    const [GetIDParcel, setGetIDParcel] = useState();
    const [SNameR, setSNameR] =useState();
    const [SPhoneR, setSPhoneR] =useState();
    const [SAddressR, setSAddressR] =useState();

    const [RNameR, setRNameR] =useState();
    const [RPhoneR, setRPhoneR] =useState();
    const [RAddressR, setRAddressR] =useState();

    const [PNameR, setPNameR] =useState();
    const [DparcelR, setDparcelR] =useState();
    
     /*
    ! Right side
    */

    function PushDoc (e){
        // var data = AddDoc
        // AddDoc.push({
        //     SName:SName,
        //     SPhone:SPhone,
        //     addressza:addressza,
        //     RName:RName,
        //     RPhone:RPhone,
        //     addressza2:addressza2,
        //     PName:PName,
        //     Dparcel:Dparcel
        // })
        // setAddDoc(data)

        // setSName(e.target.value)
        // setSPhone(e.target.value)
        // setAddressza(e.target.value); 
        // setRName(e.target.value)
        // setRPhone(e.target.value)
        // setAddressza2(e.target.value);
        // setPName(e.target.value)
        // setDparcel(e.target.value)


        setTimeout(() => {
            // addData();
            setOpen(false);
            PostShit();
            }, 500);  
    /*
    ! When submit
    */
    }


    function PostShit (){

        var formData = {
            SName:SName,
            SPhone:SPhone,
            addressza:addressza,
            RName:RName,
            RPhone:RPhone,
            addressza2:addressza2,
            PName:PName,
            Dparcel:Dparcel}

        axios.post('http://localhost:4000/PostParcel', formData)
            .then(function (response) {
                console.log(response);
          })
            .catch(function (error) {
                console.log(error);
          });

          GetData();
          ohWow ();
    }

    function GetData (){
        axios.get('http://localhost:4000/wholedata')
            .then(function (response){
                const data = response.data;
                // console.log(response)
                // const shit = data[]
                // console.log(shit.color)

                // setGett(data)

        })
            .catch(function (error) {
                console.log(error);
        });
        /* 
        ! Get Data
        */
       axios.get('http://localhost:4000/status')
            .then(function (response){
                const dataStatus = response.data;
                setDBStatus(dataStatus)
                console.log(dataStatus)
        })
            .catch(function (error) {
                console.log(error);
        });
        axios.get('http://localhost:4000/color')
            .then(function (response){
                const dataColor = response.data;
                setDBColor(dataColor)
                console.log(dataColor)
        })
            .catch(function (error) {
                console.log(error);
        });
        axios.get('http://localhost:4000/both')
            .then(function (response){
                const dataBoth = response.data;
                setDBBoth(dataBoth)
                console.log(DBBoth)
        })
            .catch(function (error) {
                console.log(error);
        });
    }

    function ShowData (item){
        
        var info ={
                params: {
                    id:item.Id_parcel
                }} 
        setGetIDParcel(item.Id_parcel)
        
        axios.get('http://localhost:4000/specificdata',info)
            .then(function (response){
                const dataSpecific = response.data;
                console.table(dataSpecific)

                const MapdataSpecific = dataSpecific.map((item)=>
                setSNameR(item.Sender_Name),
                setSPhoneR(item.Sender_Phone),
                setSAddressR(item.Sender_Address),

                setRNameR(item.Receiver_Name),
                setRPhoneR(item.Receiver_Phone),
                setRAddressR(item.Receiver_Address),

                setPNameR(item.Parcel_Name),
                setDparcelR(item.Parcel_Description),
                )
                setShowDataxx(MapdataSpecific)
        })}
    
    function Accept2 (){
        var accept ={
            id:GetIDParcel
        }
        axios.put('http://localhost:4000/accept',accept)
            .then(function (response){
                ohWow();
               
            })}
    function Reject2 (){
        var reject ={
            id:GetIDParcel
        }
        axios.put('http://localhost:4000/reject',reject)
            .then(function (response){
                ohWow();
                
            })}
        
    // function Accept (item){
    //     var accept ={
    //         id:item.Id_parcel
    //     }
    //     axios.put('http://localhost:4000/accept',accept)
    //         .then(function (response){
    //             console.log(item.Id_parcel)
    //             ohWow ()
    //         })}
    // function Reject (item){
    //     var reject ={
    //         id:item.Id_parcel
    //     }
    //     axios.put('http://localhost:4000/reject',reject)
    //         .then(function (response){
    //             console.log(item.status)
    //             ohWow ()
    //         })}
    
    function ohWow (){
        axios.get('http://localhost:4000/wholedata')//or both
            .then(function (response){
                const dataThree = response.data;

                const MapdataThree = dataThree.map(( item )=>
                    <div className='my-3'>
                        
                        <Tooltip TransitionComponent={Zoom} title={item.Receiver_Address} placement="top">
                            <button 
                                key ={item.Id_parcel} 
                                className={item.color} 
                                onClick={ ()=>{ ShowData( item ) } }>
                                    {item.status}</button>
                        </Tooltip>
                        
{/*                         
                        <button 
                            key ={item.Id_parcel} 
                            className='btn btn-outline-success btn-sm' 
                            onClick={ ()=>{ Accept( item ) } }>
                                Accept Parcel 
                        </button>
                        <button 
                            key ={item.Id_parcel} 
                            className='btn btn-outline-danger btn-sm' 
                            onClick={ ()=>{ Reject( item ) } }>
                                Decline Parcel 
                        </button> */}
                        <hr/>
                        
                    </div>
                    )
                    setOHwow(MapdataThree)
                    
                
        })
            .catch(function (error) {
                console.log(error);
        });

        axios.get('http://localhost:4000/address')
        .then(function(response){
            const dataAddress = response.data;
            const DropdownAddress = dataAddress.map((item) => 
                <MenuItem 
                    key={ item.ID_ADDRESS } 
                    value={ item.Address_Full} 
                    onChange={ ()=> {setAddressza(item.Address_Name)}} 
                    fullwidth >
                        { item.Address_Name}
                </MenuItem>)
            setShowAddressxx(DropdownAddress)
        })}

    // function GetIndex ( index ){
    //     var getindex =AddDoc[index]
    //     // console.log(getindex)
    //     // console.log(getindex.SName + getindex.SPhone)

    //     setSNameR(getindex.SName)
    //     setSPhoneR(getindex.SPhone)
    //     setSAddressR(getindex.addressza)

    //     setRNameR(getindex.RName)
    //     setRPhoneR(getindex.RPhone)
    //     setRAddressR(getindex.addressza2)
        
    //     setPNameR(getindex.PName)
    //     setDparcelR(getindex.Dparcel)
    //     /* 
    //     ! Data showing rightside
    //     */
    // }


    // function BTNDefault (index){
    //     let newArr = [...AddData]; // copying the old datas array
    //     newArr[index] = {  status: 'SENT', color:"btn btn-warning btn-lg btn-block mr-3"} // replace e.target.value with whatever you want to change it to
    //     setAddData(newArr); // Showing default when hover
    //     /* 
    //     ! Showing default
    //     */
    // }

    // function BTNAddress (index){
    //     var btnbutton = AddDoc[index]
    //     let newArr = [...AddData]; // copying the old datas array
    //     newArr[index] = {  status: (btnbutton.addressza2), color:"btn btn-warning btn-lg btn-block mr-3"} // replace e.target.value with whatever you want to change it to
    //     setAddData(newArr); 
    //     /* 
    //     ! Showing destiantion when hover
    //     */
    // } 
    

    // function addData(){
    //     // setAddData([...AddData, {DBBoth}])
    //     setAddData([...AddData, {status: 'SENT' , color:"btn btn-warning btn-lg btn-block mr-3"}])
    // }
      
    // const updateAccept = (index)  => {
    //     let newArr = [...AddData]; // copying the old datas array
    //     newArr[index] = { status: 'ACCEPTED', color:"btn btn-success btn-lg btn-block mr-3"} // replace e.target.value with whatever you want to change it to
    //     console.log(newArr)
    //     setAddData(newArr); // ??
    //     /* 
    //     ! Change to ACCEPTED when click
    //     */
    // }

    // const updateDecline = (index)  => {
    //     let newArr = [...AddData]; 
    //     newArr[index] = { status: 'REJECTED', color:"btn btn-danger  btn-lg btn-block mr-3"} 
    //     console.log(newArr)
    //     setAddData(newArr); // ??       
    //     /* 
    //     ! Change to REJECTED when click
    //     */
    // }

    // const AddButton =AddData.map((item,index)=>
        
    //     <div className='my-3'>
    //       <button key={index} className={ item.color } onClick={ ()=>GetIndex (index) }  onMouseOver={()=>BTNAddress (index)} onMouseOut={()=>BTNDefault (index)}>
    //         { item.status } 
           
    //       </button><br/>
         

    //       {/* <TextField  
    //         key={index}
    //         id="addresstextarea" 
    //         helperText="Address"
    //         className='col col-11 float-right' 
    //         variant="outlined"  
    //         multiline rows="4" 
    //         InputProps={{readOnly: true, }} 
    //         value={ btnbutton.addressza2 }/> */}

    //       <button key={index} className='btn btn-outline-success btn-sm' onClick={ ()=>updateAccept(index) }>
    //         Accept Parcel {/*{index}*/}
    //       </button>
    //       <button key={index} className='btn btn-outline-danger btn-sm' onClick={ ()=>updateDecline(index) } >
    //         Decline Parcel {/*{index}*/}
    //       </button><hr/>
            
    //     </div> 
    //   );
    

    // const DropdownAddress = Address.map((option) => 
    //     <MenuItem 
    //         key={ option.address } 
    //         value={ option.address } 
            // onChange={ ()=> {setAddressza(option.label)}} 
    //         fullwidth >
    //             { option.label }
    //     </MenuItem>)





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
        // console.log(AddData)
        // console.log(...AddData)
        
        // console.log(DBBoth)
        // console.log(ShowDataxx)
        console.log(GetIDParcel)
        console.log("end")
        // ohWow();
        
        // console.log(...AddDoc)
        // GetData();
        // console.log(Gett)
        
        // console.log({addressza})
        // console.log({addressza2})
    })

    
 

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
                {/* <button onClick={()=>{ohWow()}}>ohWow</button> */}
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
                    <h4>Sender { <FaceIcon/> }{ <ArrowForwardIcon/> }{ <ArchiveIcon/> }</h4>
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
                            { ShowAddressxx }
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
                        <h4>Reciever { <ArchiveIcon/> }{ <ArrowForwardIcon/> }{ <FaceIcon/> }</h4>
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
                        onChange={ handleChange2 }  
                        fullwidth>
                            { ShowAddressxx }
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
                                        {/* {AddButton} */}
                                        {OHwow}
                                    </ul>
                                </div>
                        </div>
                    </div>
                        <div class="vl"></div>
                        <div className='col col-7 m-3' id='boxRight'>
                        <div id='containerShit' class='border border-success'>
                                <div id='center-col' class='text-center'>
                                    <ul class='p-2'>
                                        <div className='row'>
                                        <div class="col col-3"></div>
                                        <div class="col col-3"></div>
                                            <div className='row col my-5'>
                                                <div className=''>
                                                    <button 
                                                        key ={GetIDParcel} 
                                                        className='btn btn-outline-danger btn-lg' 
                                                        onClick={ ()=>{ Reject2() } }
                                                        >Reject Parcel 
                                                    </button><br/>
                                                </div>
                                            
                                                <div className='mx-1'>
                                                    <button 
                                                        key ={GetIDParcel} 
                                                        className='btn btn-outline-success btn-lg' 
                                                        onClick={ ()=>{ Accept2() } }
                                                        >Accept Parcel
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                            <DialogTitle 
                                            id="form-dialog-title" 
                                            className='text-center'>
                                            <h1>Shipping information </h1>
                                            </DialogTitle><hr/>

                                            <DialogContent>
                                                    <DialogTitle 
                                                    id="form-dialog-title" 
                                                    className='text-center'>
                                                    <h4>Sender { <FaceIcon/> }{ <ArrowForwardIcon/> }{ <ArchiveIcon/> }</h4>
                                                    </DialogTitle>
                                                        {/* <p>{GetIDParcel}</p> Show Id_parcel */}
                                                        <TextField required autoFucus
                                                        id="nameSender" 
                                                        helperText="Name"
                                                        variant="outlined" 
                                                        value={ SNameR }
                                                        type="text"
                                                        onChange={ SNameChange }
                                                        InputProps={{readOnly: true, }}
                                                        fullWidth/><br/><br/>
                                                        <TextField required 
                                                        id="phoneSender" 
                                                        helperText="Phone Number"
                                                        variant="outlined" 
                                                        value={ SPhoneR }
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
                                                        value={ SAddressR }/><br/><br/><br/><br/><br/><br/><br/><br/><hr/>



                                                        <DialogTitle 
                                                        id="form-dialog-title" 
                                                        className='text-center'>
                                                        <h4>Reciever { <ArchiveIcon/> }{ <ArrowForwardIcon/> }{ <FaceIcon/> }</h4>
                                                        </DialogTitle>

                                                        <TextField required 
                                                        id="nameSender" 
                                                        helperText="Name"
                                                        variant="outlined" 
                                                        value={ RNameR }
                                                        type="text"
                                                        onChange={ RNameChange }
                                                        InputProps={{readOnly: true, }}
                                                        fullWidth/><br/><br/>
                                                        <TextField required 
                                                        id="phoneSender" 
                                                        helperText="Phone"
                                                        variant="outlined" 
                                                        value={ RPhoneR }
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
                                                        value={ RAddressR }/><br/><br/><br/><br/><br/><br/><br/><br/><hr/>

                                                    

                                                        <DialogTitle 
                                                        id="form-dialog-title" 
                                                        className='text-center'>
                                                        <h4>Pracel information { <ArchiveIcon/> } </h4>
                                                        </DialogTitle>

                                                        <TextField required 
                                                        id="namePracel" 
                                                        helperText="Pracel"
                                                        variant="outlined" 
                                                        value={ PNameR }
                                                        type="text"
                                                        onChange={ PNameChange }
                                                        fullWidth/><br/><br/>
                                                                    
                                                        <TextField required 
                                                        id="detailpraceltextarea" 
                                                        helperText="Pracel Description"
                                                        className='col col-11 float-right' 
                                                        variant="outlined"  
                                                        value={ DparcelR }
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