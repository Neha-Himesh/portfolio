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
  	  	    } else {
  	  	        if (entry.target.classList.contains(className)) {
  	  	            console.log("Outside the view");
  	  	            entry.target.classList.remove(className);
  	  	        }
  	  	    }
  	  	});
  	}, { threshold: 0.5 }); // Trigger when 50% visible

  	progressBars.forEach((bar) => observer.observe(bar));

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
	var musicCodingIcon = document.getElementById('music-coding-image');
	var htmlTagIcon = document.getElementById('html-tag-icon');
	function addFadeOutInClass(){
	  musicCodingIcon.classList.add('fade-out');
	  setTimeout(function(){
		  musicCodingIcon.classList.remove('fade-out');
		  musicCodingIcon.classList.add('fade-in');
	  }, 5000);
	  setTimeout(function(){
		  musicCodingIcon.classList.remove('fade-in');
	  }, 10000);
	
	}
	
	setInterval(addFadeOutInClass, 10000);
	addFadeOutInClass();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  	anchor.addEventListener('click', function (e) {
  	    e.preventDefault();

  	    const targetId = this.getAttribute('href');
  	    const targetElement = document.querySelector(targetId);

  	    if (targetElement) {
  	        const headerOffset = 100; // change this to your header height
  	        const elementPosition = targetElement.getBoundingClientRect().top;
  	        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

  	        window.scrollTo({
  	            top: offsetPosition,
  	            behavior: 'smooth'
  	        });
  	    }
  	});
});


