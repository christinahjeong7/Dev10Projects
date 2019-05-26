/*
Name: Christina Jeong
Date Created: 05/15/2019
Most recent revision: 05/25/2019
Purpose: Restaurant script
*/

function validateInfo () {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var phoneInput = document.getElementById("phone");
    var reasonInput = document.getElementById("reason");
    var infoInput = document.getElementById("info");
  
    var message = "";

    if (!(nameInput.value && emailInput.value && phoneInput.value)) {
        if(!nameInput.value) {
            message+="\u25B6 Please enter your name\n\n"
        }
        else {
            message+="\u25B6 Enter your phone and email\n\n";
        }
    }
    
    //if "other" is selected, explain
    if (reasonInput.value == "other" && !infoInput.value) {
        message+="\u25B6 (Other) Please briefly explain your reason for inquiring\n\n";
    }
    
    //at least one box needs to be checked
    var daysToContact = document.querySelectorAll('input[type="checkbox"]:checked').length;
    if (daysToContact < 1) {
        message+="\u25B6 Please select at least one day that is convenient to contact you\n\n";
    }

    if (message) {
        alert(message);
        return false;
    }
    else{
        alert("Your request has been succesfully submitted! We will contact you as soon as possible")
    }
}