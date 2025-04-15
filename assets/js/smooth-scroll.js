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
	            const offsetPosition = elementPosition + window.scrollY - headerOffset;
			
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

	// Listen for scroll events on the document
	document.addEventListener('scroll', function(e) {

		// Get how far the user has scrolled vertically from the top of the page
		var windowPageYOffset = window.scrollY;

		// Offset value to account for a fixed header height (if any) + gap between the header and the section (to ensure the section is visible properly when the navbar highlights the section name)
		const headerOffset = 150;

		// Loop through all <section> elements on the page
		document.querySelectorAll('section').forEach((section, index, array) => {

			// Check if the current scroll position is within the range of this section i.e greater than or equal to the current's section's position (referred in the loop) and less than the next section's position (referred in the loop)
			if (
				(windowPageYOffset >= (array[index].getBoundingClientRect().top + window.scrollY - headerOffset)) &&
				(windowPageYOffset < (array[index + 1]?.getBoundingClientRect().top + window.scrollY - headerOffset))
			) {
				// Find the corresponding navigation link using the section's ID
				var navElement = document.getElementById(array[index].id + '-link');

				// Remove 'active' class from the previously active nav link
				prevTargetElement.classList.remove('active');

				// Add 'active' class to the current nav link
				navElement.classList.add('active');

				// Store this as the new previously active nav element
				prevTargetElement = navElement;
			}
		});
	});
}