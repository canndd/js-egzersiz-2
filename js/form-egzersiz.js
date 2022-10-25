let userFormDOM= document.querySelector("#userForm");
userFormDOM.addEventListener("submit",formHandler);


const ALERT=`<div class="alert alert-warning alert-dismissible fade show" role="alert">
<strong>Holy guacamole!</strong> You should check in on some of those fields below.
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
</div>`

function formHandler(event){
    event.preventDefault()
    const USER_NAME=document.querySelector("#username");
    const SCORE=document.querySelector("#score");
    addItem(USER_NAME.value , SCORE.value)
}
let ListDOM=document.querySelector("#userList");
const addItem = (username,score) =>{
    let liDOM=document.createElement("li")
    liDOM.innerHTML=`${username} <span class="badge badge-primary badge-pill">${score}</span> `
    liDOM.classList.add("list-group-item","d-flex","justify-content-between","align-items-center")
    ListDOM.append(liDOM)
}


