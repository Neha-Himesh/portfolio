// Function to handle form submission in about section
export function formHandler(){
    // Fetch the form element, form submission element and form failure element
    const formButton = document.getElementById("form-submit");
    var form = document.getElementById("portfolio-form");
    var formSubmissionSuccess = document.getElementById('form-submission-success');
    var formSubmissionFailure = document.getElementById('form-submission-failure');
    function validateForm() {
        // Initialise a boolean variable to true 
        let isValid = true;

        //Fetch the values of name, email, phone, message from the form
        const name = document.getElementById('form-name').value.trim();
        const email = document.getElementById("form-email").value.trim();
        const phone = document.getElementById("form-phone-number").value.trim();
        const message = document.getElementById("form-message").value.trim();

        //Fetch the name-error, email-error, phone-error, message-error elements from the html 
        const nameError = document.getElementById('name-error');    
        const emailError = document.getElementById("email-error");
        const phoneError = document.getElementById("phone-error");
        const messageError = document.getElementById("message-error");

        // Name Validation - must be at least 2 letters and only letters/spaces
        const namePattern = /^[A-Za-z\s]{2,}$/;
        // When the validation fails, make the error message related to name visible 
        if(!namePattern.test(name)){
            nameError.classList.remove('d-none');
            isValid = false;
        } else{
            if(!nameError.classList.contains('d-none')){
                nameError.classList.add('d-none'); // If the validation is successful then hide the error message
            }
        }

        // Email Validation - Must have proper format of email
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        // When the validation fails, make the error message related to email visible 
        if (!emailPattern.test(email)) {
            emailError.classList.remove('d-none');
            isValid = false;
        } else {
            if(!emailError.classList.contains('d-none')){
                emailError.classList.add('d-none'); // If the validation is successful then hide the error message
            }
        }
    
        // Phone Validation - Must only contain digits 10 in number
        if (!/^\d{10}$/.test(phone)) {
            // When the validation fails, make the error message related to phone visible 
            phoneError.classList.remove('d-none');
            isValid = false;
        } else {
            if(!phoneError.classList.contains('d-none')){
                phoneError.classList.add('d-none'); // If the validation is successful then hide the error message
            }
        }
    
        // Message Required - Must have length greater than 0
        if (message.length === 0) {
             // When the validation fails, make the error message related to message visible 
            messageError.classList.remove('d-none');
            isValid = false;
        } else {
            if(!messageError.classList.contains('d-none')){
                messageError.classList.add('d-none'); // If the validation is successful then hide the error message
            }
        }
    
        return isValid;
    }
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submit behavior

        const formData = new FormData(form);
        if(!validateForm()){
            return;
        }
        // Using Fetch API to send a POST request with form data and accept a JSON response
        fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                // ✅ Success: Clear form + show message
                form.reset(); //Resetting the form so that the data is empty to be able to fill the next time
                alert('Thank you! Your message has been sent'); //Success message
            } else {
                alert('Oops! Something went wrong. Please try again in sometime'); //Failure message
            }
        })
        .catch(error => {
            alert('There was an error. Please try again later.'); // Shows an error message if the Fetch API request fails

        });
    });
}