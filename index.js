var img = document.querySelector(".img2")

img.addEventListener("click" , function (){
    var rn = "image/"+ Math.floor(Math.random() * 9) + ".png";
    img.src = rn;
});
// document.onkeydown= function(){
//     var rn = "image/"+ Math.floor(Math.random() * 9) + ".png";
//     document.querySelector(".img2").src = rn;
// }



