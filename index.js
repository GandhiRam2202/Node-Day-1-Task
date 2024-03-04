import express from 'express';
import fs from 'fs';
import { format } from 'date-fns'


const app = express();
const PORT = 4000;

let toDay = format(new Date(), 'dd-MM-yyyy-HH-mm-ss');

app.get('/', (req, res) => {
    res.status(200).json({"message": 'Welcome to the Nodejs file system'});
})

app.listen(PORT, () => {
    console.log(`Server running on the port ${PORT}`);
});
app.get('/write', (req, res)=>{
    console.log(toDay);
    const filePath = `TimeStamp/${toDay}.txt`
    fs.writeFileSync(filePath, `${toDay}`, 'utf8');
    res.status(200).send(`<h1 style="text-align:center">File Writed Successfully : ${toDay}</h1>`)
    
}) 
app.get('/read', (req, res)=>{
    console.log(toDay);
    const filePath = `TimeStamp/${toDay}.txt`
    let data = fs.readFileSync(filePath, 'utf8');
    res.status(200).send(`<h1 style="text-align:center">Data From File : <span style="text-align:center;color:red;">${data}</span></h1>`)

}) 

