const myMenu=document.querySelector(".header__menu-mobile");
const myOpenBtn=document.querySelector(".menu-open-btn");
const myCloseBtn=document.querySelector(".menu-close-btn");




myOpenBtn.addEventListener("click",()=>{
myMenu.classList.add("come-left");

myOpenBtn.classList.add("hide");
myCloseBtn.style.display="block";



});


myCloseBtn.addEventListener("click",()=>{
    myMenu.classList.remove("come-left");
    myCloseBtn.style.display="none";
    myOpenBtn.classList.remove("hide");
    
  


});

