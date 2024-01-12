function findAndClickButton() {
    var buttonText = "Ignorer";
    var buttonClass = "ytp-button";

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

setInterval(findAndClickButton, 1000); // check the button every second