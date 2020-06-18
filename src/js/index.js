function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function validate(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var check = document.getElementById("agree_check").checked;
    let patternEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    if (email != "" && patternEmail.test(email) && password != "" && check) {
        setTimeout(afterSubmit, 3000);
    }
    else if (email != "" && !patternEmail.test(email) && password != "") {
        alert ("Invalid email");
    }
    else if (email == "") {
        alert ("E-mail is required");
    }
    else if (password == "") {
        alert ("Password is required");
    }
    else if (!check){
        alert ("Please indicate that you agree to terms & conditions");
    }
}

function afterSubmit(){
    document.getElementById("myForm").style.display = "none";
    document.getElementById("show-popup-form").style.display="none";
    document.getElementById("message").style.display = "block";  
}

document.getElementById("message").style.display = "none";

document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault()
  });