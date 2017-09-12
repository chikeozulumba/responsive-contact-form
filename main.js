document.getElementById('contactForm').addEventListener('submit', submitForm);


function submitForm(e) {
    e.preventDefault();

    // GET VALUES
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    console.log(name);
}

// FUNCTION TO GET FORM VALUES
function getInputVal(id) {
    return document.getElementById(id).value;
}