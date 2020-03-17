const express = require('express')
const mysql = require('mysql');
const app = express()
const port = 4000
const bodyParser = require("body-parser");
const http = require("http").createServer(app);
const cors = require("cors");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use(cors({
    origin:"*",
    methods:['POST','GET','PUT','DELETE'],
    credentials:true
}))  

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Parcel_Information',
  });

connection.connect(function(err){
    // (err)? console.log(err): console.log(connection);
    
    console.log('status: connected')
    console.log(`Example app listening on port ${port}!`)

    

    // var sql = "INSERT INTO Address (ID_Address, Address_Name, Address_Full) VALUES ('1', 'eieiei', 'test')";
    //     connection.query(sql, function (err, result) {
    //         if (err) throw err;
    //         console.log("1 record inserted")})
});
process.on('uncaughtException', function(err) {         
    // restart app here
    console.log("shit i got an error, nevermind i will restart now ")
  });

// connection.query("SELECT * FROM Address", function (err, result, fields) {
    // if (err) throw err;
//         console.log(result[2]);    
        // console.log(result);   
//   });

// app.get('/', (req, res) => {
//     res.send('ora ora ora')})

// app.get('/111', (req, res) => {
//     var sql = "INSERT INTO Address (ID_Address, Address_Name, Address_Full) VALUES ('9', 'eieiei', 'test')";
//         connection.query(sql, function (err, result) {
            // if (err) throw err;
//             console.log("1 record inserted")})})


app.get('/',(req,res)=>{
    res.send('heeelll')
})

// app.post('/111', (req, res) => {
//     var sql = "INSERT INTO Parcel (Sender_Name, Sender_Phone, Sender_Address, Receiver_Name, Receiver_Phone, Receiver_Address, Parcel_Name, Parcel_Description) VALUES ('xweasassaddrxxx', '12aa314', 'test', 'test', '12314', 'test', 'test', 'test')";
//         connection.query(sql, function (err, result) {
//             if (err) throw err;
//             console.log("1 record inserted")})})


app.get('/wholedata', (req, res)=>{
    connection.query("SELECT * FROM Parcel ORDER BY Id_parcel DESC", function (err, result, fields) {
        if (err) throw err;
            // console.log(result[2]);    
            res.send(result)
            // console.log("show result wholedata")
            // console.log(result);   
      });
})
app.get('/OhSendx', (req, res)=>{
    let param = req.query.Monthza;
    let param2 = req.query.Yearza;
    console.log('SENDx')
    console.log(param +' '+ param2)

    if (param !== 'All' && param2 !== 'All'){
connection.query("SELECT * FROM Parcel WHERE status='ส่งแล้ว' AND Month = ? AND Year = ? ORDER BY Id_parcel DESC  ",[param,param2], function (err, result, fields) {
        if (err) throw err;
            // console.log(result[2]);    
            res.send(result)
            // console.log("show result wholedata")
            // console.log(result);   
      });}
    else if (param == 'All' &&  param2 == 'All'){
connection.query("SELECT * FROM `Parcel` WHERE status='ส่งแล้ว' ORDER BY `status` DESC, `Date_Time` ASC",[param], function (err, result, fields) {
            if (err) throw err;
                // console.log(result[2]);    
                res.send(result)
                // console.log("show result wholedata")
                // console.log(result);   
            });}})

app.get('/OhResponse', (req, res)=>{
    connection.query("SELECT * FROM Parcel WHERE status='ส่งแล้ว' ORDER BY Id_parcel DESC  ", function (err, result, fields) {
        if (err) throw err;
            // console.log(result[2]);    
            res.send(result)
            // console.log("show result wholedata")
            // console.log(result);   
      });
})
app.get('/OhReceived', (req, res)=>{
    let param = req.query.Monthza;
    let param2 = req.query.Yearza;
    console.log('RECEx')
    console.log(param +' '+ param2)

    if (param !== 'All' && param2 !== 'All'){
connection.query("SELECT * FROM Parcel WHERE status='รับแล้ว' AND Month = ? AND Year = ? ORDER BY Id_parcel DESC",[param,param2], function (err, result, fields) {
        if (err) throw err;
            // console.log(result[2]);    
            res.send(result)
            // console.log("show result wholedata")
            // console.log(result);   
              });}
    else if (param == 'All' &&  param2 == 'All'){
connection.query("SELECT * FROM `Parcel` WHERE status='รับแล้ว' ORDER BY `status` DESC, `Date_Time` DESC",[param],function (err, result, fields) {
            if (err) throw err;
                // console.log(result[2]);    
                res.send(result)
                // console.log("show result wholedata")
                // console.log(result);   
            });}})


app.get('/specificdata', (req, res)=>{
    let param = req.query.id
    connection.query("SELECT * FROM Parcel WHERE Id_parcel = "+ param , function (err, result, fields) {
        if (err) throw err;
            // console.log(result[2]);    
            res.send(result)
            // console.log("show result specific")
            // console.log(result);   
      });
})

app.get('/address', (req, res)=>{
    connection.query("SELECT * FROM Address", function (err, result, fields) {
        if (err) throw err;
            // console.log(result[2]);    
            res.send(result)
            // console.log("show result both")
            // console.log(result);   
      });
})
app.get('/months', (req, res)=>{
    connection.query("SELECT * FROM Months", function (err, result, fields) {
        if (err) throw err;
            // console.log(result[2]);    
            res.send(result)
            // console.log("show result both")
            // console.log(result);   
      });
})

app.put('/accept', (req, res)=>{
    let id = req.body.id
    let RRName = req.body.RRName
    let Check = req.body.Check
    connection.query("UPDATE Parcel SET status = 'รับแล้ว', Real_Receiver_Name = ?, color = 'alert alert-success btn-block mr-3', Checked = ? WHERE Id_parcel = "+id,[RRName, Check], function (err, result, fields) {
        if (err) throw err;
            // console.log(result[2]);    
            res.send(result)
            // console.log("show result")
            // console.log(result);
        });})   

app.put('/reject', (req, res)=>{
    let id = req.body.id
    let RRName = "Rejected"
    connection.query("UPDATE Parcel SET status = 'ถูกปฏิเสธ', Real_Receiver_Name = ?, color = 'alert alert-danger btn-block mr-3' WHERE Id_parcel =" +id,[RRName], function (err, result, fields) {
        if (err) throw err;
            // console.log(result[2]);    
            res.send(result)
            // console.log("show result")
            // console.log(result);
        });})    

app.post('/PostParcel',(req, res) => {
    console.log("insertingrs done")
    let data = {
        Sender_Name: req.body.SName, 
        Sender_Phone: req.body.SPhone, 
        Sender_Address: req.body.Addressza, 
        Receiver_Name: req.body.RName, 
        Receiver_Phone: req.body.RPhone, 
        Receiver_Address: req.body.Addressza2, 
        Parcel_Name: req.body.PName, 
        Parcel_Description: req.body.Dparcel,
        Date_Time: req.body.DateTime,
        Month:req.body.Monthx,
        Year:req.body.Yearx,
        status:"ส่งแล้ว",
        color:"alert alert-warning btn-block mr-3",
        Real_Receiver_name:"-",
        Checked:'-'
        // ExCo:"false"
        };

    let sql = "INSERT INTO Parcel SET ?";
        connection.query(sql, data,(err, results) => {
        if(err) throw err;
        
    });
    });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)})   
    
    module.exports = app;