const express = require('express')
const mysql = require('mysql');
const app = express()
const port = 4000

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Parcel_Information',
  });

connection.connect(function(err){
    // (err)? console.log(err): console.log(connection);
    
    console.log('status: connected')
    console.log(`Example app listening on port ${port}!`)});

//route for insert data
app.post('/',(req, res) => {
    let data = {
        name: req.body.name, 
        phone: req.body.phone, 
        email: req.body.email, 
        job: req.body.job, 
        company: req.body.company, 
        age: req.body.age, 
        city: req.body.city};
    let sql = "INSERT INTO user SET ?";
    let query = connection.query(sql, data,(err, results) => {
      if(err) throw err;
      res.redirect('/');
    });
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)})   