window.onclick = function()
{
    console.log('der scrolles  vistnok');
    var blooper = document.getElementById("myVideo");    
    if(blooper.getBoundingClientRect().bottom <= 50 || blooper.getBoundingClientRect().top > 100)
       blooper.pause();   
   else  
       blooper.play();

}

window.onscroll = function()
{
    console.log('der scrolles  vistnok');
    var blooper2 = document.getElementById("myVideo2");    
    if(blooper2.getBoundingClientRect().bottom <= 50 || blooper2.getBoundingClientRect().top > 100)
       blooper2.pause();   
   else  
       blooper2.play();

}



