// const func=()=>{
//     const product=fetch("https://dummyjson.com/products")
//     product.then(res=>console.log(res.json)).then(json=>console.log(json))
// }
// func()
// const app=()=>{
//     const product=fetch('https://dummyjson.com/products')
//     product.then(res => res.json())
//     .then(json => console.log(json))
            
// }
// app()
// const app = () => {
//     const product = fetch('https://dummyjson.com/products');
//     product
//       .then(res => {
//         return res.json(); // Return the promise from res.json()
//       })
//       .then(json => {
//         console.log(json); // This logs the resolved JSON data
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   };
  
//   app();
const app=async()=>{
    setTimeout(async function(){
        const product=await fetch("https://dummyjson.com/products")
        const data=await product.json()
        console.log(data)
    },5000)
    console.log("ashwin")

}
app()  