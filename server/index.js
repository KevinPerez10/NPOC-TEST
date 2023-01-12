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
//add info (walk in)
app.post('/addinfo', (req, res) => {
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
});
//add record (walkin) (not finished)
app.post('/addrecord', (req, res) => {
    const od = req.body.od;
    const os = req.body.os;
    const sp1_1 = req.body.sp1_1;
    const sp1_2 = req.body.sp1_2;
    const sp2_1 = req.body.sp2_1;
    const sp2_2 = req.body.sp2_2;
    const pd = req.body.pd;
    const alp = req.body.alp;
    const fr = req.body.fr;
    const ln = req.body.ln;
    const tn = req.body.tn;
    const pid = req.body.pid;

    db1.query("INSERT INTO records (od, os, sphere1_1, sphere1_2, sphere2_1, sphere2_2, pd, addLP, fr, ln, tn, patientID, createdAt, UpdatedAt) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,NOW(),NOW());",
    [od,os,sp1_1,sp1_2,sp2_1,sp2_2,pd,alp,fr,ln,tn,pid,'Walk-in'], (err, result) => {
    if(err){
        console.log(err);
    } else {
        res.send("values inserted");
    }
    });
    
});

//get patientID
app.post('/patientid', (req,res) => {
    const f = req.body.f;
    const p = req.body.p;

    db1.query('SELECT patientID FROM npoc.patients where name = ? AND phone = ?;',[f,p], (err,result) => {
        if(err){
            console.log(err);
        } else {
            res.send(result);
        }
    });
});
//add transaction
app.post('/transaction', (req, res) => {
    const a = req.body.a;
    const d = req.body.d;
    const b = req.body.b;
    const t = req.body.t;
    const pi = req.body.pi

    db1.query("INSERT INTO transactions (amount, deposit, balance, total, patientID, createdAt, UpdatedAt) VALUES (?,?,?,?,?,NOW(),NOW());",
    [a,d,b,t,pi], (err, result) => {
    if(err){
        console.log(err);
    } else {
        res.send("values inserted");
    }
    })
});

//add available date
app.post("/availability", (req, res) => {
    const d = req.body.d;
    const s = req.body.s;
    const i = req.body.i;

    db1.query("INSERT INTO clinic_availabilities (date, availability, status, createdAt, UpdatedAt) VALUES (?,?,?,NOW(),NOW());",
    [d,s,i], (err, result) => {
    if(err){
        console.log(err);
    } else {
        res.send("values inserted");
    }
    })
});

//get patient using patient id
app.post('/patientbyid', (req,res) => {
    const id = req.body.id;

    db1.query('SELECT name, address, date_format(birthday, "%M %d, %Y") as birthday, phone FROM npoc.patients where patientID = ?;',[id], (err,result) => {
        if(err){
            console.log(err);
        } else {
            res.send(result);
        }
    });
});
//get record using patient id
app.post('/recordbyid', (req,res) => {
    const id = req.body.id;

    db1.query('SELECT * FROM npoc.records where patientID = ?;',[id], (err,result) => {
        if(err){
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

//get record using record id
app.post('/recordbyrid', (req,res) => {
    const id = req.body.id;

    db1.query('SELECT * FROM npoc.records where rid = ?;',[id], (err,result) => {
        if(err){
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

db.sequelize.sync().then((req) => {
app.listen(5174, () => {
    console.log("Server running on port 5174");
});
});