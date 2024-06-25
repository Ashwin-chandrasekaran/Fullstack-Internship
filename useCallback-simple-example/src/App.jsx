import React, {useState,useEffect,useMemo,useCallback,memo} from "react"
function App(){
  const [exchangeData1,setExchangeData1]=useState({returns:0})
  const [exchangeData2,setExchangeData2]=useState({returns:0})
  const [bankData,setBankData]=useState({income:0})
  useEffect(()=>{
    setTimeout(()=>{
      setExchangeData1({returns:200})
    })
  },[])
  useEffect(()=>{
    setTimeout(()=>{
      setExchangeData2({returns:300})
    },2000)
  },[])
  useEffect(()=>{
    setTimeout(()=>{
      setBankData({income:400})
    },8000)
  },[])
  const totalexchangereturns=useCallback(()=>{
    return exchangeData1.returns + exchangeData2.returns
  },[exchangeData1,exchangeData2])
  const totalIncome=totalexchangereturns+bankData.income
  return(
    <div>
      <Totalexchangereturns totalexchangereturns={totalexchangereturns} />
    </div>
  )
}
const Totalexchangereturns=memo(({totalexchangereturns})=>{
  console.log("called")
  return <div>
    your total cryptoreturns {totalexchangereturns()}
  </div>
})
export default App
