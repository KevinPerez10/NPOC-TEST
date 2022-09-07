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
    database: "npoc_db"
});

//signup
app.post('/create', (req, res) => {
    const f = req.body.f;
    const l = req.body.l;
    const a = req.body.a;
    const p = req.body.p;
    const ad = req.body.ad;
    const em = req.body.em;
    const pa = req.body.pa;
    
    db.query("INSERT INTO patient_info (firstname, lastname, age, phone, address, email, password) VALUES (?,?,?,?,?,?,?);",
    [f, l, a, p, ad, em, pa], (err, result) => {
    if(err){
        console.log(err);
    } else {
        res.send("values inserted");
    }
    })
})

//Login
app.post('/login', (req,res)=> {

    db.query("SELECT * FROM users WHERE email = ? AND password = ?",
    [email, password],
    (err, result) => {
        if(err){
        res.send({err: err});
        }

        if (result.length > 0) {
            res.send(result)
        } else {
            res.send({message: "Wrong username/password combination"});
        }
        
    })
})

app.listen(5174, () => {
    console.log("Server running on port 5174");
});