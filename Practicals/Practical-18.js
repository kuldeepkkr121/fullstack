const form1=document.getElementById('form');
const username=document.getElementById('user');
const email=document.getElementById('email');
const password11=document.getElementById('password1');
const password22=document.getElementById('password2');
const small=document.querySelector('s');

form1.addEventListener('submit',function(e){
    e.preventDefault();
    checkInput();
});

function checkInput(){
    const usernamevalue=username.value.trim();
    
    if(usernamevalue===''){
        showError(username,"UserNAME can not be blank");
    }
    else if(!isUservalid(usernamevalue)){
        showError(username,"Please Enter a Valid username ")
    }
    else{
        showSuccess(username);
    }

    const emailvalue=email.value.trim();
    
    if(emailvalue===''){
        showError(email,"Email id can not be blank");
    }
    else if(!isEmailValid(emailvalue)){
        showError(email,"Please Enter a Valid email ")
    }
    else{
        showSuccess(email);
    }

    const password11value=password11.value.trim();
    
    if(password11value===''){
        showError(password11,"Password can not be blank");
    }
    else{
        showSuccess(password11);
    }

    const password22value=password22.value.trim();
    if(password11value!=''){
    if(password22value!=password11value){
        showError(password22,"Password doesn't match above password");
    }
    else{
        showSuccess(password22);
    }
}
    else{
        blankError(password22,"Password can't be blank");
    }
}

function showError(input,message){
    const formControl=input.parentNode;
    formControl.className='form-control1 error';
    const small=formControl.querySelector('small');
    small.innerHTML=message;
}

function showSuccess(input,message){
    const formControl=input.parentNode;
    formControl.className='form-control1 success';

}

function blankError(input,message){
    const formControl=input.parentNode;
    formControl.className='form-control1 error';
    const small=formControl.querySelector('small');
    small.innerHTML=message;
}

function isEmailValid(email){
    return /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,3})$/.test(email)
}

function isUservalid(username){
    return /^([a-z0-9_\.\-\ ]+)$/.test(username)
}