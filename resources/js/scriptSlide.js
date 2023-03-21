let slideNumber = 0;
showSlide();

function showSlide(){
    let slides = document.getElementsByClassName("slide");

    for (let i=0;i<slides.length;i++){
        slides[i].style.display="none";

    }
    slideNumber+1>=slides.length ? slideNumber=0:slideNumber++;
    slides[slideNumber].style.display="block";

    setTimeout(showSlide,7000);
}



