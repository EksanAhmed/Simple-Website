var fullname = document.getElementById('fname');
var username = document.getElementById('username');
var email = document.getElementById('email');
var pass1 = document.getElementById('password');
var pass2 = document.getElementById('cpassword');
var phone = document.getElementById('contact');
var form = document.getElementById("form");
var address = document.getElementById('address');
var btn = document.getElementById('btn');


// Show input error message
function ShowError(input) {
    const element = input.parentElement;
    element.className = 'form-control error';
    const small = element.querySelector('small');
    small.innerText = `${toUpperCase(input)} is required`;
}

// Show validity error message
function Invaild(input) {
    // console.log(input)
    const element = input.parentElement;
    // console.log(input.parentElement)
    element.className = 'form-control error';
    const small = element.querySelector('small');
    small.innerText = `${toUpperCase(input)} is not valid.`;
}

function countryError(input) {
    const country = input.parentElement;
    country.className = 'form-control error';
    const small = country.querySelector('small');
    small.innerText = 'Bangladesh should be selected';
}

// Show length error message
function lengthError(input, min, max) {
    const element = input.parentElement;
    element.className = 'form-control error';
    const small = element.querySelector('small');
    small.innerText = `${toUpperCase(input)} must be between ${min} to ${max} characters`;
}

// Show password doesn't match error
function PasswordError(input) {
    const element = input.parentElement;
    element.className = 'form-control error';
    const small = element.querySelector('small');
    small.innerText = `${toUpperCase(input)} doesn't match`;
}



// Conver First letter to upper case
function toUpperCase(input) {
    // console.log(input)
    var upperCaseLetter = input.placeholder.charAt(0).toUpperCase();
    var lowerCaseLetters = input.placeholder.slice(1);
    return upperCaseLetter + lowerCaseLetters;
}

// Show success o
function Success(input) {
    const element = input.parentElement;
    element.className = 'form-control success';
}
// Check passwords match
function checkPassword(input1, input2) {
    if (input1.value !== input2.value) {
        PasswordError(input2);
    }
}

// Check email 
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        Success(input);
    } else {
        Invaild(input);
    }
}

// Check  Name
function checkName(input) {
    const re = /^[a-zA-Z][a-zA-Z-_\.]{4,15}$/;
    if(re.test(input.value.trim())) {
        Success(input);
    } else {
        Invaild(input);
    }
}

//Check address
function checkAddress (input) {
    // console.log(input.value)
    if (input.value == 'bangladesh') {
        Success(input)
    }
    else {
        countryError(input)
    }
}

//check phone valid
function checkPhone(input) {
    // console.log(input.value)
    const re = /(^(\+8801|8801|01|008801))[1|4-9]{1}(\d){8}$/;
    if (re.test(input.value.trim())) {
        Success(input);
    } else {
        Invaild(input);
    }
}


// Check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        // console.log(input.value);
        if (input.value.trim() === '') {
            ShowError(input);
        } else {
            Success(input);
        }
    });

}
// Check length
function checkLength(input, min, max) {
    if (input.value.length < min && input.value !== '') {
        lengthError(input, min, max);
    }
    else if (input.value.length > max) {
        lengthError(input, min, max);
    }
    else if (input.value.length !== 0) {
        Success(input);
    }
}

// Event Listeners
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // console.log(name.value);
    checkRequired([fullname, username, email, pass1, pass2, phone, address])
    checkLength(phone, 11, 11);
    checkLength(username, 3, 15);
    checkLength(pass1, 6, 25);
    checkEmail(email);
    checkPhone(phone);
    checkName(fullname);
    checkAddress(address);
    checkPassword(pass1, pass2);
})


//submit button enable 
function checkform()
{
    var f = document.forms["form"].elements;
    var cansubmit = true;

    for (var i = 0; i < f.length; i++) {
        if (f[i].value.length == 0) cansubmit = false;
    }

    if (cansubmit) {
        btn.disabled = !cansubmit;
    }
}

