const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the 'public' directory
//app.use(express.static(path.join(__dirname, '../public')));
// const templet=path.join(__dirname, '../templet');
app.set('view engine','hbs');
// app.set('views',templet)
app.get("/",(req,res)=>{
    res.render('index',{
        college:"comopucom"
    })
})
app.get("*",(req,res)=>{
    res.render('404')
})
// No need for explicit route handler for '/'
// Express will serve index.html automatically from the 'public' directory

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
