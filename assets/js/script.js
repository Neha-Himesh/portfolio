document.addEventListener("DOMContentLoaded", function () {
	const includes = [
		{ id: "portfolio-navbar", file: "html-components/navbar.html" },
		{ id: "home", file: "html-components/hero.html" },
		{ id: "projects", file: "html-components/projects.html" },
		{ id: "about", file: "html-components/about.html" },
		{ id: "contact", file: "html-components/contact.html" },
		{ id: "education-experience-internships", file: "html-components/education-experience-internships.html" },
		{ id: "skills", file: "html-components/skills.html" },
		{ id: "contact-details", file: "html-components/contact-details.html" },
	  ];  
	  let loadedCount = 0;
	  includes.forEach(include => {
		fetch(include.file)
		  .then(response => response.text())
		  .then(data => {
			const element = document.getElementById(include.id);
			if (element) {
			  element.innerHTML = data;
			} else {
			  console.warn(`Element with ID '${include.id}' not found.`);
			}
		})
		.catch(err => console.error(`Error loading ${include.file}:`, err))
		.finally(() =>{
			loadedCount ++;
			if(loadedCount === includes.length){
				initializePageScripts();
			}
		});
	  });
	function initializePageScripts(){
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
	var musicIcon = document.getElementById('music-icon');
	var htmlTagIcon = document.getElementById('html-tag-icon');
	var musicIcon1 = document.getElementById('music-icon-1');
	var javaScriptIcon = document.getElementById('javascript-icon');
	var cssSyntaxIcon = document.getElementById('css-syntax-icon');
	var cssSyntaxIcon1 = document.getElementById('css-syntax-icon-1');

	function addFadeOutInClass(){
		// Add d-none class from css icon (last image) such that it doesnt get displayed in the viewport
		cssSyntaxIcon1.classList.add('d-none');
		//Remove d-none class from music icon (1st image) such that it gets visible in the viewport and add fade-in class such that it fades in smoothly into the viewport
		musicIcon.classList.remove('d-none');
	  	musicIcon.classList.add('fade-in');
		setTimeout(function(){
			// Remove fade-in class and add fade-out class such that it fades out smoothly after 1 second
			musicIcon.classList.remove('fade-in');
			musicIcon.classList.add('fade-out');
		}, 1000)
	  	setTimeout(function(){
			// Remove fade-out class and add d-none class so that it doesnt get displayed in the viewport
			musicIcon.classList.remove('fade-out');
			musicIcon.classList.add('d-none');
			//Remove d-none class from html icon (2nd image) such that it gets visible in the viewport and add fade-in class such that it fades in smoothly into the viewport
			htmlTagIcon.classList.remove('d-none');
			htmlTagIcon.classList.add('fade-in');
	  	}, 2000);
	  	setTimeout(function(){
			// Remove fade-in class and add fade-out class such that it fades out smoothly after 1 second
			htmlTagIcon.classList.remove('fade-in');
			htmlTagIcon.classList.add('fade-out');
	  	}, 3000);

	  	setTimeout(function(){
			// Remove fade-out class and add d-none class so that it doesnt get displayed in the viewport
			htmlTagIcon.classList.remove('fade-out');
			htmlTagIcon.classList.add('d-none');
			//Remove d-none class from music icon (3rd image) such that it gets visible in the viewport and add fade-in class such that it fades in smoothly into the viewport
			musicIcon1.classList.remove('d-none');
			musicIcon1.classList.add('fade-in');
		}, 4000);

		setTimeout(function(){
			// Remove fade-in class and add fade-out class such that it fades out smoothly after 1 second
			musicIcon1.classList.remove('fade-in');
			musicIcon1.classList.add('fade-out');
		}, 5000);

		setTimeout(function(){
			// Remove fade-out class and add d-none class so that it doesnt get displayed in the viewport
			musicIcon1.classList.remove('fade-out');
			musicIcon1.classList.add('d-none');
			//Remove d-none class from javascript icon (4th image) such that it gets visible in the viewport and add fade-in class such that it fades in smoothly into the viewport
			javaScriptIcon.classList.remove('d-none');
			javaScriptIcon.classList.add('fade-in');
		}, 6000);

		setTimeout(function(){
			// Remove fade-in class and add fade-out class such that it fades out smoothly after 1 second
			javaScriptIcon.classList.remove('fade-in');
			javaScriptIcon.classList.add('fade-out');
		}, 7000);

		setTimeout(function(){
			// Remove fade-out class and add d-none class so that it doesnt get displayed in the viewport
			javaScriptIcon.classList.remove('fade-out');
			javaScriptIcon.classList.add('d-none');
			//Remove d-none class from css syntax icon (5th image) such that it gets visible in the viewport and add fade-in class such that it fades in smoothly into the viewport
			cssSyntaxIcon.classList.remove('d-none');
			cssSyntaxIcon.classList.add('fade-in');
		}, 8000);

		setTimeout(function(){
			// Remove fade-in class and add fade-out class such that it fades out smoothly after 1 second
			cssSyntaxIcon.classList.remove('fade-in');
			cssSyntaxIcon.classList.add('fade-out');
		}, 9000);

		setTimeout(function(){
			// Remove fade-out class and add d-none class so that it doesnt get displayed in the viewport\
			cssSyntaxIcon.classList.remove('fade-out');
			cssSyntaxIcon.classList.add('d-none');
			//Remove d-none class from css syntax icon (5th image) such that it gets visible in the viewport and add fade-in class such that it fades in smoothly into the viewport
			cssSyntaxIcon1.classList.remove('d-none');
			cssSyntaxIcon1.classList.add('fade-in');
		}, 10000);

		setTimeout(function(){
			// Remove fade-in class and add fade-out class such that it fades out smoothly after 1 second
			cssSyntaxIcon1.classList.remove('fade-in');
			cssSyntaxIcon1.classList.add('fade-out');
		}, 11000);
		
	}
	//Add setInterval function such that the above function is repeatedly called after 12 seconds
	setInterval(addFadeOutInClass, 12000);
	//Call the function after the DOM gets loaded
	addFadeOutInClass();

	// This block selects all anchor elements whose href attribute starts with '#' 
	// (i.e. they link to an element ID on the page) and attaches a click event listener to each.
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	    anchor.addEventListener('click', function (e) {
	        // Prevent the default anchor behavior (jumping to the anchor)
	        e.preventDefault();
		
	        // Get the target ID from the href attribute of the clicked anchor
	        const targetId = this.getAttribute('href');
		
	        // Select the target element using the ID from the href attribute
	        const targetElement = document.querySelector(targetId);
		
	        // Check if the target element exists on the page
	        if (targetElement) {
	            // Specify the height of the fixed header/navbar.
	            // Adjust this value to match the actual height of your navbar.
	            const headerOffset = 100;
			
	            // Get the top position of the target element relative to the viewport
	            const elementPosition = targetElement.getBoundingClientRect().top;
			
	            // Calculate the final scroll position offset by adding the current page's Y offset
	            // and subtracting the header height so that the section appears below the navbar.
	            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
			
	            // Scroll the page to the calculated offset position with a smooth behavior
	            window.scrollTo({
	                top: offsetPosition,
	                behavior: 'smooth'
	            });
	        }
	    });
	});
	}
	

});




