const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors());
app.use(express.json());
const mysql = require("mysql");
const db = require('./models');
const db1 = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "password",
    database: "npoc"
});
//Sign up
app.post('/create', (req, res) => {
    const f = req.body.f;
    const l = req.body.l;
    const a = req.body.a;
    const p = req.body.p;
    const ad = req.body.ad;
    const em = req.body.em;
    const pa = req.body.pa;
    
    db1.query("INSERT INTO users (firstName, lastName, age, phone, address, email, password) VALUES (?,?,?,?,?,?,?);",
    [f, l, a, p, ad, em, pa], (err, result) => {
    if(err){
        console.log(err);
    } else {
        res.send("values inserted");
    }
    })
})
//login
app.post('/login', (req,res) => {
    const email = req.body.email;
    const password = req.body.password;
    
    db1.query("SELECT * FROM users WHERE email = ? AND password = ?",
    [email, password],
    (err, result) => {
        
        if(err){
        res.send({err: err})
        }
        if(result.length > 0){
        res.send(result)
        } else {
        res.send({message: "Wrong email or password!"});
            }	
    
    })
    });

//get patients
app.get('/patients', (req, res) => {
    db1.query('SELECT patientID, name, age, phone, address, date_format(createdAt, "%M %d, %Y") as date, appt_type FROM npoc.patients;', (err,result) => {
        if(err){
            console.log(err);
        } else {
            res.send(result);
        }
    })
})
//sort patients
/*app.get('/sort', (req, res) => {
    db.query('SELECT patientID, firstName, lastName, age, phone, address, date_format(appt_date, "%M %d, %Y") as date, appt_type FROM db_npoc.patients order by firstName;', (err,result) => {
        if(err){
            console.log(err);
        } else {
            res.send(result);
        }
    })
})*/
//add record (walk in)
app.post('/record', (req, res) => {
    const f = req.body.f;
    const p = req.body.p;
    const ad = req.body.ad;
    const d = req.body.d;
    
    db1.query("INSERT INTO patients (name, phone, address, appt_date, appt_type) VALUES (?,?,?,?,?);",
    [f,p,ad,d,'Walk-in'], (err, result) => {
    if(err){
        console.log(err);
    } else {
        res.send("values inserted");
    }
    })
})

db.sequelize.sync().then((req) => {
app.listen(5174, () => {
    console.log("Server running on port 5174");
});
});