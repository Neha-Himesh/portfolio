export function loadComponents(includes, onComplete) {
    let loadedCount = 0;
    // Loop through each item in the 'includes' array to fetch and inject corresponding components
    includes.forEach(include => {
        fetch(include.file) // Fetch the HTML file specified in the 'file' property of the include object
            .then(response => response.text()) // Parse the response as plain text (HTML content)
            .then(data => {
                const element = document.getElementById(include.id); // Get the DOM element by ID from the 'include' object
                if (element) {
                    element.innerHTML = data; // Inject the fetched HTML content into the element
                } else {
                    console.warn(`Element with ID '${include.id}' not found.`); // Warn if the target element does not exist
                }
            })
            .catch(err => console.error(`Error loading ${include.file}:`, err)) // Log any errors during fetching
            .finally(() => {
                loadedCount++; // Increment the count of loaded components
                if (loadedCount === includes.length) {
                    onComplete(); // Call the callback function when all components are loaded
                }
            });
    });
}
