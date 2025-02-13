function storeDetails()
{
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let phonecheck = !isNaN(Number(phone));
    let emailcheck = false;
    let validInput = true;
    let textData = ("Name: " + fname + " " + lname +"\nEmail: " + email + "\nPhone:" + phone);
    if (email.includes("@")){
        emailcheck = true;
    }
    if (emailcheck === false){
        alert("Email Entered is Invalid: does not contain @");
        validInput = false;
    }
    if (phonecheck === false){
        alert("Phone Number Entered is invalid: contains non-numeric characters");
        validInput = false;
    }

    if (phone.length !== 11){
        alert("Phone Number Entered is invalid: invalid length");
        validInput = false;
    }

    if (phone.charAt(0) !== "0"){
        alert("Phone Number Entered is invalid: phone number must start with 0");
        validInput = false;
    }

    if (validInput === true){
        alert(textData+"\nThank you for filling the contact form!");
    }
    
}