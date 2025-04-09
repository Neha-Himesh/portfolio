export function loadComponents(includes, onComplete) {
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
            .finally(() => {
                loadedCount++;
                if (loadedCount === includes.length) {
                    onComplete();
                }
            });
    });
}
