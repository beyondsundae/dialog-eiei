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
import ListItem from '@material-ui/core/ListItem';
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

const RRFNC =()=>{
  window.onload = function() {
    
    OhSend();
    
}

    const data = {
        documents: [
          {
            Id: 1,Name: "Category A",
              Sheets: [
                {Id: 1,Title: "Title1 "},
                {Id: 3,Title: "Title2"}  
              ]},
          {
            Id: 2,Name: "Category B",
              Sheets: [
                {Id: 1,Title: "Title1 "},
                {Id: 2,Title: "Title2"}  
              ]}]};

    const [open, setOpen] = useState(false);
    const [OHwow, setOHwow] = useState();
    const docs = data.documents;
    
    const handleClick=(doc)=> {
        console.log("Handle Clicked...."+doc.Id);
        setOpen({...open,[doc.Id]:!open[doc.Id]});
    }
   
   

      const ShitList=(props)=>{
        const doc=props.doc
        const docK=props.doc.Id
          return(
            <div>
                <ListItem button key={doc.Id} onClick={()=>{handleClick(doc)}}>
                        <ListItemText primary={doc.Name} />
                </ListItem>

                <Collapse key={doc.Sheets.Id} in={open[doc.Id]}>
                    <List component="li" disablePadding key={doc.Id}>
                        {doc.Sheets.map(sheet => {
                          console.log(sheet)
                        return (
                            <ListItem button key={sheet.Id}>
                            <ListItemText key={sheet.Id} primary={sheet.Title} />
                            </ListItem>
                        );
                        })}
                    </List>
                </Collapse>
                <Divider />
            </div>
  
          )
      }

      const OhSend =()=>{
       
      console.log('eee')
             axios.get('http://localhost:4000/OhSend')//or both
            .then(function (response){
                const dataThree = response.data;
                console.table(dataThree)
        //             dataThree.map((item)=>
        //               {
        //                 return(
        //               <div>
        //                 <p>{item.Id_parcel}</p></div>
        //                 )}
                        
                        
                        
                        
        //             )
                
               
                
        })
        
    }

    
      
    return(
        <div>
                <List>
                    {docs.map(doc =>{
                      return(
                      <div>
                      <ListItem button key={doc.Id} onClick={()=>{handleClick(doc)}}>
                              <ListItemText primary={doc.Name} />
                      </ListItem>
      
                      <Collapse key={doc.Sheets.Id} in={open[doc.Id]}>
                          <List component="li" disablePadding key={doc.Id}>
                              {doc.Sheets.map(sheet => {
                                console.log(sheet)
                              return (
                                  <ListItem button key={sheet.Id}>
                                  <ListItemText key={sheet.Id} primary={sheet.Title} />
                                  </ListItem>
                              );
                              })}
                          </List>
                      </Collapse>
                      <Divider />
                  </div>
                    
                    )})}
                </List>
            </div>
    )
}

export default RRFNC;
