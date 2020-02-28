
var form = document.getElementById("form");
form.addEventListener("submit",submithandler)

function submithandler(e){
    
    // variables
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var emailerror = document.getElementById("emailerror");
    var passerror = document.getElementById("passerror");


    // Email validation
    var checkemail = /^[a-z]{1,}@[a-z]{1,}\.[a-z]{1,}$/i;
    var check =checkemail.test(email.value);
    
    if(!check ){
        e.preventDefault();
        emailerror.innerText="invalid email address";
    }
        

    // password validation
    var checkpass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,12}$/
    var pass = checkpass.test(password.value);
    
    if(!pass){
        e.preventDefault();
        passerror.innerHTML="invalid password"
    }

    // submit when email and password are valid
    if(pass && check){
        form.setAttribute("action","./manage.html");
    }
}