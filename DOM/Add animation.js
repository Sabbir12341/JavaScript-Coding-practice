for(let i=0;i<3;i++){
    document.querySelectorAll(".Mybutton")[i].addEventListener("click",function (){
    let text=this.innerHTML;
    playAnimation(text);
    });
}

function playAnimation(text){
    let myVar=document.querySelector("."+text);

    myVar.classList.add("anim");
    
    setTimeout(function (){
            myVar.classList.remove("anim");
    },1000);
}