
// Array of ad URLs
const adLinks = [
    'https://bitly.cx/papawatch2ndads',
    'https://bitly.cx/papawatch123'
 
    // Add more ad links as needed
];

// Variable to track if the ads have been triggered
let adsTriggered = false;

// Function to handle the ad trigger
function handleAdTrigger() {
    if (!adsTriggered) {
        adLinks.forEach(link => {
            window.open(link, '_blank'); // Open each ad link in a new tab/window
        });
        adsTriggered = true;
    }
}

// Event listener for clicks on the document
document.addEventListener('click', function() {
    handleAdTrigger();
});
