export function formHandler(){
    const formButton = document.getElementById("form-submit");
    var form = document.getElementById("portfolio-form");
    var formSubmissionSuccess = document.getElementById('form-submission-success');
    var formSubmissionFailure = document.getElementById('form-submission-failure');
    function validateForm() {
        let isValid = true;
        const name = document.getElementById('form-name').value.trim();
        const email = document.getElementById("form-email").value.trim();
        const phone = document.getElementById("form-phone-number").value.trim();
        const message = document.getElementById("form-message").value.trim();

        const nameError = document.getElementById('name-error');    
        const emailError = document.getElementById("email-error");
        const phoneError = document.getElementById("phone-error");
        const messageError = document.getElementById("message-error");

        // Name Validation - must be at least 2 letters and only letters/spaces
        const namePattern = /^[A-Za-z\s]{2,}$/;
        if(!namePattern.test(name)){
            nameError.classList.remove('d-none');
            isValid = false;
        } else{
            if(!nameError.classList.contains('d-none')){
                nameError.classList.add('d-none');
            }
        }

        // Email Validation
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailPattern.test(email)) {
            emailError.classList.remove('d-none');
            isValid = false;
        } else {
            if(!emailError.classList.contains('d-none')){
                emailError.classList.add('d-none');
            }
        }
    
        // Phone Validation (10 digits)
        if (!/^\d{10}$/.test(phone)) {
            phoneError.classList.remove('d-none');
            isValid = false;
        } else {
            if(!phoneError.classList.contains('d-none')){
                phoneError.classList.add('d-none');
            }
        }
    
        // Message Required
        if (message.length === 0) {
            messageError.classList.remove('d-none');
            isValid = false;
        } else {
            if(!messageError.classList.contains('d-none')){
                messageError.classList.add('d-none');
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
                form.reset();
                alert('Thank you! Your message has been sent');
            } else {
                alert('Oops! Something went wrong. Please try again in sometime');
            }
        })
        .catch(error => {
            alert('There was an error. Please try again later.');
        });
    });
}