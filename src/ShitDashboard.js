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
import List from '@material-ui/core/List';
import Switch from '@material-ui/core/Switch';
import Radio from '@material-ui/core/Radio';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import moment from 'moment'
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DoneIcon from '@material-ui/icons/Done';
import FaceIcon from '@material-ui/icons/Face';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import Tooltip from '@material-ui/core/Tooltip';
import MenuItem from '@material-ui/core/MenuItem';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import AlertTitle from '@material-ui/lab/AlertTitle';
import Typography from '@material-ui/core/Typography';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Collapse from "@material-ui/core/Collapse";
import DialogActions from '@material-ui/core/DialogActions';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import Divider from "@material-ui/core/Divider";
import DialogContentText from '@material-ui/core/DialogContentText';
import { withStyles} from "@material-ui/core/styles";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {DatePicker ,TimePicker,DateTimePicker,MuiPickersUtilsProvider,} from '@material-ui/pickers';
// import { DatePicker } from "@material-ui/pickers";
    

var dateFormat = require('dateformat');
const ShitDashboard =()=>{
    
    window.onload = function() {
        ohWow();
        OhSend();
        OhResponse();
        TimeRanger();
        MonthMenu();
    }
    
    const [open, setOpen] = useState(false);
    const [OpenconfirmAccept, setOpenconfirmAccept] = useState(false);
    const [OpenconfirmReject, setOpenconfirmReject] = useState(false);

    const [OHwow, setOHwow] = useState();
    const [ShowAddressxx, setShowAddressxx] = useState();
    const [ShowMonthsxx, setShowMonthsxx] = useState();
    const [DateTime, setDateTime] = useState();
    const [Monthx, setMonthx] = useState();
    const [Yearx, setYearx] = useState();
    const [TinyAdderess, setTinyAdderess] = useState();
    const [DataBoxL, setDataBoxL] = useState([]);
    const [DataBoxR, setDataBoxR] = useState([]);

    const [openx, setOpenx] = useState(true);
    const handleClickxx=(item)=> {
        console.log("Handle Clicked...."+item.Id_parcel);
        console.log(openx)
        setOpenx({...openx,[item.Id_parcel]:!openx[item.Id_parcel]});
        }

     

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
    const [checked, setChecked] = React.useState('ครบ');
    const handleChange = event => {
        setChecked(event.target.value);
      };
    const [SelectedDate, setSelectedDate] = useState(new Date()); 
    const [Monthza, setMonthza] = useState('All'); 
    const [Yearza, setYearza] = useState('All'); 
     /*
    ! Right side
    */

    const ShitTooltip = withStyles({
        tooltip: {
          fontSize: "1em",
          maxWidth: 700
        }
      })(Tooltip);

    function PushParcel (e){
        e.preventDefault()
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
            DateTime:DateTime,
            Monthx:Monthx,
            Yearx:Yearx
        }

        axios.post('http://localhost:4000/PostParcel', formData)
            .then(function (response) {
                console.log(response);
          })
            .catch(function (error) {
                console.log(error);
          });

          TimeRanger();
          
            // eslint-disable-next-line
            if (SName!==null&&SName!=="", SPhone!==null&&!SPhone=="", Addressza!==null&&Addressza!=="", RName!==null&&RName!=="",
            // eslint-disable-next-line
            RPhone!==null&&RPhone!=="", Addressza2!==null&&Addressza2!=="", PName!==null&&PName!=="", Dparcel!==null&&Dparcel!=="") {
                return(alert('เพิ่มพัสดุสำเร็จ'),
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
        
        
        axios.get('http://localhost:4000/specificdata',info)
            .then(function (response){
                const dataSpecific = response.data;
                console.log(dataSpecific)

                dataSpecific.map((item)=>
                    setSNameR(item.Sender_Name),
                    setSPhoneR(item.Sender_Phone),
                    setSAddressR(item.Sender_Address),

                    setRNameR(item.Receiver_Name),
                    setRPhoneR(item.Receiver_Phone),
                    setRAddressR(item.Receiver_Address),

                    setPNameR(item.Parcel_Name),
                    setDparcelR(item.Parcel_Description),
                    setRRNameR(item.Real_Receiver_Name),
        )})}
        /*
            !Get data to state
        */

    function Accept (){
        var accept ={
            id:GetIDParcel,
            RRName:RRName,
            Check:checked}
        axios.put('http://localhost:4000/accept',accept)
            .then(function (response){
                ohWow();  
        })}
        /*
            !When Accept
        */

    function Reject (){
        var reject ={
            id:GetIDParcel}
        axios.put('http://localhost:4000/reject',reject)
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
             <p>{'สาขาปลายทาง: '+' '}{DAddress}</p>
             <p>{'พัสดุ:'+' '}{ParcelShit}</p>
             <p>{'วันเวลาที่ส่ง:'+' '}{TimeRanger}</p>
            </p>
        )}
        /*
            !When Hover
        */

    function ShortAddress(item){
        const addressShort = item.Receiver_Address
        const Shortaddress = addressShort.split('-')[0]
        // console.log(SmallAddress)
        return(Shortaddress)
        }
        /*
            !Short Address
        */
    const Menu =()=>{
        axios.get('http://localhost:4000/address')
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
        /*
            !Dropdown Address
        */
    const MonthMenu =()=>{
        axios.get('http://localhost:4000/months')
        .then(function(response){
            const dataMonth = response.data;
            // console.table(dataMonth)
            const DropdownMonth = dataMonth.map((item) =>
                <MenuItem 
                    key={ item.Month } 
                    value={ item.Month} 
                    onChange={ ()=> { setMonthza(item.Month) }} 
                    fullwidth >
                        { item.Month}
                </MenuItem>)
                // <p>{item.Address_Name}</p>)
                
                setShowMonthsxx(DropdownMonth)}
               )
        }
        /*
            !Dropdown Address
        */
    function TimeRanger(){
        var DateTime = moment().format('ll') +' '+moment().format('LT');
        var Month = moment().format('MMMM'); 
        var Year = moment().format('YYYY');  
        setDateTime(DateTime)
        setMonthx(Month)
        setYearx(Year)
        console.log('TimeRanger')
        console.log(DateTime)
        console.log(Month)
        }
        /*
            !Time Ranger function
        */
    // function MM(date){
    //     setStartDate(date)
    //     var full = startDate
    //     var sff = dateFormat(full, "mmmm");
    //     console.log(sff)
    //     setMonthza(sff)
    //     OhSend ()
        
    // }
    function SetMonth(date){
        console.log(date)
            var fullDate = date
            setSelectedDate(fullDate)
            var Month = dateFormat(fullDate, "mmmm");
            var Year = dateFormat(fullDate, "yyyy");
            setMonthza(Month)
            setYearza(Year)
            // console.log(fullDate)
            // console.log(Month)
            // console.log(Year)
            OhSend();
            
        
    }
    function SelectAccept(item){
        ShowData (item);
        handleClickOpenConfirmAccept();
        }
         /*
            !ClickToAccept
        */


    function OhSend (){
        var info ={
            params: {
                Monthza:Monthza
            }} 

        return axios.get('http://localhost:4000/OhSendx',info) 
        .then(function (response) {
            const data = response.data;
            // console.table(data)
            setDataBoxL(data);
            
            })}
    
    function OhResponse (){
        return axios.get('http://localhost:4000/OhResponse')
        .then(function (response){
            const data = response.data;
            setDataBoxR(data);
            // console.table(data)
            })}

    function ohWow (){
        axios.get('http://localhost:4000/wholedata')
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
                                    <strong>{'สถานะพัสดุ:'+' ' }{ item.status }</strong><br/>
                                    <strong>{'พัสดุ:'+' '}{ item.Parcel_Name }</strong><br/>
                                    <strong>{'วันเวลาที่สุง:'+' '}{item.Date_Time}</strong><br/>
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
            setOpenconfirmAccept(true);
    };
    const handleClickCloseConfirmAccept = () => {
        setOpenconfirmAccept(false);
    };
    const handleClickCloseConfirmAcceptWihtAccept= (e) => {
        e.preventDefault()
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
            if(RRNameR=="-"){
                 setOpenconfirmReject(true);
            }
            // eslint-disable-next-line
            else if(RRNameR!=="-"){
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
        // console.log(GetIDParcel)
        // console.log(RNameR)
        // console.log(ShowAddressxx) 
        // console.log(OHresponse)
        // console.log(DataBoxL)
        // console.log(Monthx)
        // console.log(ShowMonthsxx)
        //  console.log(startDate)
        // console.log(Monthza)
        console.log("UseEffect")
        console.log(SelectedDate)
        
        if(Monthza == 'January'){
            console.log('5555')
        }
    })

//  {/************************************************ Header ***********************************************************/} 
    return(
        
        
        <container fixed class='' id='shitUI'>
        
            <div className='container col col-sm-7 col-md-12 col-xl-8' id='shitUI'>
                <Typography variant="subtitle1" gutterBottom className='col col-sm-12'>
                    <div class='col col-sm-12 text-center pt-5' id='parcelH1'>
                        <h1 className='col col-sm-12 col-md-12 col-xl-12'>ระบบส่ง-รับ พัสดุ <h1><FaBoxOpen/></h1></h1>
                            <div className='text-left col col-sm-12 col-md-12 col-xl-4'>
                            <Card 
                                elevation={5} 
                                variant="outlined " 
                                className='my-5' 
                                onClick={handleClickOpen}
                                id='shitCardxx'>
                                    <h2 className='text-center my-3'>Wow</h2>
                                    <div class='horizonLine2'/>
                                    <br/>
                                    <h2 className='m-4'>ส่งพัสดุ   { <FaBoxOpen/> }{ <ArrowForwardIcon/> }</h2>
                                   
                                </Card>
                                    <Card id='shitCardxx' >
                                    <div class='text-center m-3 p-1' id='shitCardxx'>
                                    <DatePicker
                                        id='shitCardxx'
                                        variant="inline"
                                        openTo="month"
                                        orientation="portrait"
                                        animateYearScrolling='true'
                                        views={["year", "month"]}
                                        value={SelectedDate}
                                        onChange={(date)=>{SetMonth(date)}}
                                    />
                                    </div>
                                    </Card>                  
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
                        <form
                        id="SEND"
                        name="SEND"
                        onSubmit={ PushParcel }>
                        <TextField required  
                        id="nameSender" 
                        label="ชื่อผู้ส่ง" 
                        variant="outlined" 
                        value={ SName }
                        type="text"
                        onChange={ SNameChange }
                        fullWidth/>
                        <br/><br/>

                        <TextField 
                        required
                        id="phoneSender" 
                        label="เบอร์โทรผู้ส่ง" 
                        variant="outlined" 
                        value={SPhone}
                        type="text"
                        onChange={ SPhonehange }
                        fullWidth/><br/><br/>

                        <Select required 
                        id="addressdropdown" 
                        className='col col-12 ' 
                        select label="ที่อยู่สาขาต้นทาง" 
                        value={ Addressza } 
                        onChange={ (e)=>{ setAddressza(e.target.value) } } 
                        fullwidth>
                            {ShowAddressxx}
        
                        </Select><br/><br/>
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

                        <Select required 
                        id="addressdropdown" 
                        className='col col-12 ' 
                        select label="ที่อยู่สาขาปลายทาง" 
                        value={ Addressza2 } 
                        onChange={ (e)=>{ setAddressza2(e.target.value) } }  
                        fullwidth>
                            { ShowAddressxx }
                        </Select><br/><br/>
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
                    form="SEND"
                    type="submit"
                    variant="contained" 
                    size="large" 
                    color="primary" >
                    {<DoneIcon/>}
                        ส่งพัสดุ
                    </Button>

                    </DialogActions>
                    
                </Dialog>
  {/**************************************************** Data Both list *******************************************************/}
        <div>
            <Grid container spacing={5}>
                <Grid item xs={5}>
                
                        <Card elevation={5} variant="outlined " className='my-2' id='shitCardNext1'>
                            <Card elevation={1} variant="outlined "  id='shitCardTop1'>
                                <h3 className='text-center p-4'>ส่งแล้ว</h3>
                            </Card>
                                <List>
                                    {DataBoxL.map(item=>{
                                        // console.log(item)
                                        return(
                                        <div>
                                            <ListItem button key={item.Month} onClick={()=>{handleClickxx(item)}} >
                                            <ListItemAvatar>
                                            <Avatar>
                                                <ImageIcon />
                                            </Avatar>
                                            </ListItemAvatar>
                                                <ListItemText  key ={item.Id_parcel} >
                                                    <strong>{'สาขาที่รับ:'+' '}</strong>{ShortAddress(item)}<br/>
                                                    <strong>{'สถานะพัสดุ:'+' '}</strong>{ item.status }<br/>
                                                    <strong>{'พัสดุ:'+' '}</strong>{ item.Parcel_Name }<br/>
                                                    <strong>{'วันเวลาที่ส่ง:'+' '}</strong>{item.Date_Time}<br/>
                                                </ListItemText>
                                            </ListItem>
                    
                                            <Collapse key={item.Id_parcel} in={openx[item.Id_parcel]}>
                                            <div class='horizonLine3'/>
                                                <ListItem key={item.Id_parcel}>
                                            <ListItemAvatar>
                                            </ListItemAvatar>
                                                <ListItemText key ={item.Id_parcel}>
                                                    <h2 className=''>รายละเอียด</h2><br/>
                                                    <strong>{'ชื่อผู้ส่ง:'+' '}</strong>{item.Sender_Name}<br/>
                                                    <strong>{'เบอร์โทรผู้ส่ง:'+' '}</strong>{item.Sender_Phone}<br/>
                                                    <strong>{'สาขาที่ส่ง:'+' '}</strong>{item.Sender_Address}<br/><br/>
                                                    <strong>{'ชื่อผู้รับ:'+' '}</strong>{item.Receiver_Name}<br/>
                                                    <strong>{'เบอร์โทรผู้รับ:'+' '}</strong>{item.Receiver_Phone}<br/>
                                                    <strong>{'สาขาที่รับ:'+' '}</strong>{item.Receiver_Address}<br/><br/>
                                                    <strong>{'พัสดุ:'+' '}</strong>{item.Parcel_Name}<br/>
                                                    <strong>{'รายละเอียดพัสดุ:'+' '}</strong>{item.Parcel_Description}<br/><br/>
                                                    <strong>{'ผู้ลงชื่อรับพัสดุ:'+' '}</strong>{item.Real_Receiver_Name}<br/>

                                                    <div className='row'>
                                                    <div class="col col-3"></div>
                                                    <div class="col col-3"></div>
                                                        <div className='row col my-2'>
                                                            <div className='row'>
                                                                <div>
                                                                    <Alert 
                                                                        key ={item.Id_parcel} 
                                                                        id='AlertButton'
                                                                        severity="success"
                                                                        onClick={ ()=>{ SelectAccept(item) } }>
                                                                        <AlertTitle>รับพัสดุ</AlertTitle>
                                                                    </Alert>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </ListItemText>
                                                </ListItem>
                                    </Collapse>
                                    <Divider />
                                    </div>
                                    )})}
                                </List>
                        </Card>
                </Grid>
                <Grid item xs={5}>
                        <Card elevation={5} variant="outlined " className='my-2' id='shitCardNext2'>
                            <Card elevation={1} variant="outlined "  id='shitCardTop2'>
                            <h3 className='text-center p-4'>รับแล้ว</h3>
                            </Card>
                            <List>
                                {DataBoxR.map(item=>{
                                        // console.log(item)
                                        return(
                                        <div>
                                            <ListItem button key={item.Id_parcel} onClick={()=>{handleClickxx(item)}} >
                                            <ListItemAvatar>
                                            <Avatar>
                                                <ImageIcon />
                                            </Avatar>
                                            </ListItemAvatar>
                                                <ListItemText  key ={item.Id_parcel} >
                                                    <strong>{'สาขาที่รับ:'+' '}</strong>{ShortAddress(item)}<br/>
                                                    <strong>{'สถานะพัสดุ:'+' '}</strong>{ item.status }<br/>
                                                    <strong>{'พัสดุ:'+' '}</strong>{ item.Parcel_Name }<br/>
                                                    <strong>{'วันเวลาที่ส่ง:'+' '}</strong>{item.Date_Time}<br/>
                                                </ListItemText>
                                            </ListItem>
                    
                                            <Collapse key={item.Id_parcel} in={openx[item.Id_parcel]}>
                                            <div class='horizonLine3'/>
                                                <ListItem key={item.Id_parcel}>
                                            <ListItemAvatar>
                                            </ListItemAvatar>
                                                <ListItemText key ={item.Id_parcel}>    
                                                    <h2 className=''>รายละเอียด</h2><br/>
                                                    <strong>{'ชื่อผู้ส่ง:'+' '}</strong>{item.Sender_Name}<br/>
                                                    <strong>{'เบอร์โทรผู้ส่ง:'+' '}</strong>{item.Sender_Phone}<br/>
                                                    <strong>{'สาขาที่ส่ง:'+' '}</strong>{item.Sender_Address}<br/><br/>
                                                    <strong>{'ชื่อผู้รับ:'+' '}</strong>{item.Receiver_Name}<br/>
                                                    <strong>{'เบอร์โทรผู้รับ:'+' '}</strong>{item.Receiver_Phone}<br/>
                                                    <strong>{'สาขาที่รับ:'+' '}</strong>{item.Receiver_Address}<br/><br/>
                                                    <strong>{'พัสดุ:'+' '}</strong>{item.Parcel_Name}<br/>
                                                    <strong>{'รายละเอียดพัสดุ:'+' '}</strong>{item.Parcel_Description}<br/>
                                                    <strong>{'ความครบถ้วนของพัสดุ:'+' '}</strong>{item.Checked}<br/><br/>
                                                    <strong>{'ผู้ลงชื่อรับพัสดุ:'+' '}</strong>{item.Real_Receiver_Name}<br/>
                                                </ListItemText>
                                                </ListItem>
                                    </Collapse>
                                    <Divider />
                                    </div>
                                        )})}
                            </List>
                        </Card>
                </Grid>
            </Grid>
        </div>
{/********************************************** Old *************************************************************/}
        <div class='horizonLine'/>


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
                                                หากต้องการที่จะรับ <strong>{PNameR}</strong>  โปรดกรอกชื่อเเละกดปุ่ม <strong>"ยืนยัน"</strong>.
                                            </DialogContentText>
                                            <form id="SENDACC" name="SENDACC" onSubmit={ handleClickCloseConfirmAcceptWihtAccept }>
                                                <TextField
                                                    required
                                                    autoFocus
                                                    margin="dense"
                                                    id="name"
                                                    label="ชื่อผู้รับ"
                                                    value={ RRName }
                                                    type="text"
                                                    onChange={ RRNameChange }
                                                    fullWidth/>
                                                    <br/><br/>
                                                    {/* <Checkbox
                                                        checked={checked}
                                                        onChange={handleChange}
                                                        value="primary"
                                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                                    /> */}
                                                    <p>ความครบถ้วนของพัสดุ</p>
                                                    <Radio
                                                    
                                                        checked={checked === 'ครบ'}
                                                        onChange={handleChange}
                                                        value="ครบ"
                                                        color='primary'
                                                        name="radio-button-demo"
                                                        inputProps={{ 'aria-label': 'A' }}
                                                    /><span>ครบ</span>
                                                    <Radio
                                                        checked={checked === 'ไม่ครบ'}
                                                        onChange={handleChange}
                                                        value="ไม่ครบ"
                                                        color='secondary'
                                                        name="radio-button-demo"
                                                        inputProps={{ 'aria-label': 'B' }}
                                                    /><span>ไม่ครบ</span>
                                                    
                                            </form>
                                        </DialogContent>
                                        <DialogActions>
                                        <Button 
                                            id='AlertButton2' 
                                            variant="contained" 
                                            color="secondary"
                                            size="large"
                                            onClick={handleClickCloseConfirmAccept}><AlertTitle>ยกเลิก</AlertTitle>
                                        </Button>
                                        <Button 
                                            form="SENDACC"
                                            type="submit"
                                            id='AlertButton' 
                                            variant="contained" 
                                            color="primary"
                                            size="large"
                                            // onClick={handleClickCloseConfirmAcceptWihtAccept}
                                            >
                                                <AlertTitle>ยืนยัน</AlertTitle>
                                            </Button>
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
            
            </div>
        </container>
    )

}
export default ShitDashboard