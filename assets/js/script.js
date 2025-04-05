document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;
    const progressBars = document.querySelectorAll(".progress");

    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
        if (body.classList.contains("dark-mode")) {
            darkModeToggle.textContent = "Light Mode";
        } else {
            darkModeToggle.textContent = "Dark Mode";
        }
    });
   
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const className = entry.target.getAttribute("data-name");
            if (entry.isIntersecting) {
              
                entry.target.classList.add(className); // Animate width when visible
                console.log("Into the view");
            } else{
                if(entry.target.classList.contains(className)){
                    console.log("Outside the view");
                    entry.target.classList.remove(className);
                }
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% visible

    progressBars.forEach((bar) => observer.observe(bar));
    const formButton = document.getElementById("form-submit");
    var form = document.getElementById("portfolio-form");
    form.addEventListener('submit', function(event) {
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
    })

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
