const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');

const port = process.env.PORT || 3000;

var today = new Date();
// var currentDay = today.getDay();
var options={
    weekday: 'long',
    month: 'long',
    year: 'numeric',
    day:'numeric'
};

var dateToString = today.toLocaleDateString('en-US', options);

app.get('/', (req, res)=>{
    //Another Way
    res.render('list', {todaynow: dateToString});
   
});

app.post('/', (req,res)=>{
    
    var postedItem = req.body.item;
    console.log(postedItem);
    // res.render('list', {itemadd : postedItem});
});


app.listen(port, ()=>{
    console.log('Server is started at this port: ' + port);
});