

document.addEventListener('DOMContentLoaded',function(){

    // Navigation Bar

    let nav = document.getElementsByTagName('nav')[0];
    let prevY = 0 , height = nav.offsetHeight , currentY;

    const movingNav = () => {

        currentY = window.scrollY;

        if(currentY > 100 && prevY < currentY){
            prevY = currentY;
            nav.setAttribute('style',`top:-${height}px`);
        }
    
        else if(currentY > 100 && prevY > currentY){
            prevY = currentY;
            nav.setAttribute(`style`,`top:0px`);
        }

        else if(currentY < 100){
            nav.setAttribute(`style`,`top:0px`);
        }

    }

    // Back to top Button

    let topBtn = document.getElementById('back-top');

    const backToTopVisibility = () => {
        if(window.scrollY >= 700){
            topBtn.setAttribute('style','display:inline-block');
        }
        else{
            topBtn.removeAttribute('style');
        }
    }

    //Binding Events

    window.addEventListener('scroll',()=>{
        movingNav();
        backToTopVisibility();
    });

    window.addEventListener('load',()=>{
        movingNav();
        backToTopVisibility();
    });


});

