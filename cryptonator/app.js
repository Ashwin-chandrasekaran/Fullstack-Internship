const form=document.querySelector('#searchform');
const res=document.querySelector("#resTable");
const cont=document.getElementById("allcontaint");
let intervalId;
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const ctype=form.elements.cointype.value;
    console.log(ctype)
    if (intervalId) {
        clearInterval(intervalId);
    }

    // Start the interval after the initial fetch
    intervalId=setInterval(() => {
        fetchPrice(ctype);
    }, 10000);
    fetchPrice(ctype);
    
});
const fetchPrice=async(ctype)=>{
    try{
        const r=await fetch(`https://api.coingecko.com/api/v3/coins/${ctype}`);
        const data = await r.json();
        console.log(data.market_data.current_price.usd)
        console.log(data.market_data.price_change_24h)
        console.log(data.market_data.total_volume.usd)
        showprice(data)
    }catch (error) {
    console.error('Error fetching cryptocurrency details:', error.message);
    }
}

const showprice=(data)=>{
    const vol=data.market_data.total_volume.usd;
    const change=data.market_data.price_change_24h;
    const current=data.market_data.current_price.usd;
    const coin_name=data.name;
    const unit="usd";
    var col='green';
    if(change<0){
        col='red'
    }
    res.innerHTML=`<tr>
    <td>Property</td>
    <td>Value</td>
</tr>
<tr>
    <td>${coin_name}</td>
    <td style="color:${col}"><span style="font-size:1.3em;">${current}</span> ${unit}</td>
</tr>
<tr>
    <td>Volume (24hrs)</td>
    <td>${vol}</td>
</tr>
<tr>
    <td>Change (24hrs)</td>
    <td style="color:${col}"><span style="font-size:1.3em;">${change}</span> ${unit}</td>
</tr>`


}
