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




//function for ministries carousel
var slideCount = 0;
picCarousel();

function picCarousel() {
    var i;
    var pic = document.getElementsByClassName("youthPic");
    for (i = 0; i < pic.length; i++) {
        pic[i].style.display = "none";
    }
}

slideCount++;
if (slideCount > pic.length) [slideCount = 1]
pic[slideCount-1].style.display= "block";
setTimeout(picCarousel, 3000);

}



