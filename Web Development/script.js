document.getElementById('submitClick').addEventListener("click", function() {
    if(document.getElementById('emailAddress').value == '') {
        document.getElementById('email_error').innerHTML = "Please type Email Address";

    } else if(document.getElementById('subjectfield').value == '') {
        document.getElementById('subject_error').innerHTML = "Please type Email Address";
    } else {
    alert('form Submitted')
    }
})
