const mongoose = require('mongoose');

 async function connectToDB(uri){
  await mongoose.connect(uri)
  console.log("connected to DB")
}
    module.exports= {connectToDB};