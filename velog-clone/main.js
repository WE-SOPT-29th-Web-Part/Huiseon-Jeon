"use strict";

//dropdown
const menuOptionsData = document.querySelector(".menu__options-date");
const menuDropdown = document.querySelector(".menu__dropdown");

menuOptionsData.addEventListener("click",()=>{
    if(menuDropdown.style.visibility == "hidden"){
        menuDropdown.style.visibility = "visible";
        return;
    }
    menuDropdown.style.visibility = "hidden";
});

menuDropdown.addEventListener("click",(e)=>{
    Array.from(menuDropdown.children).forEach((element) => {
        element.classList.remove("active");
    });
    e.target.classList.add("active");
});