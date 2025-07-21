

// Alternative: If you want to keep the form submit event instead
function setupFormSubmission() {
    const form = document.querySelector('#contact form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        handleFormSubmit();
    });
}