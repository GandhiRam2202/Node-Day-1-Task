import express from 'express';
import fs from 'fs';
import { format } from 'date-fns'

const app = express();
const PORT = 4000;

// Function to convert UTC time to Indian Standard Time (IST)
function convertToIST(utcDate) {
    return new Date(utcDate.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
}

let today = convertToIST(new Date());
let toDay = format(today, 'dd-MM-yyyy');
let currentTime = format(today, 'HH-mm-ss');
const filePath = `TimeStamp/${toDay}.txt`

app.get('/', (req, res) => {
    res.status(200).json({"message": 'Welcome to the Nodejs file system'});
})

app.listen(PORT, () => {
    console.log(`Server running on the port ${PORT}`);
});

app.get('/write', (req, res)=>{
    fs.writeFileSync(filePath, `Date : ${toDay} & Time : ${currentTime}`, 'utf8');
    res.status(200).send(`<h1 style="text-align:center">File Written Successfully : Date : ${toDay} & Time : ${currentTime}</h1>`);
});

app.get('/read', (req, res)=>{
    let data = fs.readFileSync(filePath, 'utf8');
    res.status(200).send(`<h1 style="text-align:center">Data From File : <span style="text-align:center;color:red;">${data}</span></h1>`);
});
