var img = document.querySelector(".img2");
var sound = document.querySelector(".sound");
var audio = document.getElementById("bgMusic");

audio.play();

img.addEventListener("click" , function (){
    var rn = "image/"+ Math.floor(Math.random() * 11) + ".png";
    img.src = rn;
});

sound.addEventListener("click", function(){
    if (audio.paused){
        audio.play(); 
    }
    else{
        audio.pause();
    }
})

