"use strict";

//dropdown 구현
const menuOptionsData = document.querySelector(".menu__options-date");
const menuDropdown = document.querySelector(".menu__dropdown");
const menuOptionsText = document.querySelector(".menu__options-text");
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
    menuOptionsText.innerText = e.target.innerText;
});

//modal창 구현
const articles = document.querySelectorAll(".article");
const modal = document.querySelector(".modal");
const modalWrap = document.querySelector(".modal__wrap");
const modalClose = document.querySelector(".modal__close");
let isModal = false;

//article을 클릭하면 모달창이 팝업
const showModal = (e) => {
    modal.style.visibility = "visible";
    document.body.style.overflow="hidden";

    if(isModal === false){
        const clickArticle = e.target.closest(".article");
        const closeIC = document.createElement("img");
    
        closeIC.setAttribute("src","./icon/x-circle.svg");
        closeIC.className="modal__close";
        closeIC.addEventListener("click",removeModal);

        modalWrap.appendChild(clickArticle);
        modalWrap.appendChild(closeIC);
        
        //모달창 중복 구현 방지
        isModal = true;
    }  
}

articles.forEach(article=>{
    article.addEventListener("click",showModal);
})

//X클릭하면 모달창 꺼짐
const removeModal = () => {
    modalWrap.removeChild(modalWrap.lastChild);
    modalWrap.removeChild(modalWrap.lastChild);

    modal.style.visibility = "hidden";
    document.body.style.overflow = "visible";

    isModal = false;
}