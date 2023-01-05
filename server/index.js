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
    const b = req.body.b;
    const p = req.body.p;
    const ad = req.body.ad;
    const em = req.body.em;
    const pa = req.body.pa;
    
    db1.query("INSERT INTO users (firstName, lastName, birthday, phone, address, email, password, createdAt, UpdatedAt) VALUES (?,?,?,?,?,?,?, NOW(), NOW());",
    [f, l, b, p, ad, em, pa], (err, result) => {
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
    db1.query('SELECT patientID, name,DATE_FORMAT(FROM_DAYS(DATEDIFF(NOW(),birthday)), "%Y") + 0 AS age, phone, address, date_format(createdAt, "%M %d, %Y") as date, appt_type FROM npoc.patients;', (err,result) => {
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
    const b = req.body.b;

    db1.query("INSERT INTO patients (name, birthday, phone, address, appt_type, createdAt, UpdatedAt) VALUES (?,?,?,?,?,NOW(),NOW());",
    [f,b,p,ad,'Walk-in'], (err, result) => {
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