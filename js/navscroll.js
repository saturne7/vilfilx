window.addEventListener('scroll',() =>{
    if(window.scrollY < 309.33){
        $('.vult').addClass('scroll');
    }else{
        $('.vult').removeClass('scroll');
    }

    if(window.scrollY > 368 && window.scrollY < 746){
        $('.ess').addClass('scroll');
    }else{
        $('.ess').removeClass('scroll');
    }

    if(window.scrollY > 745){
        $('.mille').addClass('scroll');
    }else{
        $('.mille').removeClass('scroll');
    }
});