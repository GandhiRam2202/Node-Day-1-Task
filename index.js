import express from 'express';
import fs from 'fs';
import { format } from 'date-fns'
import path from 'path';

const app = express();
const PORT = 4000;

// Function to convert UTC time to Indian Standard Time (IST)
function convertToIST(utcDate) {
    return new Date(utcDate.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
}

let today = convertToIST(new Date());
let toDay = format(today, 'dd-MM-yyyy HH-mm-ss');

const filePath = `TimeStamp/${toDay}.txt`

app.get('/', (req, res) => {
    res.status(200).json({"message": 'Welcome to the Nodejs file system'});
})


app.get('/write', (req, res)=>{
    fs.writeFileSync(filePath, `Date : ${toDay}`, 'utf8');
    res.status(200).send(`<h1 style="text-align:center">WRITE</h1><br><br><br><br><br><br><br><br><br><h1 style="text-align:center">File Written Successfully :<br><span style="color:green">Date : ${toDay}</span></h1>`);
  });
  
  app.get('/read', (req, res)=>{
    let data = fs.readFileSync(filePath, 'utf8');
    res.status(200).send(`<h1 style="text-align:center">READ</h1><br><br><br><br><br><br><br><br><br><h1 style="text-align:center">Data From File :<br><span style="text-align:center;color:red;">${data}</span></h1>`);
});


app.get("/filesList", (req, res) => {
  const filePath = "TimeStamp";
  
  fs.readdir(filePath, (err, files) => {
    if (err) {
      console.error(err);
      res
      .status(500)
      .send("An error occurred while listing the files from the directory");
    } else {
      const textFiles = files.filter((file) => path.extname(file) === ".txt");
      res.status(200).json(textFiles);
    }
  });
});

app.listen(PORT, () => {
    console.log(`Server running on the port ${PORT}`);
});