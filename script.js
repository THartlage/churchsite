//function to validate blank input on contact form
function submitForm (e) {
    e.preventDefault();

    var userName = document.getElementById('name').value;
    var userEmail = document.getElementById('mail').value;
    var userMessage = document.getElementById('message').value;

    if (userName  == "") {
        alert("Please enter your name");
        return false;
    }

    if (userEmail  == "") {
        alert("Please enter your email address");
        return false;
    }

    if (userMessage  == "") {
        alert("Please enter your message");
        return false;
    }

}



