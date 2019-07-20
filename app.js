const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

var today = new Date();
var currentDay = today.getDay();

app.get('/', (req, res)=>{

    if (currentDay===6 || currentDay===0){
        res.sendFile(__dirname + "/weekend.html");
    }else{
        res.sendFile(__dirname + "/weekday.html");
    }

   
});


app.listen(port, ()=>{
    console.log('Server is started at port: ' + port);
});