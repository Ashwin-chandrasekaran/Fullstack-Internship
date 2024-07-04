import {atom, selector} from "recoil"
export const allbuttonsatom=atom({
    key:"allbuttonsatom",
    default:{
        network:0,
        jobs:0,
        messaging:0,
        notifications:0
    }
})
export const totalnotification=selector({
    key:"totalnotification",
    get:({get})=>{
        const notifications1=get(allbuttonsatom)
        return  notifications1.network + notifications1.notifications + notifications1.messaging + notifications1.jobs
    }
})
