var audio = document.getElementById("bgMusic");
var img = document.querySelector(".img2");
var sound = document.querySelector(".sound");
var count = 0;

img.addEventListener("click" , function (){
    var rn = "image/"+ Math.floor(Math.random() * 9) + ".png";
    img.src = rn;
    audio.play();
});

sound.addEventListener("click", function(){
    audio.pause();
})

// document.onkeydown= function(){
//     if (count = 0){
//         audio.play();
//         count = 1;
//     }
//     if (count = 1){
//         audio.pause();
//         count = 0;
//     }
// }



