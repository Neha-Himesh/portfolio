export function iconFader(){
	//Fetch all the icons elements from html
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
			// Remove fade-out class and add d-none class so that it doesnt get displayed in the viewport
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
}