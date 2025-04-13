export function smoothScroll(){
    // This block selects all anchor elements whose href attribute starts with '#' 
	// (i.e. they link to an element ID on the page) and attaches a click event listener to each.
	 var prevTargetElement = document.getElementById('home-link');
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
				// Remove the 'active' class from prevTargetElement
				prevTargetElement.classList.remove('active');
				// Add 'active' class to the current element
				this.classList.add('active');
				// Initialise the prevTargetElement variable to the current variable
				prevTargetElement = this;
	        }
	    });
	});
}