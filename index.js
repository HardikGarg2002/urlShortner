const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const urlRoute= require("./routes/url")
const connect = require('./utils/dbUtils')
app.use(express.json());
app.get('/',(req,res)=>{
    console.log("In home page");
});
connect.connectToDB('mongodb://127.0.0.1:27017');
app.use('/url',urlRoute);

app.listen(PORT,()=>{
    console.log("listening at port no.",PORT);
})