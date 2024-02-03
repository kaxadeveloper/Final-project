let burger = document.querySelector(".burger");
let xmark = document.querySelector(".xmark");
let mobilMenu = document.querySelector(".header_nav");


burger.addEventListener("click", ()=>{
    mobilMenu.classList.add("show");
    burger.style.display = "none";
    xmark.style.display = "block";
})

xmark.addEventListener("click", ()=>{
    mobilMenu.classList.remove("show");
    burger.style.display = "block";
    xmark.style.display = "none";
})