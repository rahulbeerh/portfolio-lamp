const btn=document.querySelector('button.menu');
const btnClose=document.querySelector('.close-container');
btn.addEventListener('click',function(){
    const mobileNavigation=document.querySelector(".mobile-navigation");
    mobileNavigation.style.transform = "translateX(0rem)";
})

btnClose.addEventListener('click',function(){
    const mobileNavigation=document.querySelector(".mobile-navigation");
    mobileNavigation.style.transform = "translateX(200rem)";
})
