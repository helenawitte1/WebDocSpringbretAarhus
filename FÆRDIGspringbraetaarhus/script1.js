
window.onscroll = function()
{
    var blooper = document.getElementById("myVideo");    
    
   
    if(blooper.getBoundingClientRect().bottom < 250 || blooper.getBoundingClientRect().top > 250)
       blooper.pause();   
   else  
       blooper.play();

} 
