//Code Starts
function storeDetails()
{
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    //Reads Input from page
    let phonecheck = !isNaN(Number(phone));
    //Checks if phone is a valid number
    let emailcheck = false;
    //placeholder boolean to be altered later
    let validInput = true;
    //flag for valid input, altered if validations fail
    let textData = ("Name: " + fname + " " + lname +"\nEmail: " + email + "\nPhone:" + phone);
    //merging of entered information
    if (email.includes("@")){
        emailcheck = true;
    }
    //checking if email data has an @, sets boolean from earlier to true
    if (emailcheck === false){
        alert("Email Entered is Invalid: does not contain @");
        validInput = false;
        //checks if emailcheck remained false, trips validation flag if so and sends alert
    }
    if (phonecheck === false){
        alert("Phone Number Entered is invalid: contains non-numeric characters");
        validInput = false;
        // if phone is not a valid number, trips validation flag and sends alert
    }

    if (phone.length !== 11){
        alert("Phone Number Entered is invalid: invalid length");
        validInput = false;
        // if phone number is incorrect length, trips validation flag and sends alert
    }

    if (phone.charAt(0) !== "0"){
        alert("Phone Number Entered is invalid: phone number must start with 0");
        validInput = false;
        // if phone number starts with an incorrect character, trips validation flag and send alert
    }

    if (validInput === true){
        alert(textData+"\nThank you for filling the contact form!");
        //if validation flag is never tripped, sends sucess alert
    }
    
}
//Code Ends