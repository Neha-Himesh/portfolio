export function formHandler(){
    const formButton = document.getElementById("form-submit");
    var form = document.getElementById("portfolio-form");
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submit behavior

        const formData = new FormData(form);

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
                alert("Thank you! Your message has been sent.");
            } else {
                alert('Oops! Something went wrong with submission.');
            }
        })
        .catch(error => {
            console.error('Form submission error:', error);
            alert('There was an error. Please try again later.');
        });
    });
}