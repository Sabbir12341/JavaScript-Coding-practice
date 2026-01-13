let id=document.getElementById("picture");
let count=0;
let photos=["images/client.jpg","images/sabbir.jpg"];
function next(){
    count++;
    if(count>=photos.length){
        count=0;
        id.src=photos[count];
    }
   else{
     id.src=photos[count];
   }
}

function prev(){
    count--;
    if(count<0){
        count=photos.length-1;
        id.src=photos[count];
    }
   else{
     id.src=photos[count];
   }
}