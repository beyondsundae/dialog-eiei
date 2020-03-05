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
    methods:['POST','GET'],
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


// connection.query("SELECT * FROM Address", function (err, result, fields) {
//     // if (err) throw err;
//         console.log(result[2]);    
//         // console.log(result);   
//   });

// app.get('/', (req, res) => {
//     res.send('ora ora ora')})

// app.get('/111', (req, res) => {
//     var sql = "INSERT INTO Address (ID_Address, Address_Name, Address_Full) VALUES ('9', 'eieiei', 'test')";
//         connection.query(sql, function (err, result) {
//             // if (err) throw err;
//             console.log("1 record inserted")})})


app.get('/get',(req,res)=>{
    res.send('heeelll')
})
app.post('/111', (req, res) => {
    var sql = "INSERT INTO Parcel (Sender_Name, Sender_Phone, Sender_Address, Receiver_Name, Receiver_Phone, Receiver_Address, Parcel_Name, Parcel_Description) VALUES ('xweasassaddrxxx', '12aa314', 'test', 'test', '12314', 'test', 'test', 'test')";
        connection.query(sql, function (err, result) {
            // if (err) throw err;
            console.log("1 record inserted")})})


app.get('/yyyy', (req, res)=>{
    connection.query("SELECT Id_parcel FROM Parcel", function (err, result, fields) {
        // if (err) throw err;
            // console.log(result[2]);    
            res.send(result)
            console.log("show result")
            console.log(result);   
      });
})


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
        Parcel_Description: req.body.Dparcel};

    let sql = "INSERT INTO Parcel SET ?";
        connection.query(sql, data,(err, results) => {
        
        // if(err) throw err;
        
    });
    });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)})   
    
    module.exports = app;