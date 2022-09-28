const express = require('express');
const app = express();

const path = require('path')

const staticPath = path.join(__dirname, 'public');
app.use(express.static(staticPath))

// app.use('/', function(req, res, next){
//     // res.sendFile('index')
//     next();
// });



app.get('/', (req, res) => {
    console.log('Here') 
    // res.sendFile("Hello Express -- HomePage") 
    res.sendFile('index')
});

app.get('/about', (req, res) => {
    console.log('Here') 
    res.send("Hello Express -- AboutPage") 
});

app.listen(3000, () => {
    console.log("Port is runing")
});
