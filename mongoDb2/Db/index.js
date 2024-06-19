const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://ashwin8248:Ashwin007%23@nodeexpresscourse.izryu5r.mongodb.net/course_sellingApp")
const AdminSchema=new mongoose.Schema({
    username:String,
    password:String
})
const UserSchema=new mongoose.Schema({
    username:String,
    password:String,
    purchasedCourse:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'course'
    }]
})
const courseSchema=new mongoose.Schema({
    title:String,
    description:String,
    imageLink:String,
    price:Number
})
const Admin=mongoose.model('Admin',AdminSchema)
const User=mongoose.model('User',UserSchema)
const Course=mongoose.model('Course',courseSchema)
module.exports={
    Admin,
    User,
    Course
}