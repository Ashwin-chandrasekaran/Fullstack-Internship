const express=require("express")
const app=express()
const cors=require("cors")
// app.use(cors())
const corsOptions = {
    origin: 'http://localhost:5173', // Replace with your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  };
  
  app.use(cors(corsOptions));
  app.options('*', cors(corsOptions));
  
app.use(express.json())
const port=3000;
const mainRouter=require("./routes/index")
app.use("/api/v1",mainRouter)

app.listen(port,()=>{
    console.log("port 3000 is listening")
})