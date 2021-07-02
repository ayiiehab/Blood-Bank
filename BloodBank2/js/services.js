$(window).scroll(function(){
    let wScroll =$(window).scrollTop();

    if(wScroll > 500){
        $("#main-nav").css("backgroundColor", "rgba(0,0,0,0.5")
    }
    else{
        $("#main-nav").css("backgroundColor", "#C5341F")

    }
})