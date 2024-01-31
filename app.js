const connectdb=require('./db/connect')
const express=require('express')
const app=express()
const task=require('./routes/tasks')
const notfound = require('./middleware/not-found')
const errorhandlermiddleware=require('./middleware/error-handler')
require('dotenv').config()
app.use(express.static('./public'));
app.use(express.json())
app.use('/api/v1/tasks',task)
// app.use((req, res, next) => {
//     console.log(`Incoming request: ${req.method} ${req.url}`);
//     next();
//   });
app.use(errorhandlermiddleware)
app.use(notfound)

const port=process.env.PORT || 3000
const start=async ()=>{
    try{
        await connectdb(process.env.MONGO_URI)
        app.listen(port,(req,res)=>{
            console.log(`Server is listening on port ${port}`)
        })
    }catch(err){
        console.log(err);
    }
}
start()


