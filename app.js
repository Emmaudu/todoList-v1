const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

const port = process.env.PORT || 3000;

var today = new Date();
var currentDay = today.getDay();

app.get('/', (req, res)=>{

    if (currentDay===0){
        res.render('list', {todaynow : 'Sunday'});
        
    }else if(currentDay===1){
        res.render('list', {todaynow : 'Monday'});

    }else if(currentDay===2){
        res.render('list', {todaynow : 'Tuesday'});

    }else if(currentDay===3){
        res.render('list', {todaynow : 'Wednesday'});

    }else if(currentDay===4){
        res.render('list', {todaynow : 'Thursday'});

    }else if(currentDay===5){
        res.render('list', {todaynow : 'Friday'});

    }else if(currentDay===6){
        res.render('list', {todaynow : 'Saturday'});

    }

   
});


app.listen(port, ()=>{
    console.log('Server is started at this port: ' + port);
});