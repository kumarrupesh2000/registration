var nameError=document.getElementById('name-error');
var emailError=document.getElementById('email-error');
var phoneError=document.getElementById('phone-error');
var submitError=document.getElementById('submit-error');
function validateName(){
    var name=document.getElementById('contact-name').value;
    if(name.length==0){
        nameError.innerHTML='Name is required';
        return false;
    }
    nameError.innerHTML='<i class="fa-regular fa-circle-check"></i>';
    return true;
    
        

    
}
function validatePhone(){
    var phone=document.getElementById('contact-phone').value;
    if(phone.length=0){
        phoneError.innerHTML="Phone no is required";
        return false;
    }
    if(phone.length!==10){
        phoneError.innerHTML="Phone no should be 10 digit";
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML="Numeric only allowed";
        return false;
    }
    phoneError.innerHTML='<i class="fa-regular fa-circle-check"></i>';
    return true;

}
function validateEmail()
{
    var email=document.getElementById('contact-email').value;
    if(email.length==0){
        emailError.innerHTML="Email required";
        return false;
    }
    if(!email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/))
    {
        emailError.innerHTML="Invalid Email";
        return false;
    }
    emailError.innerHTML='<i class="fa-regular fa-circle-check"></i>';
    return true;

}
function validateForm(){
    if(!validateName() || !validatePhone()||!validateEmail())
    {

        submitError.innerHTML='Please fill form correctly'
        setTimeout(function(){submitError.style.display='none';},3000)
        return false;
    }
    else{
        alert("Thank you!!");
    }



}