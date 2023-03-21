let preloader = document.getElementById("preloader");
let body=document.getElementById("show")
window.addEventListener("load",hideLoader);

function hideLoader(){


    body.style.display="none";
    setTimeout(() => {
        preloader.style.display="none";
        body.style.display="block";
    },1000);
    
    
}