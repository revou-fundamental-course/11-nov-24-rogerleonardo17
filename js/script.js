
//ini logic banner

// Array of banner images
const bannerImages = [
    './img/banner1.jpg',
    './img/banner2.jpg',
    './img/banner3.jpg'
];

// Get the banner element
const banner = document.querySelector('.banner-autoslide');

// Set the initial image index
let currentIndex = 0;

// Function to change the background image
function changeBannerImage() {
    banner.style.backgroundImage = `url(${bannerImages[currentIndex]})`;

    // Update the index to the next image, and loop back to the first image
    currentIndex = (currentIndex + 1) % bannerImages.length;
}

// Change the background image every 5 seconds
setInterval(changeBannerImage, 5000);

// Initialize the first banner image
changeBannerImage();

// ini logic form contact us

document.getElementById('submitBtn').addEventListener('click', function(event) {
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const interest = document.getElementById('interest').value;

    // Validation flag
    let valid = true;
    let errorMessage = '';

    // Validate name
    if (name === '') {
        valid = false;
        errorMessage += 'Please enter your name.\n';
    }

    // Validate email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === '') {
        valid = false;
        errorMessage += 'Please enter your email address.\n';
    } else if (!emailPattern.test(email)) {
        valid = false;
        errorMessage += 'Please enter a valid email address.\n';
    }

    // Validate interest
    if (interest === '') {
        valid = false;
        errorMessage += 'Please select your travel destination of interest.\n';
    }

    // If form is invalid, display error messages
    if (!valid) {
        alert(errorMessage);
        event.preventDefault(); // Prevent form submission
    } else {
        alert('Form submitted successfully!');
        // You can submit the form here, or handle the data further
        // document.getElementById('contactForm').submit(); // Uncomment to submit the form
    }
});



