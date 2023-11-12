var img = document.querySelector(".img2");
var sound = document.querySelector(".sound");
var audio = document.getElementById("bgMusic");
var shang = document.querySelector(".fanye .shang");
var xia = document.querySelector(".xia")
var dian = document.querySelector(".fanye").querySelectorAll("p")[count + 1];
var count = 0;

shang.addEventListener("click" , function (){
    if (count == 0){
        count = 10;
        img.src =  "image/"+ count + ".png";
        dian.innerText="0";
        dian.classList.add("dadian");
    }else{
        count -= 1
        img.src = "image/"+ count + ".png";
    }
});

xia.addEventListener("click" , function (){
    if (count == 10){
        count = 0;
        img.src =  "image/"+ count + ".png";
    }else{
        count += 1;
        img.src = "image/"+ count + ".png";
    }
});

sound.addEventListener("click", function(){
    if (audio.paused){
        audio.play(); 
    }
    else{
        audio.pause();
    }
})

