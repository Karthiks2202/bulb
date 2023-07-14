function change(){
    var img=document.getElementById("i1");
  
    if(img.src.match("./assests/bulboff.png")){
      img.src="./assests/lighton.png";
    }else{
      img.src="./assests/bulboff.png";
    }
   }