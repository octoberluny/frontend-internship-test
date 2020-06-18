function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function validate(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    let patternEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    var password = document.getElementById("password").value;
    if (email != "" && patternEmail.test(email) && password != "") {
        alert ("Login successfully");
        return true;
    }
    else if (email != "" && !patternEmail.test(email) && password != "") {
        alert ("Invalid email");
        return false;
    }
    else if (email == "") {
        alert ("E-mail is required");
        return false;
    }
    else if (password == "") {
        alert ("Password is required");
        return false;
    }
}