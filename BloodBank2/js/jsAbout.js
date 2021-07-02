var subscribeInput = document.getElementById("subscribe");
var homeStorage;


$(window).scroll(function(){
    let wScroll =$(window).scrollTop();

    if(wScroll > 500){
        $("#main-nav").css("backgroundColor", "rgba(0,0,0,0.5")
    }
    else{
        $("#main-nav").css("backgroundColor", "#C5341F")

    }
})



if (localStorage.getItem("subscribeList") == null) {
    homeStorage = [];
}
else {
    homeStorage = JSON.parse(localStorage.getItem("subscribeList"));
}

function subscribe(){
   

        if(subscribeInput.value != ""){
            var subscribeEmails = {
                subscribeEmail: subscribeInput.value,
               
            }
            homeStorage.push(subscribeEmails);
            localStorage.setItem("subscribeList", JSON.stringify(homeStorage));
    
            
    
        }

}