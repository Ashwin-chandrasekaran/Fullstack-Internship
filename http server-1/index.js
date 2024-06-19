const express=require('express');
const app=express();
const port=3000;
function sumofNnumbers(n){
    let sum=0;
    for(let i=0;i<=n;i++){
        sum=sum+i;
    }
    return sum;
}
app.get('/',(req,res)=>{
    const n=req.query.n;
    const ans=sumofNnumbers(n);
    res.send(ans.toString())
})
app.listen(port,()=>{
    console.log("app is listening on port 3000")
})