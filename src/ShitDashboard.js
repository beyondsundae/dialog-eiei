import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

// import DialogContentText from '@material-ui/core/DialogContentText';
// import Address from './Address';
import "bootstrap/dist/css/bootstrap.css";
import { FaBoxOpen, FaReceipt, FaInfoCircle} from "react-icons/fa";
import Card from '@material-ui/core/Card';
import Zoom from '@material-ui/core/Zoom';
import Alert from '@material-ui/lab/Alert';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DoneIcon from '@material-ui/icons/Done';
import FaceIcon from '@material-ui/icons/Face';
import Tooltip from '@material-ui/core/Tooltip';
import MenuItem from '@material-ui/core/MenuItem';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import AlertTitle from '@material-ui/lab/AlertTitle';
import Typography from '@material-ui/core/Typography';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import DialogContentText from '@material-ui/core/DialogContentText';
import { withStyles} from "@material-ui/core/styles";

const ShitDashboard =()=>{
    window.onload = function() {
        ohWow();
        TimeRanger();
    }
      
    const [open, setOpen] = useState(false);
    const [OpenconfirmAccept, setOpenconfirmAccept] = useState(false);
    const [OpenconfirmReject, setOpenconfirmReject] = useState(false);

    const [OHwow, setOHwow] = useState();
    const [ShowAddressxx, setShowAddressxx] = useState();
    const [DateTime, setDateTime] = useState();
    const [TinyAdderess, setTinyAdderess] = useState();


    const [SName, setSName] = useState([]); 
    function SNameChange (e){ 
        setSName(e.target.value) }
    const [SPhone, setSPhone] = useState();
    function SPhonehange (e){ 
        setSPhone(e.target.value) }
    const [Addressza, setAddressza] = useState();
      
    
    const [RName, setRName] = useState();
    function RNameChange (e){ 
        setRName(e.target.value) }  
    const [RPhone, setRPhone] = useState();
    function RPhoneChange (e){ 
        setRPhone(e.target.value) }
    const [Addressza2, setAddressza2] = useState();
        
    
    const [PName, setPName] = useState();
    function PNameChange (e){ 
        setPName(e.target.value) }
    const [Dparcel, setDparcel] = useState();
    function DparcelChange (e){ 
        setDparcel(e.target.value) }
    
    const [RRName, setRRName] = useState();
    function RRNameChange (e){ 
        setRRName(e.target.value) }
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

    const [RRNameR, setRRNameR] = useState();
    
     /*
    ! Right side
    */

    const ShitTooltip = withStyles({
        tooltip: {
          fontSize: "1em",
          maxWidth: 700
        }
      })(Tooltip);

    function PushParcel (){

        setTimeout(() => {
            setOpen(false);
            PostShit();
            }, 500);  
    /*
    ! When submit
    */
    }
    

    function PostShit (e){

        var formData = {
            SName:SName,
            SPhone:SPhone,
            Addressza:Addressza,
            RName:RName,
            RPhone:RPhone,
            Addressza2:Addressza2,
            PName:PName,
            Dparcel:Dparcel,
            DateTime:DateTime
        }

        axios.post('http://10.0.99.206:4000/PostParcel', formData)
            .then(function (response) {
                console.log(response);
          })
            .catch(function (error) {
                console.log(error);
          });

          TimeRanger();
          // eslint-disable-next-line
          if (SName==null||SName=="", SPhone==null||SPhone=="", Addressza==null||Addressza=="", RName==null||RName=="",
          // eslint-disable-next-line
          RPhone==null||RPhone=="", Addressza2==null||Addressza2=="", PName==null||PName=="", Dparcel==null||Dparcel=="") {
            return(alert('กรุณากรอกข้อมูลให้ครบ')
            );}
            // eslint-disable-next-line
            if (SName!==null&&SName!=="", SPhone!==null&&!SPhone=="", Addressza!==null&&Addressza!=="", RName!==null&&RName!=="",
            // eslint-disable-next-line
            RPhone!==null&&RPhone!=="", Addressza2!==null&&Addressza2!=="", PName!==null&&PName!=="", Dparcel!==null&&Dparcel!=="") {
                return(alert('กรอกข้อมูลสำเร็จ'),
                window.location.reload(false)
                );}
        }
        /*
            !When post data
        */


    function ShowData (item){
        
        var info ={
                params: {
                    id:item.Id_parcel
                }} 
        setGetIDParcel(item.Id_parcel)
        
        axios.get('http://10.0.99.206:4000/specificdata',info)
            .then(function (response){
                const dataSpecific = response.data;
                console.table(dataSpecific)

                dataSpecific.map((item)=>
                    setSNameR(item.Sender_Name),
                    setSPhoneR(item.Sender_Phone),
                    setSAddressR(item.Sender_Address),

                    setRNameR(item.Receiver_Name),
                    setRPhoneR(item.Receiver_Phone),
                    setRAddressR(item.Receiver_Address),

                    setPNameR(item.Parcel_Name),
                    setDparcelR(item.Parcel_Description),
                    setRRNameR(item.Real_Receiver_Name)
        )})}
        /*
            !Get Right-side data
        */
    
    function Accept (){
        var accept ={
            id:GetIDParcel,
            RRName:RRName}
        axios.put('http://10.0.99.206:4000/accept',accept)
            .then(function (response){
                ohWow();  
        })}
        /*
            !When Accept
        */
    function Reject (){
        var reject ={
            id:GetIDParcel}
        axios.put('http://10.0.99.206:4000/reject',reject)
            .then(function (response){
                ohWow();
        })}
        /*
            !When Reject
        */
    

    function ShowHover (item){
        const DAddress = item.Receiver_Address
        const ParcelShit = item.Parcel_Name
        const TimeRanger = item.Date_Time
        return (
            <p>
             <p>สาขาปลายทาง:____{DAddress}</p>
             <p>พัสดุ:_____{ParcelShit}</p>
             <p>วันเวลาที่ส่ง:____{TimeRanger}</p>
            </p>
        )}
        /*
            !When Hover
        */

    function ShortAddress(item){
        const addressShort = item.Receiver_Address
        const Shortaddress = addressShort.split('-')[0]
        // console.log(SmallAddress)
        setTinyAdderess(Shortaddress)

        return(
            <strong>{Shortaddress}</strong>
        )}
        /*
            !Short Address
        */

    function TimeRanger(){
        var today = new Date(); 
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() 
        var dateTime = date+' '+time;
        setDateTime(dateTime)
        // console.log(dateTime)
        }
        /*
            !Time Ranger function
        */

    function ohWow (){
        axios.get('http://10.0.99.206:4000/wholedata')//or both
            .then(function (response){
                const dataThree = response.data;
                const MapdataThree = dataThree.map(( item )=>

                    <div className='my-3'>
                        
                        <ShitTooltip TransitionComponent={Zoom} title={ShowHover (item)} placement="top" id='ShitTooltip'>
                            <button 
                                key ={item.Id_parcel} 
                                className={item.color} 
                                onClick={ ()=>{ ShowData( item ) } }>
                                    <div className='text-left'>
                                    <strong>{ShortAddress(item)}</strong><br/>
                                    <strong>{'สถานะพัสดุ:___ ' }{ item.status }{'___'}</strong><br/>
                                    <strong>{'พัสดุ:___ '}{ item.Parcel_Name }{'___'}</strong><br/>
                                    <strong>{'วันเวลาที่สุง:___ '}{item.Date_Time}{'___'}</strong><br/>
                                    </div>
                            </button>
                        </ShitTooltip>
                        <hr/>
                        
                    </div>
                    )
                    setOHwow(MapdataThree)       
        })
            .catch(function (error) {
                console.log(error);
        });
        /*
        !Get Left-side data
        */

       Menu();
    }
        /*
            !Dropdowm shit
        */

    const Menu =()=>{
        axios.get('http://10.0.99.206:4000/address')
        .then(function(response){
            const dataAddress = response.data;
            const DropdownAddress = dataAddress.map((item) =>
                <MenuItem 
                    key={ item.ID_ADDRESS } 
                    value={ item.Address_Full} 
                    onChange={ ()=> { setAddressza(item.Address_Name) }} 
                    fullwidth >
                        { item.Address_Name}
                </MenuItem>)
                // <p>{item.Address_Name}</p>)
                
                setShowAddressxx(DropdownAddress)}
               )
    }
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        window.location.reload(false);
    };
    /*
        !Open-Close Dialog
    */

    const handleClickOpenConfirmAccept = () => {
        // eslint-disable-next-line
        if (RNameR==null||RNameR==""||RRNameR==undefined){
            alert("กรุณาเลือกพัสดุ");
        }
        else if (RNameR!==null||RNameR!==""||RRNameR!==undefined){
            // eslint-disable-next-line
            if(RRNameR=="Unknow"){
                setOpenconfirmAccept(true);
           }
           // eslint-disable-next-line
           else if(RRNameR!=="Unknow"){
               alert("คุณได้กดรับ/ปฏิเสธพัสดุไปเเล้ว")
           }
        }
    };
    const handleClickCloseConfirmAccept = () => {
        setOpenconfirmAccept(false);
    };
    const handleClickCloseConfirmAcceptWihtAccept= () => {
        Accept();
        setOpenconfirmAccept(false);
        window.location.reload(false);
        alert("ผู้รับคือ : "+ RRName)
    };
    /*
        !Open-Close-Submit Accept Dialog
    */

    const handleClickOpenConfirmReject = () => {
        // eslint-disable-next-line
        if (RNameR==null||RNameR==""||RRNameR==undefined){
            alert("กรุณาเลือกพัสดุ");
        }
        else if (RNameR!==null||RNameR!==""||RRNameR!==undefined){
            // eslint-disable-next-line
            if(RRNameR=="Unknow"){
                 setOpenconfirmReject(true);
            }
            // eslint-disable-next-line
            else if(RRNameR!=="Unknow"){
                alert("คุณได้กดรับ/ปฏิเสธพัสดุไปเเล้ว")
            }
        }
    };
    const handleClickCloseConfirmReject = () => {
        setOpenconfirmReject(false);
    };
    const handleClickCloseConfirmRejectWihtReject= () => {
        Reject();
        setOpenconfirmReject(false);
        window.location.reload(false);
        alert(" พัสดุนี้ถูกปฏิเสธ ")
    };
    /*
        !Open-Close-Submit Reject Dialog
    */

    useEffect(() => {
        console.log(GetIDParcel)
        console.log(RNameR)
        console.log(ShowAddressxx)
    })

//  {/************************************************ Interface ***********************************************************/} 
    return(

        <container fixed class='' id='shitUI'>

            <div className='container col col-sm-7 col-md-12 col-xl-8' id='shitUI'>
                <Typography variant="subtitle1" gutterBottom className='col col-sm-12'>
                    <div class='col col-sm-12 text-center pt-5' id='parcelH1'>
                        <h1 className='col col-sm-12 col-md-12 col-xl-12'>ระบบส่ง-รับ พัสดุ <h1><FaBoxOpen/></h1></h1>
                            <div className='text-left col col-sm-12 col-md-12 col-xl-4'>
                                <button 
                                className='alert alert-primary btn-lg col col-sm-3 col-md-4 col-xl-8'
                                onClick={handleClickOpen}>
                                    ส่งพัสดุ   { <FaBoxOpen/> }{ <ArrowForwardIcon/> }
                                </button>
                            </div>
                    </div>
                </Typography>
        {/* <button onClick={()=>{ohWow()}}>ohWow</button> */}
        {/* <button onClick={()=>{TimeRanger()}}>Time</button> */}
    {/************************************************ Dialog ***********************************************************/} 

                <Dialog 
                class='container col col-sm-4 col-md-12 col-xl-8'
                open={open} 
                onClose={handleClose} 
                aria-labelledby="form-dialog-title" 
                className='p-5' 
                fullWidth 
                id='shitDialog'>
                    <DialogTitle 
                    id="form-dialog-title" 
                    className='text-center mt-3'>
                    <h1>ข้อมูลพัสดุที่ส่ง </h1>
                    </DialogTitle><hr/>
                    <DialogContent>
                    
                    <DialogTitle 
                    id="form-dialog-title" 
                    className='text-center'>
                    <h4>ผู้ส่ง { <FaceIcon/> }{ <ArrowForwardIcon/> }{ <FaBoxOpen/> }</h4>
                    </DialogTitle>
                        <form>
                        <TextField required  
                        id="nameSender" 
                        label="ชื่อผู้ส่ง" 
                        variant="outlined" 
                        value={ SName }
                        type="text"
                        onChange={ SNameChange }
                        fullWidth/><br/><br/>
                        <TextField 
                        required
                        id="phoneSender" 
                        label="เบอร์โทรผู้ส่ง" 
                        variant="outlined" 
                        value={SPhone}
                        type="text"
                        onChange={ SPhonehange }
                        fullWidth/><br/><br/>

                        <TextField required 
                        id="addressdropdown" 
                        className='col col-12 ' 
                        select label="ที่อยู่สาขาต้นทาง" 
                        value={ Addressza } 
                        onChange={ (e)=>{ setAddressza(e.target.value) } } 
                        fullwidth>
                            {ShowAddressxx}
        
                        </TextField><br/><br/>
                                <TextField disabled
                                id="addresstextarea" 
                                className='col col-11 float-right' 
                                variant="outlined"  
                                multiline rows="2" 
                                InputProps={{readOnly: true, }} 
                                value={ Addressza }/><br/><br/><br/><hr/>



                        <DialogTitle 
                        id="form-dialog-title" 
                        className='text-center'>
                        <h4>ผู้รับ { <FaBoxOpen/> }{ <ArrowForwardIcon/> }{ <FaceIcon/> }</h4>
                        </DialogTitle>

                        <TextField required 
                        id="nameSender" 
                        label="ชื่อผู้รับ" 
                        variant="outlined" 
                        value={RName}
                        type="text"
                        onChange={ RNameChange }
                        fullWidth/><br/><br/>
                        <TextField required 
                        id="phoneSender" 
                        label="เบอร์โทรผู้รับ" 
                        variant="outlined" 
                        value={RPhone}
                        type="text"
                        onChange={ RPhoneChange }
                        fullWidth/><br/><br/>

                        <TextField required 
                        id="addressdropdown" 
                        className='col col-12 ' 
                        select label="ที่อยู่สาขาปลายทาง" 
                        value={ Addressza2 } 
                        onChange={ (e)=>{ setAddressza2(e.target.value) } }  
                        fullwidth>
                            { ShowAddressxx }
                        </TextField><br/><br/>
                                <TextField  disabled
                                id="addresstextarea" 
                                className='col col-11 float-right' 
                                variant="outlined"  
                                multiline rows="2" 
                                InputProps={{readOnly: true, }} 
                                value={ Addressza2 }/><br/><br/><br/><hr/>

                    

                        <DialogTitle 
                        id="form-dialog-title" 
                        className='text-center'>
                        <h4>ข้อมูลของพัสดุ { <FaBoxOpen/> } </h4>
                        </DialogTitle>

                        <TextField required 
                        id="namePracel" 
                        label="พัสดุ" 
                        variant="outlined" 
                        value={PName}
                        type="text"
                        onChange={ PNameChange }
                        fullWidth/><br/><br/>
                                    
                        <TextField required 
                        id="detailpraceltextarea" 
                        label="รายละเอียดของพัสดุ" 
                        className='col col-11 float-right' 
                        variant="outlined"  
                        value={Dparcel}
                        type="text"
                        onChange={ DparcelChange }
                        multiline rows="4" />
                        </form>
                    </DialogContent>
                    
                    <DialogActions>
                    <br/><br/><br/><br/>
                    <Button 
                    onClick={ handleClose }  
                    variant="contained" 
                    ize="large" 
                    color="secondary">
                    {<DeleteIcon />}
                        ยกเลิก
                    </Button>

                    <Button 
                    onClick={ PushParcel } 
                    variant="contained" 
                    size="large" 
                    color="primary" >
                    {<DoneIcon/>}
                        ส่งพัสดุ
                    </Button>

                    </DialogActions>
                </Dialog>
  {/**************************************************** Data both side *******************************************************/}

            <Card elevation={5} variant="outlined " className='my-2' id='shitCard'>
                <div className='containter row pl-2'>       
                    <div className='col col-sm-4 m-3 mb-5 my-1' id='boxLeft'>
                        <div><h2 className='text-center'>สถานะพัสดุ <FaInfoCircle/></h2></div>
                        <div id='containerShit' class='border-top'>
                        
                                <div id='center-col' class='text-center'>
                                    <ul class='p-2'>
                                        {/* {AddButton} */}
                                        {OHwow}
                                    </ul>
                                </div>
                        </div>
                    </div>
                        <div class="verticalLine"></div>
                        <div className='col col-sm-7 m-3 my-1' id='boxRight'>
                        <h2 className='text-center'>ข้อมูลพัสดุ <FaReceipt/></h2>
                        <div id='containerShit' class='border-top'>
                                <div id='center-col' class='text-center'>
                                    <ul class='p-2'>
                                        <div className='row'>
                                        <div class="col col-3"></div>
                                        <div class="col col-3"></div>
                                            <div className='row col my-2'>
                                                <div className='row'>
                                                    <div>
                                                        <Alert 
                                                            key ={GetIDParcel} 
                                                            id='AlertButton'
                                                            severity="error"
                                                            onClick={ ()=>{ handleClickOpenConfirmReject() } }>
                                                            <AlertTitle>ปฏิเสธพัสดุ</AlertTitle>
                                                        </Alert>
                                                    </div>
                                                    <div>
                                                        <Alert 
                                                            key ={GetIDParcel} 
                                                            id='AlertButton'
                                                            severity="success"
                                                            onClick={ ()=>{ handleClickOpenConfirmAccept() } }>
                                                            <AlertTitle>รับพัสดุ</AlertTitle>
                                                        </Alert>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                            <DialogTitle 
                                            id="form-dialog-title" 
                                            className='text-center'>
                                                 <h4 className='alert alert-primary'>Receiver: {RRNameR}</h4>
                                            <h1>Shipping information </h1>
                                            </DialogTitle><hr/>

                                            <DialogContent>
                                                    <DialogTitle 
                                                    id="form-dialog-title" 
                                                    className='text-center'>
                                                    <h4>Sender { <FaceIcon/> }{ <ArrowForwardIcon/> }{ <FaBoxOpen/> }</h4>
                                                    </DialogTitle>
                                    {/* <p>{GetIDParcel}</p>  */}
                                    
                                                        


                                                        
                                                        <TextField 
                                                        required 
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

                                                        <TextField disabled
                                                        id="addresstextarea" 
                                                        helperText="Address"
                                                        className='col col-11 float-right' 
                                                        variant="outlined"  
                                                        multiline rows="2" 
                                                        InputProps={{readOnly: true, }} 
                                                        value={ SAddressR }/><br/><br/><br/><hr/>



                                                        <DialogTitle 
                                                        id="form-dialog-title" 
                                                        className='text-center'>
                                                        <h4>Reciever { <FaBoxOpen/> }{ <ArrowForwardIcon/> }{ <FaceIcon/> }</h4>
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

                                                        <TextField  disabled
                                                        id="addresstextarea" 
                                                        helperText="Address"
                                                        className='col col-11 float-right' 
                                                        variant="outlined"  
                                                        multiline rows="2" 
                                                        InputProps={{readOnly: true, }} 
                                                        value={ RAddressR }/><br/><br/><br/><hr/>

                                                    

                                                        <DialogTitle 
                                                        id="form-dialog-title" 
                                                        className='text-center'>
                                                        <h4>Pracel information { <FaBoxOpen/> } </h4>
                                                        </DialogTitle>

                                                        <TextField required 
                                                        id="namePracel" 
                                                        helperText="Pracel"
                                                        variant="outlined" 
                                                        value={ PNameR }
                                                        type="text"
                                                        onChange={ PNameChange }
                                                        InputProps={{readOnly: true, }}
                                                        fullWidth/><br/><br/>
                                                                    
                                                        <TextField required 
                                                        id="detailpraceltextarea" 
                                                        helperText="Pracel Description"
                                                        className='col col-11 float-right' 
                                                        variant="outlined"  
                                                        value={ DparcelR }
                                                        type="text"
                                                        onChange={ DparcelChange }
                                                        InputProps={{readOnly: true, }}
                                                        multiline rows="4" />
                                                        
                                            </DialogContent>
                                    </ul>
                                </div>
                        </div>
  {/********************************************** Appect-Reject Dialog *************************************************************/}

                                <Dialog fullWidth
                                open={OpenconfirmAccept} onClose={handleClickCloseConfirmAccept} 
                                aria-labelledby="form-dialog-title" id='shitDialog2'>
                                    <DialogTitle id="form-dialog-title">การยืนยันรับพัสดุ</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText>
                                            หากต้องการที่จะรับ <strong>{PNameR}</strong> จาก <strong>{TinyAdderess}</strong> โปรดกรอกชื่อเเละกดปุ่ม <strong>"ยืนยัน"</strong>.
                                        </DialogContentText>
                                        
                                            <TextField
                                                autoFocus
                                                margin="dense"
                                                id="name"
                                                label="ชื่อผู้รับ"
                                                value={ RRName }
                                                type="text"
                                                onChange={ RRNameChange }
                                                fullWidth/>
                                    </DialogContent>
                                    <DialogActions>
                                    <Alert 
                                        id='AlertButton' 
                                        severity="error" 
                                        
                                        onClick={handleClickCloseConfirmAccept}><AlertTitle>ยกเลิก</AlertTitle></Alert>
                                    <Alert 
                                        id='AlertButton' 
                                        severity="success" 
                                        variant="filled"
                                        onClick={handleClickCloseConfirmAcceptWihtAccept}><AlertTitle>ยืนยัน</AlertTitle></Alert>
                                    </DialogActions>
                                </Dialog>


                                <Dialog fullWidth
                                open={OpenconfirmReject} onClose={handleClickCloseConfirmReject} 
                                aria-labelledby="form-dialog-title" id='shitDialog2'>
                            <DialogTitle id="form-dialog-title">การยืนยันปฏิเสธพัสดุ</DialogTitle>
                            <DialogContent>
                            <DialogContentText>
                            หากตั้งการปฏิเสธ <strong>{PNameR}</strong> จาก <strong>{TinyAdderess}</strong> 
                            </DialogContentText>
                            <DialogContentText>
                                กด <strong>"ยืนยัน"</strong> เพื่อปฏิเสธพัสดุ
                            </DialogContentText>
                            
                            
                            {/* <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Name"
                                type="email"
                                fullWidth
                            /> */}
                            </DialogContent>
                            <DialogActions>
                            <Alert 
                                id='AlertButton' 
                                severity="error" 
                                
                                onClick={handleClickCloseConfirmReject}><AlertTitle>ยกเลิก</AlertTitle></Alert>
                            <Alert 
                                id='AlertButton' 
                                severity="error" 
                                variant="filled"
                                onClick={handleClickCloseConfirmRejectWihtReject}><AlertTitle>ยืนยัน</AlertTitle></Alert>
                            </DialogActions>
                        </Dialog>
                    
                    </div>
                </div>         
            </Card>
            </div>
        </container>
    )

}
export default ShitDashboard