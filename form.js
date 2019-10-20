function validateForm() {
    var name = document.forms["RegForm"]["name"];
    var name = document.forms["RegForm"]["password"];
    var name = document.forms["RegForm"]["city"];
    var name = document.forms["RegForm"]["gender"];

    if (name.value == ""){
        window.alert("Please enter your name.");
        name.focus();
        return false;
    }
    if(password.value == ""){
        window.alert("Please enter your address.");
        name.focus();
        return false;
    }

    if(city.value == ""){
        window.alert("Please enter your city.");
        name.focus();
        return false;
    }

    if(gender.value == ""){
        window.alert("Please enter your gender.");
        name.focus();
        return false;
    }

}