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








let userName = document.querySelector("#userName");
let userAge = document.querySelector("#userAge");
let userPhone = document.querySelector("#userPhone");
let userEmail = document.querySelector("#userEmail");
let userState = document.querySelector("#userState");
let userCity = document.querySelector("#userCity");
let userData = document.querySelector("#userData");
let userBloodGroup = document.querySelector("#userBloodGroup");
let bttnSubmit = document.querySelector("#bttnSubmit");

let needlyStore;


if (localStorage.getItem("dataStorage") == null) {
    needlyStore = [];
}
else {
    needlyStore = JSON.parse(localStorage.getItem("dataStorage"));
    display();
}



function addData() {

    if (needInputsValidation() == true) {

        let data = {
            name: userName.value,
            age: userAge.value,
            phone: userPhone.value,
            email: userEmail.value,
            state: userState.value,
            city: userCity.value,
            data: userData.value,
            bloodgroup: userBloodGroup.value
        }

        // Array
        needlyStore.push(data);
        console.log(needlyStore);

        // Local Storage
        localStorage.setItem("dataStorage", JSON.stringify(needlyStore));

        // message for inputs
        const confirmMsg = document.getElementById("confirmMsg");
        confirmMsg.classList.replace("d-none", "d-block");

        // Clear
        clear();

        //display
        display();

    }
    else {
        const tryAgainMsg = document.getElementById("tryAgainMsg");
        tryAgainMsg.classList.replace("d-none", "d-block");
    }

};

function display() {

    let cartoona = ``;

    for (let i = 0; i < needlyStore.length; i++) {

        cartoona += `<tr>
                        <td>${i + 1}</td>
                        <td>${needlyStore[i].name}</td>
                        <td>${needlyStore[i].age}</td>
                        <td>${needlyStore[i].phone}</td>
                        <td>${needlyStore[i].email}</td>
                        <td>${needlyStore[i].state}</td>
                        <td>${needlyStore[i].city}</td>
                        <td>${needlyStore[i].data}</td>
                        <td>${needlyStore[i].bloodgroup}</td>
                        <td><button onclick="deleteData(${i})" class="btn"> delete</button> </td>
                    </tr>`

    }

    document.getElementById("item").innerHTML = cartoona;

}

function deleteData(dataIndex) {
    needlyStore.splice(dataIndex, 1);
    localStorage.setItem("dataStorage", JSON.stringify(needlyStore));
    display();

}

function clear() {
    userName.value = '';
    userAge.value = '';
    userPhone.value = '';
    userEmail.value = '';
    userState.value = '';
    userCity.value = '';
    userData.value = '';
    userBloodGroup.value = '';
}


function neednameValidation() {
    const neednameAlert = document.getElementById("needNameAlert");

    let regex = /^[A-Za-z]{3,10}(\s?[A-Za-z]{3,10})?$/
    if (regex.test(userName.value) == true && userName.value != "") {
        userName.classList.add("is-valid");
        userName.classList.remove("is-invalid");
        neednameAlert.classList.replace("d-block", "d-none");

        return true
    }
    else {

        userName.classList.add("is-invalid");
        userName.classList.remove("is-valid");
        neednameAlert.classList.replace("d-none", "d-block");

        return false
    }
}
function needEmailValidation() {
    const needEmailAlert = document.getElementById("needEmailAlert");

    let regex = /@[a-z]{5,10}(\.com)$/;
    if (regex.test(userEmail.value) == true && userEmail.value != "") {
        userEmail.classList.add("is-valid");
        userEmail.classList.remove("is-invalid");
        needEmailAlert.classList.replace("d-block", "d-none");

        return true
    }
    else {

        userEmail.classList.add("is-invalid");
        userEmail.classList.remove("is-valid");
        needEmailAlert.classList.replace("d-none", "d-block");

        return false
    }
}
function needAgeValidation() {
    const needAgeAlert = document.getElementById("needAgeAlert");

    let regex = /^([2-5][0-9]|60|19|18)/;
    if (regex.test(userAge.value) == true && userAge.value != "") {
        userAge.classList.add("is-valid");
        userAge.classList.remove("is-invalid");
        needAgeAlert.classList.replace("d-block", "d-none");

        return true
    }
    else {

        userAge.classList.add("is-invalid");
        userAge.classList.remove("is-valid");
        needAgeAlert.classList.replace("d-none", "d-block");

        return false
    }
}
function needNumValidation() {
    const needNumAlert = document.getElementById("needNumAlert");

    let regex = /^01[0125][0-9]{8}$/;
    if (regex.test(userPhone.value) == true && userPhone.value != "") {
        userPhone.classList.add("is-valid");
        userPhone.classList.remove("is-invalid");
        needNumAlert.classList.replace("d-block", "d-none");

        return true
    }
    else {

        userPhone.classList.add("is-invalid");
        userPhone.classList.remove("is-valid");
        needNumAlert.classList.replace("d-none", "d-block");

        return false
    }
}

function needInputsValidation() {
    neednameValidation();
    needAgeValidation();
    needEmailValidation();
    needNumValidation();


    if (neednameValidation() == true && needAgeValidation() == true && needEmailValidation() == true && needNumValidation() == true) {
        return true;
    }
    else {
        return false;
    }
}



/*************************************************************************************************************** */


// var homeStorage;
// if (localStorage.getItem("subscribeList") == null) {
//     homeStorage = [];
// }
// else {
//     homeStorage = JSON.parse(localStorage.getItem("subscribeList"));
// }
// function subscribe() {
//     if (subscribeInput.value != "") {
//         var subscribeEmails = {
//             subscribeEmail: subscribeInput.value,

//         }
//         homeStorage.push(subscribeEmails);
//         localStorage.setItem("subscribeList", JSON.stringify(homeStorage));
//     }
// }
// $(window).scroll(function () {
//     let wScroll = $(window).scrollTop();

//     if (wScroll > 300) {
//         $("#main-nav").css("backgroundColor", "rgba(0,0,0,0.5")
//     }
//     else {
//         $("#main-nav").css("backgroundColor", "#C5341F")

//     }
// })



// var DonorName = document.getElementById("donor_name");
// var DonorAge = document.getElementById("donor_age");
// var DonorGender = document.getElementById("donor_gender");
// var DonorEmail = document.getElementById("donor_email");
// var DonorNum = document.getElementById("donor_num");
// var DonorBlood = document.getElementById("donor_blood");
// var DonorMess = document.getElementById("donor_mess");

// var donors = []
// if (localStorage.getItem('donors') == null) {
//     donors = []

// } else {
//     donors = JSON.parse(localStorage.getItem('donors'))
//     display()
// }
// function send() {

//     donorInputsValidation();

//     if (donorInputsValidation() == true) {

//         var donor = {
//             name: DonorName.value,
//             age: DonorAge.value,
//             gender: DonorGender.value,
//             email: DonorEmail.value,
//             num: DonorNum.value,
//             blood: DonorBlood.value,
//             mess: DonorMess.value
//         }
//         donors.push(donor);
//         localStorage.setItem('donors', JSON.stringify(donors));
//         const confirmMsg = document.getElementById("confirmMsg");
//         confirmMsg.classList.replace("d-none", "d-block");
//         clearInputs()
//         display()

//     }
//     else {

//         const tryAgainMsg = document.getElementById("tryAgainMsg");
//         tryAgainMsg.classList.replace("d-none", "d-block");
//     }

// }
// function donornameValidation() {
//     const donornameAlert = document.getElementById("donornameAlert");

//     let regex = /^[A-Za-z]{3,10}(\s?[A-Za-z]{3,10})?$/
//     if (regex.test(DonorName.value) == true && DonorName.value != "") {
//         donor_name.classList.add("is-valid");
//         donor_name.classList.remove("is-invalid");
//         donornameAlert.classList.replace("d-block", "d-none");

//         return true
//     }
//     else {

//         donor_name.classList.add("is-invalid");
//         donor_name.classList.remove("is-valid");
//         donornameAlert.classList.replace("d-none", "d-block");

//         return false
//     }
// }
// function donorEmailValidation() {
//     const donorEmailAlert = document.getElementById("donorEmailAlert");

//     let regex = /@[a-z]{5,10}(\.com)$/;
//     if (regex.test(DonorEmail.value) == true && DonorEmail.value != "") {
//         donor_email.classList.add("is-valid");
//         donor_email.classList.remove("is-invalid");
//         donorEmailAlert.classList.replace("d-block", "d-none");

//         return true
//     }
//     else {

//         donor_email.classList.add("is-invalid");
//         donor_email.classList.remove("is-valid");
//         donorEmailAlert.classList.replace("d-none", "d-block");

//         return false
//     }
// }
// function donorGenderValidation() {
//     const donorGenderAlert = document.getElementById("donorGenderAlert");

//     let regex = /^male$|^female$/;
//     if (regex.test(DonorGender.value) == true && DonorGender.value != "") {
//         donor_gender.classList.add("is-valid");
//         donor_gender.classList.remove("is-invalid");
//         donorGenderAlert.classList.replace("d-block", "d-none");

//         return true
//     }
//     else {

//         donor_gender.classList.add("is-invalid");
//         donor_gender.classList.remove("is-valid");
//         donorGenderAlert.classList.replace("d-none", "d-block");

//         return false
//     }
// }
// function donorAgeValidation() {
//     const donorAgeAlert = document.getElementById("donorAgeAlert");

//     let regex = /^([2-5][0-9]|60|19|18)/;
//     if (regex.test(DonorAge.value) == true && DonorAge.value != "") {
//         donor_age.classList.add("is-valid");
//         donor_age.classList.remove("is-invalid");
//         donorAgeAlert.classList.replace("d-block", "d-none");

//         return true
//     }
//     else {

//         donor_age.classList.add("is-invalid");
//         donor_age.classList.remove("is-valid");
//         donorAgeAlert.classList.replace("d-none", "d-block");

//         return false
//     }
// }
// function donorNumValidation() {
//     const donorNumAlert = document.getElementById("donorNumAlert");

//     let regex = /^01[0125][0-9]{8}$/;
//     if (regex.test(DonorNum.value) == true && DonorNum.value != "") {
//         donor_num.classList.add("is-valid");
//         donor_num.classList.remove("is-invalid");
//         donorNumAlert.classList.replace("d-block", "d-none");

//         return true
//     }
//     else {

//         donor_num.classList.add("is-invalid");
//         donor_num.classList.remove("is-valid");
//         donorNumAlert.classList.replace("d-none", "d-block");

//         return false
//     }
// }
// function donorInputsValidation() {
//     donornameValidation();
//     donorAgeValidation();
//     donorGenderValidation();
//     donorEmailValidation();
//     donorNumValidation();


//     if ((donornameValidation() == true && donorAgeValidation() == true && donorGenderValidation() == true && donorEmailValidation() == true && donorNumValidation() == true)) {
//         return true
//     }
//     else {
//         return false
//     }
// }

// function display() {
//     var copaya = "";
//     for (var i = 0; i < donors.length; i++) {
//         copaya += `<tr>
//                         <td>${donors[i].name}</td>
//                         <td>${donors[i].age}</td>
//                         <td>${donors[i].gender}</td>
//                         <td>${donors[i].email}</td>
//                         <td>${donors[i].num}</td>
//                         <td>${donors[i].blood}</td>
//                         <td>${donors[i].mess}</td>
//                         <td><button onclick="Delete(${i})" class="btn btn-danger">Delete</button></td>
//                     </tr>`
//     }
//     document.getElementById("demo").innerHTML = copaya;
// }

// function Delete(index) {
//     donors.splice(index, 1)
//     localStorage.setItem('donors', JSON.stringify(donors));
//     display()
// }

// function clearInputs() {
//     DonorName.value = ""
//     DonorAge.value = ""
//     DonorGender.value = ""
//     DonorEmail.value = ""
//     DonorNum.value = ""
//     DonorBlood.value = ""
//     DonorMess.value = ""
// }
