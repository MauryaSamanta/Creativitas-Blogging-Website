let username;
do{
    username=prompt("Enter your name..");
}while(!username);
const text=document.querySelector(".textarea");
const button=document.querySelector(".sub-btn");
const combox=document.querySelector(".com-sec");
button.addEventListener("click", (e)=>{
    let comment=text.value;
    if(!comment){
        return;
    }
    postComment(comment);
})
function postComment(comment){
    let data={
        username:username,
        comment:comment
    }
    appendtoDOM(data);
}
function appendtoDOM(data){
    let lTag=document.createElement("li");
    lTag.classList.add("comment","mb-3");
    let markup= <div class="card">
        <h6>${data.username}</h6>
        <p>${data.comment}</p>
    </div>
    lTag.innerHTML=markup;
    combox.prepend(lTag);
}