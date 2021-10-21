var openmenu= document.querySelector(".open-menu");
var closemenu= document.querySelector(".close-menu");
var menu= document.querySelector(".nav-menu");
var navlinks= document.querySelectorAll(".nav-box .nav-list");
openmenu.onclick =function(){
    menu.style.left="0";
}
closemenu.onclick =function(){
    menu.style.left="-100%";
}

navlinks.forEach(navlink =>{
    navlink.addEventListener("click",()=>{
        menu.style.left="-100%";
    });
});

