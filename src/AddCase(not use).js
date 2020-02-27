import React, { useState, useEffect } from "react";
import ShitDialog from './ShitDialog';
import ShitDashboard from './ShitDashboard';

function AddCase() {

    const [AddData, setAddData] = useState([])

    

    function addData(){
        setAddData([...AddData, {item:false, status: 'send'}])
      }
      

      const updateAccept = (index)  => {
        let newArr = [...AddData]; // copying the old datas array
        newArr[index] = { item:false, status: 'Accepted'} // replace e.target.value with whatever you want to change it to
        console.log(newArr)
        setAddData(newArr); // ??
    }

    const updateDecline = (index)  => {
        let newArr = [...AddData]; // copying the old datas array
        newArr[index] = { item:false, status: 'Rejected'} // replace e.target.value with whatever you want to change it to
        console.log(newArr)
        setAddData(newArr); // ??       
    }
  
    //   const ShitChangetoReceived =(index)=>{
    //      console.log(index)
    //     setAddData(...AddData[index]= { item:false, status: 'received'})
        
    //   }
  
  
      const AddButton =AddData.map((item,index)=>(
        
        <div>
          <button key={index} className="btn btn-warning btn-lg mr-3" onClick={ console.log(index) }>
            { item.status } {index}
          </button>
        
          <button key={index} className='btn btn-success btn-sm' onClick={ ()=>updateAccept(index) }>
            Accept Parcel {index}
          </button>
        
          <button key={index} className='btn btn-danger btn-sm' onClick={ ()=>updateDecline(index) }>
            Decline Parcel {index}
          </button>
        
        </div> 
      ))

      useEffect(() => {console.log(...AddData)})

      // const btnshit =()=>(
      //     <button className='btn bnt-danger'/>
      // )

      return (
        <div className="container text-left ">
            <ShitDialog btn={addData} />
            <div>xxxx{AddButton}</div>
            <ShitDashboard showsts={AddButton}/>
            
                
                
                
        </div>
      )
}

export default AddCase;