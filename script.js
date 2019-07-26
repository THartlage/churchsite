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



var image = new Array("images/childsummer3.jpg","images/children1.jpg","images/childfall2.jpg","images/smallgroup1.jpg","images/volunteer1.jpg");
var imgNum = 0;
var imgLength = image.length - 1;

function switch_image(num) {

    imgNum = imgNum + num;

    if (imgNum > imgLength) {
        imgNum = 0;
    } 

    if (imgNum < 0) {
        imgNum = imgLength;
    }

    document.slide.src= image[imgNum];

    return false;
}





