document.querySelector(".img").addEventListener("click" , function (){
    var rn = "image/"+ Math.floor(Math.random() * 9) + ".png";
    document.querySelector("img").src = rn;
});
document.onkeydown= function(){
    var rn = "image/"+ Math.floor(Math.random() * 9) + ".png";
    document.querySelector("img").src = rn;
}



