const mongoose = require('mongoose');

const connectdb=(url)=>{
    return mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true,
        useFindAndModify: false, })
}
module.exports=connectdb


  

// Rest of your code...
