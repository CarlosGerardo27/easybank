'use strict'
var facebook = document.getElementById("facebook");
var youtube = document.getElementById("youtube");
var twitter = document.getElementById("twitter");
var pinterest = document.getElementById("pinterest");
var instagram = document.getElementById("instagram");



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

