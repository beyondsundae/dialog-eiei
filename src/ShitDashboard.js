import React, {useState} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import ShitDialog from './ShitDialog';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import InformationRight from './InformationRight';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import MenuItem from '@material-ui/core/MenuItem';
// import Address from './Address';
// import Paper from '@material-ui/core/Paper';
// import Divider from '@material-ui/core/Divider';
// import Grid from '@material-ui/core/Grid';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Avatar from '@material-ui/core/Avatar';
// import { makeStyles } from '@material-ui/core/styles';




const ShitDashboard =()=>{

    const [AddData, setAddData] = useState([])
    const [open, setOpen] = useState(true);

    function addData(){
        setAddData([...AddData, {item:false, status: 'SENT'}])
    }
      
    const updateAccept = (index)  => {
        let newArr = [...AddData]; // copying the old datas array
        newArr[index] = { item:false, status: 'ACCEPTED'} // replace e.target.value with whatever you want to change it to
        console.log(newArr)
        setAddData(newArr); // ??
    }

    const updateDecline = (index)  => {
        let newArr = [...AddData]; // copying the old datas array
        newArr[index] = { item:false, status: 'REJECTED'} // replace e.target.value with whatever you want to change it to
        console.log(newArr)
        setAddData(newArr); // ??       
    }
    
    const AddButton =AddData.map((item,index)=>(
        
        <div className='my-3'>
          <button key={index} className="btn btn-warning btn-lg btn-block mr-3" onClick={ ()=>console.log(item.status, index) }>
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

    return(
        <div class='owwDashboard'>
            
            <div className='container border border-info'>
                <Typography variant="subtitle1" gutterBottom>
                    <h1 class='text-center' id='parcelH1'>Parcel registration</h1>
                    <ShitDialog btn={addData} />
                </Typography>
                
            

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
                                       { open ? <InformationRight/>: null } 

                                        
                                        
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