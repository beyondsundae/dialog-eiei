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
    methods:['POST','GET','PUT'],
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


// app.get('/get',(req,res)=>{
//     res.send('heeelll')
// })

app.post('/111', (req, res) => {
    var sql = "INSERT INTO Parcel (Sender_Name, Sender_Phone, Sender_Address, Receiver_Name, Receiver_Phone, Receiver_Address, Parcel_Name, Parcel_Description) VALUES ('xweasassaddrxxx', '12aa314', 'test', 'test', '12314', 'test', 'test', 'test')";
        connection.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted")})})


app.get('/wholedata', (req, res)=>{
    connection.query("SELECT * FROM Parcel ORDER BY Id_parcel DESC", function (err, result, fields) {
        if (err) throw err;
            // console.log(result[2]);    
            res.send(result)
            // console.log("show result wholedata")
            // console.log(result);   
      });
})

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

app.get('/status', (req, res)=>{
    connection.query("SELECT status FROM Parcel", function (err, result, fields) {
        if (err) throw err;
            // console.log(result[2]);    
            res.send(result)
            // console.log("show result status")
            // console.log(result);   
      });
})
app.get('/color', (req, res)=>{
    connection.query("SELECT color FROM Parcel", function (err, result, fields) {
        if (err) throw err;
            // console.log(result[2]);    
            res.send(result)
            console.log("show result color")
            console.log(result);   
      });
})

app.get('/both', (req, res)=>{
    connection.query("SELECT status, color, Id_parcel FROM Parcel", function (err, result, fields) {
        if (err) throw err;
            // console.log(result[2]);    
            res.send(result)
            // console.log("show result both")
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

app.put('/accept', (req, res)=>{
    let id = req.body.id
    let RRName = req.body.RRName
    connection.query("UPDATE Parcel SET status = 'ACCEPTED', Real_Receiver_Name = ?, color = 'alert alert-success btn-block mr-3' WHERE Id_parcel = "+id,[RRName], function (err, result, fields) {
        if (err) throw err;
            // console.log(result[2]);    
            res.send(result)
            // console.log("show result")
            // console.log(result);
        });})   

app.put('/reject', (req, res)=>{
    let id = req.body.id
    let RRName = "Rejected"
    connection.query("UPDATE Parcel SET status = 'REJECTED', Real_Receiver_Name = ?, color = 'alert alert-danger btn-block mr-3' WHERE Id_parcel =" +id,[RRName], function (err, result, fields) {
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
        Sender_Address: req.body.addressza, 
        Receiver_Name: req.body.RName, 
        Receiver_Phone: req.body.RPhone, 
        Receiver_Address: req.body.addressza2, 
        Parcel_Name: req.body.PName, 
        Parcel_Description: req.body.Dparcel,
        Date_Time: req.body.DateTime,
        status:"SENT",
        color:"alert alert-warning btn-block mr-3",
        Real_Receiver_name:"Unknow"
        };

    let sql = "INSERT INTO Parcel SET ?";
        connection.query(sql, data,(err, results) => {
        if(err) throw err;
        
    });
    });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)})   
    
    module.exports = app;