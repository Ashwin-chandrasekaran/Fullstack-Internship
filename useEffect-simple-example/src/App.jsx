import React, { useState, useEffect } from "react";

function App() {
  const [exchangeData, setExchangeData] = useState({ returns: 0 });
  const [bankData, setBankData] = useState({ income: 0 });


  useEffect(() => {
    const exchangeTimeout = setTimeout(() => {
      setExchangeData({ returns: 200 });
      console.log("re-render");
    }, 3000);

    return () => clearTimeout(exchangeTimeout);
  }, []);

  useEffect(() => {
    const bankTimeout = setTimeout(() => {
      setBankData({ income: 200 });
      console.log("re-render");
    }, 1000);

    return () => clearTimeout(bankTimeout);
  }, []);

  const totalIncome = (exchangeData.returns + bankData.income) * 0.3;
  console.log("Total income: ", totalIncome);

  return (
    <div>Total income: {totalIncome}</div>
  );
}

export default App;
