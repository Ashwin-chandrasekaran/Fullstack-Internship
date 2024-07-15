const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://ashwin8248:Ashwin007%23@nodeexpresscourse.izryu5r.mongodb.net/paytm-user")
const UserSchema=new mongoose.Schema({
    firstname:String,
    username:String,
    lastname:String,
    password:String
})
const AccountSchema=new mongoose.Schema({
    userId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,

    },
    balance:{
        type:Number,
        required:true
    }

})
const User=mongoose.model('User',UserSchema)
const Account=mongoose.model('Account',AccountSchema)
module.exports={
    User,
    Account
}