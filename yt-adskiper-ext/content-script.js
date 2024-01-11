function findAndClickButton() {
    console.log('There 2');
    var buttonText = "Ignorer";
    var buttonClass = "ytp-ad-skip-button-modern ytp-button";

    var buttons = document.querySelectorAll('.' + buttonClass);

    buttons.forEach(function (button) {
        if (button.textContent.trim() === buttonText) {
            button.click();
        }
    });

    if (buttons.length === 0) {
        console.log('Button not found on the page.');
    }
}

// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', function () {
    // Find and click the button immediately
    findAndClickButton();
    console.log('There 1');
    // Use MutationObserver to wait for changes in the DOM
    var observer = new MutationObserver(function (mutations) {
        console.log('domcontentload event fired');
        mutations.forEach(function (mutation) {
            // Check if the button is added to the DOM
            if (mutation.addedNodes.length > 0) {
                findAndClickButton();
            }
        });
    });

    // Configure and start the observer
    observer.observe(document.body, { childList: true, subtree: true });
    console.log('There 2');
});
console.log('Here I am');