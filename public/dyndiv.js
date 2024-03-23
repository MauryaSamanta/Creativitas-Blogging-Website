function addDiv(){
    let parent=document.getElementById("parent");
let newBox=document.createElement("div");
newBox.id="box";
parent.appendChild(newBox);
console.log("entered");
}