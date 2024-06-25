import React, {useState,useEffect,useMemo} from "react"
function App(){
  const [exchangeData1,setExchangeData1]=useState({returns:0})
  const [exchangeData2,setExchangeData2]=useState({returns:0})
  const [bankData,setBankData]=useState({income:0})
  useEffect(()=>{
    setTimeout(()=>{
      setExchangeData1({returns:200})
    },3000)
  },[])
  useEffect(()=>{
    setTimeout(()=>{
      setExchangeData2({returns:300})
    },4000)
  },[])
  useEffect(()=>{
    setTimeout(()=>{
      setBankData({income:400})
    },8000)
  },[])
  console.log("re-rendering")
  const totalexchangereturns=useMemo(()=>{
    return exchangeData1.returns+exchangeData2.returns
  },[exchangeData1,exchangeData2])
  const totalIncome=totalexchangereturns+bankData.income
  return(
    <div>
      totalIncome is {totalIncome}
    </div>
  )
}
export default App
