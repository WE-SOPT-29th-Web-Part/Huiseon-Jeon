"use strict";
//엄격모드

const inputs = document.querySelectorAll(".todos__input");
const addBtns = document.querySelectorAll(".todos__add");
const allItems = document.querySelectorAll(".todos__items");

//보통 화살표 함수로 사용함
addBtns.forEach((btn,index) => {
    btn.addEventListener("click",() => {
        onAdd(index);
    });
});

inputs.forEach((input,index) => {
    input.addEventListener("keyup", (e) => {
        if(e.key==="Enter"){
            onAdd(index);
        }  
    });
});

const onAdd = (index) =>{
    if(!inputs[index].value) return;
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");
    
    li.setAttribute("class", "todos__item");
    span.setAttribute("class", "todos__name");
    deleteBtn.setAttribute("class", "todos__delete");

    deleteBtn.innerText = "X";
    const checkBoxStr = "<input type='checkbox'>"+inputs[index].value+"</input>";
    span.innerHTML = checkBoxStr;
        
    li.appendChild(span);
    li.appendChild(deleteBtn);
    allItems[index].appendChild(li);

    inputs[index].value = "";

    deleteBtn.addEventListener("click", () => {
        li.remove();
    });
}

const nav = document.querySelector(".options");
const todos = document.querySelectorAll(".todos > section");

nav.addEventListener("click",(event) => {
    if(event.target.className.includes("options__today")){
        todos[0].classList.add("open");
        todos[1].classList.remove("open");
    }else if(event.target.className.includes("options__tomorrow")){
        todos[1].classList.add("open");
        todos[0].classList.remove("open");
    }else if(event.target.className.includes("options__both")){
        todos[1].classList.add("open");
        todos[0].classList.add("open");
    }
});

