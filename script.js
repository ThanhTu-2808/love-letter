const story = [
    "Có một điều...",
    "Anh đã muốn nói với em từ rất lâu rồi.",
    "Mỗi lần gặp em...",
    "Anh đều thấy ngày hôm đó trở nên vui hơn.",
    "Anh đã nhiều lần định nói...",
    "Nhưng rồi lại thôi.",
    "Anh sợ...",
    "Sợ rằng nếu nói ra thì mọi thứ sẽ khác.",
    "Nhưng hôm nay...",
    "Anh không muốn bỏ lỡ cơ hội nữa.",
    "Anh thích em rất nhiều.",
    "Em đồng ý làm người yêu anh nhé? ❤️"
    ];
    
    const typing = document.getElementById("typing");
    const music = document.getElementById("bgm");
    
    let index = 0;
    
    document.getElementById("startBtn").onclick = () => {
    
        music.play();
    
        document.getElementById("startScreen").style.display = "none";
    
        startEffects();
    
        nextStory();
    
    };
    
    function nextStory(){
    
        if(index >= story.length) return;
    
        typeWriter(story[index],()=>{
    
            index++;
    
            setTimeout(nextStory,2000);
    
        });
    
    }
    
    function typeWriter(text,callback){
    
        typing.innerHTML="";
    
        let i=0;
    
        const timer=setInterval(()=>{
    
            typing.innerHTML+=text.charAt(i);
    
            i++;
    
            if(i>=text.length){
    
                clearInterval(timer);
    
                callback();
    
            }
    
        },55);
    
    }
    function startEffects(){

        setInterval(createHeart,700);
    
        setInterval(createPetal,350);
    
    }
    
    function createHeart(){
    
        const heart=document.createElement("div");
    
        heart.className="heart";
    
        const hearts=["❤️","🩷","💖","💕"];
    
        heart.innerHTML=hearts[Math.floor(Math.random()*hearts.length)];
    
        heart.style.left=Math.random()*100+"vw";
    
        heart.style.animationDuration=(4+Math.random()*3)+"s";
    
        document.body.appendChild(heart);
    
        setTimeout(()=>{
    
            heart.remove();
    
        },7000);
    
    }
    
    function createPetal(){
    
        const petal=document.createElement("div");
    
        petal.className="petal";
    
        const petals=["🌸","🌷","🌺","💮","🌼"];
    
        petal.innerHTML=petals[Math.floor(Math.random()*petals.length)];
    
        petal.style.left=Math.random()*100+"vw";
    
        petal.style.animationDuration=(6+Math.random()*5)+"s";
    
        petal.style.fontSize=(18+Math.random()*18)+"px";
    
        document.body.appendChild(petal);
    
        setTimeout(()=>{
    
            petal.remove();
    
        },11000);
    
    }
    const photos=document.querySelectorAll(".polaroid");

photos.forEach((photo,index)=>{

setTimeout(()=>{

photo.style.transition="1.2s";

photo.style.opacity="1";

if(photo.classList.contains("p1")){

photo.style.left="40px";

}

if(photo.classList.contains("p2")){

photo.style.right="40px";

}

if(photo.classList.contains("p3")){

photo.style.left="40px";

}

if(photo.classList.contains("p4")){

photo.style.right="40px";

}

},index*800);

});