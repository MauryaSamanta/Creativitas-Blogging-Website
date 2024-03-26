
const textarea=document.querySelector(".textarea");
const sub=document.querySelector(".sub-btn");

sub.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("Hello");
    let username

do{
    username=prompt("Enter your name");
}while(!username)
    let comment=textarea.value;
    if(!comment){
        return;
    }
    let data={
        username:username,
        comment:comment
    }
    postComment(data);
})
function postComment(data){
   
     appendToDom(data); 
}
function appendToDom(data){
    let ltag=document.createElement("li");
    ltag.classList.add("comment");
    const commentBox=document.querySelector(".comment_box");
    let markup=`<div class="card">
    <h6>${data.username}</h6>
    <p>${data.comment}</p>
    </div>`
    ltag.innerHTML=markup;
    commentBox.prepend(ltag);
}