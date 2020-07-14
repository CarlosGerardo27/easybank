'use strict'
var facebook = document.getElementById("facebook");
var youtube = document.getElementById("youtube");
var twitter = document.getElementById("twitter");
var pinterest = document.getElementById("pinterest");
var instagram = document.getElementById("instagram");
var mobileBg = document.getElementById("mobile")
var menum_button=document.getElementById("menum-button__container")
var menuMobile = document.getElementById("menu-mobile")
var menuMobileWrapper= document.getElementById("menu-mobile-wrapper")
var closeButton = document.getElementById("close")
var menu_icon = document.getElementById("menu-icon")



//***********colores hover para iconos de redes sociales

facebook.addEventListener("mouseover",function(){
    facebook.style.fill="#2BB7DA"
})
facebook.addEventListener("mouseleave",function(){
    facebook.style.fill="#fff"
})

youtube.addEventListener("mouseover",function(){
    youtube.style.fill="red"
})
youtube.addEventListener("mouseleave",function(){
    youtube.style.fill="#fff"
})

twitter.addEventListener("mouseover",function(){
    twitter.style.fill="#2BB7DA"
})
twitter.addEventListener("mouseleave",function(){
    twitter.style.fill="#fff"
})

pinterest.addEventListener("mouseover",function(){
    pinterest.style.fill="red"
})
pinterest.addEventListener("mouseleave",function(){
    pinterest.style.fill="#fff"
})

instagram.addEventListener("mouseover",function(){
    instagram.style.fill="pink"
})
instagram.addEventListener("mouseleave",function(){
    instagram.style.fill="#fff"
})


//*************** menu mobile toggle */

menum_button.addEventListener("click",function(){
    if(menuMobileWrapper.classList.contains("hide")){
        menuMobileWrapper.classList.remove("hide")
        console.log("menu mobile active")
    }else{
        menuMobileWrapper.classList.add("hide")
        console.log("menu mobile inactive")
    }
    if(closeButton.classList.contains("hide")){
        closeButton.classList.remove("hide")
        menu_icon.classList.add("hide")
    }else{
        closeButton.classList.add("hide")
        menu_icon.classList.remove("hide")
    }
})