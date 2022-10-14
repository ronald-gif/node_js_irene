const form = document.getElementById('myFormToRegister');
const firstname = document.getElementById('firstName');
const error1 = document.getElementById('error1')
const secondname = document.getElementById('secondname');
const error2 = document.getElementById('error2')
const telephone = document.getElementById('telephone');
const error3 = document.getElementById('error3')
const uniquenumber = document.getElementById('uniquenumber');
const error4 = document.getElementById('error4')
const dateofbirth = document.getElementById('DOB');
const error6 = document.getElementById('error6')
// const location = document.getElementById('location');
// const residence = document.getElementById('residence');
// const mobile = document.getElementById('mobile');
// const supervise = document.getElementById('supervise');
// const regulate = document.getElementById('regulate');
// const support = document.getElementById('support');




form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

// function to validate phonenumber
const validatePhonenumber = (telephone) =>{
    const number = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    return number.test(telephone)
}

// function to validate ID
const isValidId = (id) =>{
    const uniqueId = "^([a-zA-Z_$][a-zA-Z\\d_$]*)$";
    return uniqueId.test(id)
}
const validateInputs = () => {
    const firstnameValue = firstname.value.trim();
    const secondnameValue = secondname.value.trim();
    const phonenumberValue = telephone.value.trim();
    const uniquenumbreValue = uniquenumber.value.trim();
    const dateofbirthValue = dateofbirth.value

    if(firstnameValue === '') {
       firstname.style.border = '2px solid #ff3860';
       error1.lastElementChild.innerText = 'first name is required'
      
    } else {
      firstname.style.border = '2px solid #09c372';
      error1.lastElementChild.innerText = ''
      
    }

    if(secondnameValue === ''){
        secondname.style.border = '2px solid #ff3860';
        error2.lastElementChild.innerText = 'second name is required'
    }else{
        secondname.style.border = '2px solid #09c372';
       error2.lastElementChild.innerText = ''
    }

    if(phonenumberValue === ''){
        telephone.style.border = '2px solid #ff3860';
        error3.lastElementChild.innerText = 'Phone numberis required'
    }else if(!validatePhonenumber(phonenumberValue)){
        telephone.style.border = '2px solid #ff3860';
        error3.lastElementChild.innerText = 'Provide a valide phone number'
    }else{
        telephone.style.border = '2px solid #09c372';
        error3.lastElementChild.innerText = ''
    }

    if(uniquenumbreValue === ''){
        uniquenumber.style.border = '2px solid #ff3860';
        error4.lastElementChild.innerText = 'ID is required';
    }else if(!isValidId(uniquenumbreValue)){
        uniquenumber.style.border = '2px solid #ff3860';
        error4.lastElementChild.innerText = 'enter valid ID';
    }else{
        uniquenumber.style.border = '2px solid #09c372';
        error4.lastElementChild.innerText = '';
    }

    if(dateofbirthValue === ''){
        dateofbirth.style.border = '2px solid #ff3860';
        error6.lastElementChild.innerText = 'choose date of birth'
    }else{
        dateofbirth.style.border = '2px solid #09c372';
        error6.lastElementChild.innerText = '' 
    }
}










