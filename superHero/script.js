const token='102867536037557'
const base_url=`https://superheroapi.com/api.php/${token}`
const getnewhero=document.getElementById('newHeroButton')
const image=document.getElementById('heroImage')
const typebutton=document.getElementById('searchButton')
const typesearch=document.getElementById('searchInput')
typebutton.onclick=()=>search(typesearch.value)
getnewhero.onclick=()=>randomsuperhero(random())
const random=()=>{
    const numberofheros=731
    return Math.floor(Math.random()*numberofheros)+1
}
const randomsuperhero=(id)=>{
    fetch(`${base_url}/${id}`).
    then(response=>response.json()).
    then(json=>{
        typesearch.value=""
        const power=json
        showsuperhero(power)
    })
}
const search=(name)=>{
    fetch(`${base_url}/search/${name}`).
    then(response=>response.json()).
    then(json=>{
        console.log(json)
        const hero=json.results[0]
        console.log(hero)
        showsuperhero(hero)
    })
}
const emojis={
    intelligence : '🧠',
    strength : ':💪',
    speed : '⚡',
    durability:'🏋️',
    power : '👊',
    combat:'⚔️'

}
const showsuperhero=(power)=>{
    const name=`<h2>${power.name}</h2>`
    const imghero=`<img src="${power.image.url}" height=300 width=300/>`
    const herodisplay=Object.keys(power.powerstats).map(stat=>{
        return `<p>${emojis[stat]} ${stat.toUpperCase()}: ${power.powerstats[stat]}</p>`

    }).join(' ')
    image.innerHTML=`${name} ${imghero} ${herodisplay}`
    console.log(`${name} ${imghero} ${herodisplay}`)



}