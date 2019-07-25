const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.set('view engine', 'ejs');

const port = process.env.PORT || 3000;

var itemAdd=[];
var emails=[];
var date=[];
var time=[];

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
    res.render('list', {todaynow: dateToString, items: itemAdd});
   
});

app.post('/', (req,res)=>{
    
    var item = req.body.item;
    var emails = req.body.email;
    var date = req.body.date;
    var time = req.body.time;
    
    itemAdd.push(item, emails,date,time);

    res.redirect('/');

    emails.push(emails);
    date.push(date);
    time.push(time);

    module.exports={items,emails,date,time};
 
});


app.listen(port, ()=>{
    console.log('Server is started at this port: ' + port);
});