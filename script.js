var maxbutton=document.querySelector(".bt");
var minbutton=document.querySelector(".minbt");


var flag=false;
const textarea=document.querySelector(".text")
document.querySelector(".bt").addEventListener('click',function(){
    console.log("pressed");
    if(flag)
    {
        textarea.setAttribute("rows",30);
     textarea.setAttribute("cols",60);
     maxbutton.innerHTML="maximize";
     flag=false;
     

    }
    else if(!flag){
        textarea.setAttribute("rows",50);
     textarea.setAttribute("cols",150);
    maxbutton.innerHTML="minimize"
    flag=true;
    }
    
})
function hide(c) {
	//document.getElementsByClassName(c).style.display = "none";
    document.querySelector(".bt").style.display="none";
}
function show(c) {
	document.querySelector(".minbt").style.display="left";
}