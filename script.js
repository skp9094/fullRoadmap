const inputList = document.querySelector("#input_list");
const inputItems = document.querySelector("#input_items");
const form = document.querySelector("form");
const todoText = document.querySelector("#todoText");

form.addEventListener("submit",formEv);
function formEv(e){
    e.preventDefault();
    const todoTextValue = todoText.value;
    let creEle = document.createElement("li");
    creEle.setAttribute("class","#input_items")
    let innhtml  = creEle.innerHTML = `<span class="spanText">${todoText.value}</span>
    <button class="edit">Edit</button>
    <button class="delet">Delet</button>`;
    inputList.appendChild(creEle);
    // let spanText = document.querySelector(".spanText");
    // // let spaninnText = spanText.textContent;
    // spanText.innerText = todoText.value;
    // // console.log(spanText);
    todoText.value = ""
}
// inputList.classList.contains

inputList.addEventListener("click", function(e){
    let liTar = e.target;
    if(liTar.classList.contains("edit")){
        let spanText = document.querySelector(".spanText");
       
       todoText.value = spanText.innerText ;
       let subBtn = document.querySelector("#subBtn");
    //    form.removeEventListener("submit",formEv)
    //    subBtn.addEventListener("click",function(e){
           e.preventDefault();
           spanText.innerText  = todoText.value;
            console.log(spanText.innerText );

        // })
    }
});
