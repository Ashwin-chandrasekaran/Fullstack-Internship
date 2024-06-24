const zod=require("zod")
const createtodo=zod.object({
    name:zod.string(),
    description:zod.string()
})
const updatetodo=zod.object({
    id:zod.string()
})
module.exports={
    createtodo,
    updatetodo
}