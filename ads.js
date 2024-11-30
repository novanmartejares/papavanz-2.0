
// Array of ad URLs
const adLinks = [
    'https://paypou.com/watch/0//84936981/tt32643879/',
    'https://cutpu.com/watch/1//84936981/tt10919420/'
 
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
