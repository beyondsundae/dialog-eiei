import React, {useState} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import ShitDialog from './ShitDialog';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
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

import AddStatus from './AddCase';

const ShitDashboard =()=>{

    

    return(
        <div class='owwDashboard'>
            
            <div className='container border border-info'>
            
                <Typography variant="subtitle1" gutterBottom>
                    <h1 class='text-center'>Parcel registration</h1>
                    
                    <ShitDialog/>
                </Typography>
                
            

            <Card variant="outlined " className='my-5 border border-warning' id='shitCard'>
            
                <div className='containter row pl-2'>
                    <div className='col col-4 border m-3 mb-5 ' id='boxLeft'>
                        <div id='containerShit' class='border border-success'>
                                <div id='center-col' class='text-center'>
                                    <ul class='p-2'>
                                        
                                    

                                        
                                        
                                    </ul>
                                </div>
                        </div>
                    </div>
                        <div class="vl"></div>
                    <div className='col col-7 border m-3' id='boxRight'>
                    <div id='containerShit' class='border border-success'>
                                <div id='center-col' class='text-center'>
                                    <ul class='p-2'>
                                        

                                        
                                        
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