

const OhSend =()=>{
    axios.get('http://localhost:4000/OhSend')//or both
        .then(function (response){
            const dataThree = response.data;
            const SetThree = dataThree.map((item)=>
            
                    
                        <div className='my-3 '>
                    <ListItem button key={item.Id_parcel} onClick={()=>{handleClickxx(item)}}>
                        <strong>{ShortAddress(item)}</strong><br/>
                        <strong>{'สถานะพัสดุ:'+' '}</strong>{ item.status }<br/>
                        <strong>{'พัสดุ:'+' '}</strong>{ item.Parcel_Name }<br/>
                        <strong>{'วันเวลาที่ส่ง:'+' '}</strong>{item.Date_Time}<br/><br/>
                    </ListItem>
                    <Collapse  key={item.Id_parcel} in={openx[item.Id_parcel]}>
                        xxx
                    </Collapse>
                    <Divider />   
                        <ShitDashboard/>
                    </div>
                    
     


                       
            
            )
            
            setOHsend(SetThree)
               
    })
}