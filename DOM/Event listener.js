 for(let i=0;i<3;i++){
    document.querySelectorAll(".Mybutton")[i].addEventListener("click",function (){
    let text=this.innerHTML;
    document.querySelector("#paragraph").innerHTML=text+" is clicked";
});
 }