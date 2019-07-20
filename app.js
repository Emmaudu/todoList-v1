const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

var today = new Date();
var currentDay = today.getDay;

app.get('/', (req, res)=>{

    if (currentDay===0 || currentDay===6){
        res.sendFile(__dirname + "/weekend.html");
    }else{
        res.sendFile(__dirname + "/weekday.html");
    };

    res.send('<h1>Welcome</h1>');
});


app.listen(port, ()=>{
    console.log('Server is started at port: ' + port);
});