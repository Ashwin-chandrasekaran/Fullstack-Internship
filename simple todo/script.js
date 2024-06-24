let globalId=1;
function markasDone(id){
    const child=document.getElementById(id);
    child.children[2].innerHTML="Done"
}
function createchild(title,description,id){
    const child=document.createElement("div")
    const grandchild1=document.createElement("div")
    grandchild1.innerHTML=title;
    const grandchild2=document.createElement('div')
    grandchild2.innerHTML=description
    const grandchild3=document.createElement("button")
    grandchild3.innerHTML="Mark as Done"
    grandchild3.setAttribute("onclick",`markasDone(${id})`)
    child.appendChild(grandchild1)
    child.appendChild(grandchild2)
    child.appendChild(grandchild3)
    child.setAttribute("id",id)
    return child
}
function addData(){
    const parent=document.getElementById("container")
    let title=document.getElementById("title").value
    let description=document.getElementById("description").value
    parent.appendChild(createchild(title,description,globalId++))
    document.getElementById("title").value=''
    document.getElementById("description").value=''
}