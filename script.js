
function validateName() {
    let nameElement = document.getElementById("name");

    let nameErrorElement = document.getElementById("name-error");
    if (nameElement.value.trim() === "") {
        nameErrorElement.innerText = "Enter the full name";
        return false;
    } else {
        nameErrorElement.innerText = "";
        return true;
    }
}

function validateEmail() {
    let emailElement = document.getElementById("email");

    let email = emailElement.value.trim();
    let emailErrorElement = document.getElementById("email-error");
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let isEmailValid = emailRegex.test(email);
    if (email === "" || !isEmailValid) {
        emailErrorElement.innerText = "Enter the valid email";
        return false;
    } else {
        emailErrorElement.innerText = "";
        return true;
    }
}


function validateCourse() {
    let courseElement=document.getElementById("course");

    let courseErrorElement = document.getElementById("course-error");
    if (courseElement.value.trim() === "") {
        courseErrorElement.innerHTML = "Select a course";
        return false;
    } else {
        courseErrorElement.innerText = "";
        return true;
    }
}

function validateCollegetype() {
    let collegetypeElement=document.getElementById("collegetype");

    let collegetypeErrorElement = document.getElementById("collegetype-error");
    if (collegetypeElement.value.trim() === "") {
        collegetypeErrorElement.innerText = "Select a collegetype";
        return false;
    } else {
        collegetypeErrorElement.innerText = "";
        return true;
    }
}

function validateCollegename() {   
    let collegenameElement=document.getElementById("collegename");


   let collegenameErrorElement = document.getElementById("collegename-error");
   if (collegenameElement.value.trim() === "") {
       collegenameErrorElement.innerText = "Enter the College Name";
       return false;
   } else {
       collegenameErrorElement.innerText = "";
       return true;
   }
}
function validateDegree() {   
     let degreeElement=document.getElementById("degree");


    let degreeErrorElement = document.getElementById("degree-error");
    if (degreeElement.value.trim() === "") {
        degreeErrorElement.innerText = "Enter the degree";
        return false;
    } else {
        degreeErrorElement.innerText = "";
        return true;
    }
}
function validateDateOfBirth(){
    let dobElement=document.getElementById("dob");

    let dobErrorElement=document.getElementById("dob-error");

    if(dobElement.value==""){
        dobErrorElement.innerText="Select a date";
        return false;
    }
    else{
        dobErrorElement.innerText="";
        return true;
    }
}
function validateGender(){
    let genderErrorElement=document.getElementById("gender-error");
    let genderRadioButtons=document.getElementsByName("gender");
    let genderSelected=false
    for(let gender of genderRadioButtons){
        if(gender.checked==true){
            genderSelected=true;
            break
        }
    }
    if(!genderSelected){
        genderErrorElement.innerText="select a gender";
        return false;
    }
    else{
        genderErrorElement.innerText="";
        return true;
    }
}
function validateSemester(){
    let semesterElement=document.getElementById("semester");

    let semesterErrorElement=document.getElementById("semester-error");
    let semester=parseInt(semesterElement.value);
    if(semesterElement.value==""||semester<1||semester>8){
        semesterErrorElement.innerText="Enter a valid semester";
        return false;
    }

    else{
        semesterErrorElement.innerText="";
        return true;
    }
}

function isFormPostable() {
    let errorCount=0;
    if(!validateName()){
        errorCount++;
    }
    if(!validateEmail()){
        errorCount++;
    }
    if(!validateCourse()){
        errorCount++;
    }
    if(!validateCollegetype()){
        errorCount++;
    }
    if(!validateCollegename()){
        errorCount++;
    }
    if(!validateDegree()){
        errorCount++;
    }
    if(!validateDateOfBirth()){
        errorCount++;
    }
    if(!validateGender()){
        errorCount++;
    }
    if(!validateSemester()){
        errorCount++;
    }
    return errorCount==0;
}


    function submitForm(){
    if(isFormPostable()){
        window.location.href="grid.html";
    }
}
    