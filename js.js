$(document).ready(function(){
    $('.slider').slick({
        autoplaySpeed:3000,
        autoplay:true
    });
});
document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("katalogbutton").addEventListener("click", function(){
        document.querySelector("header").classList.toggle("open")
    })
})
