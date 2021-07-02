var subscribeInput = document.getElementById("subscribe");
var fundInput = document.getElementById("fund");
var joinEmailInput = document.getElementById("joinEmail");
var homeStorage;


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



if (localStorage.getItem("FundList") == null) {
    homeStorage = [];
}
else {
    homeStorage = JSON.parse(localStorage.getItem("FundList"));
}


if (localStorage.getItem("EmailList") == null) {
    homeStorage = [];
}
else {
    homeStorage = JSON.parse(localStorage.getItem("EmailList"));
}
function addFund() {

    if(fundInput.value != ""  && fundInput.value > 0  ){
        var funds = {
            fund: fundInput.value,
           
        }
        homeStorage.push(funds);//3
        localStorage.setItem("FundList", JSON.stringify(homeStorage));
        document.getElementById("errorFund").style.display="none";
        clearFund();

        

    }
    else {
        document.getElementById("errorFund").style.display="block"
    }
}


function addEmail() {

    if(joinEmailInput.value != ""  && validateEmail() ==true){
        var emails = {
            email: joinEmailInput.value,
           
        }
        homeStorage.push(emails);//3
        localStorage.setItem("EmailList", JSON.stringify(homeStorage));
        document.getElementById("errorEmail").style.display="none";
        clearEmail()

        

    }
    else{
        document.getElementById("errorEmail").style.display="block"

    }

}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if( re.test(String(email).toLowerCase())){
        return true;
    }
    else{
        return false;
    }
}
function clearFund(){
    fundInput.value="";
    joinEmailInput.value="";
}
function clearEmail(){
    joinEmailInput.value="";
    subscribeInput.value="";
}
  



topAbout =$("#about").offset().top;
$(window).scroll(function(){
    let wScroll =$(window).scrollTop();

    if(wScroll > topAbout -50){
        $("#main-nav").css("backgroundColor", "rgba(0,0,0,0.5")
    }
    else{
        $("#main-nav").css("backgroundColor", "#C5341F")

    }
})
