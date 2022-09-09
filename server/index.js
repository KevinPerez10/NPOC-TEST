const express = require('express');
const app = express();
const mysql = require("mysql")
const cors = require('cors')

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "password",
    database: "db_npoc"
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
    
    db.query("INSERT INTO patient_info (firstName, lastName, age, phone, address, email, password) VALUES (?,?,?,?,?,?,?);",
    [f, l, a, p, ad, em, pa], (err, result) => {
    if(err){
        console.log(err);
    } else {
        res.send("values inserted");
    }
    })
})

//get patients
app.get('/patients', (req, res) => {
    db.query('SELECT patientID, name, age, phone, address, date_format(appt_date, "%M %d, %Y") as date, appt_type FROM db_npoc.patients;', (err,result) => {
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


app.listen(5174, () => {
    console.log("Server running on port 5174");
});