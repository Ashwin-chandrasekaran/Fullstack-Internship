const express=require("express");
const app=express();
const users=[{
    name:"john",
    kidneys:[{
        healthy:false
    }]
}]
app.use(express.json())
app.get('/',(req,res)=>{
    const johnkidneys=users[0].kidneys;
    const numberofjohnkidneys=johnkidneys.length;
    let numberofhealthykidneys=0
    numberofhealthykidneys=johnkidneys.filter(kidney=>kidney.healthy==true).length;
    let numberofunhealthykidneys=numberofjohnkidneys-numberofhealthykidneys;
    res.json({
        numberofkidneys:numberofjohnkidneys,
        numberofhealthykidneys:numberofhealthykidneys,
        numberofunhealthykidneys:numberofunhealthykidneys
    })

})
app.post('/',(req,res)=>{
    const isHealthy=req.body.isHealthy;
    users[0].kidneys.push({healthy:isHealthy});
    res.json({msg: "done"})
})
app.put('/',(req,res)=>{
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true;
    }
    res.json({
    })
})
app.delete('/',(req,res)=>{
    if(isThereAtleastoneunhealthykidney()){
        const arrhealthy=[];
        for(let i=0;i<users[0].kidneys.length;i++){
            if(users[0].kidneys[i].healthy==true){
                arrhealthy.push({
                    healthy:true
                })
            }
        }
        users[0].kidneys=arrhealthy;
        res.json({
            msg:"done"
        })
    }else{
        res.status(411).json({
            msg:"you dont have a bad kidney"
        })
    }
})
function isThereAtleastoneunhealthykidney(){
    let unhealthykidneys=false;
    for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            unhealthykidneys=true;
        }
    }
    return unhealthykidneys;
}
app.listen(3000,()=>{
    console.log("port 3000 is listening")
})
