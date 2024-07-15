const express=require("express")
const zod=require("zod")
const signup=zod.object({
    firstname:zod.string(),
    lastname:zod.string(),
    username:zod.string(),
    password:zod.string()

})
const signin=zod.object({
    username:zod.string(),
    password:zod.string()
})
const updatebody=zod.object({
    password:zod.string().optional(),
    firstname:zod.string().optional(),
    lastname:zod.string().optional()
})
module.exports={
    signup,
    signin,
    updatebody
}