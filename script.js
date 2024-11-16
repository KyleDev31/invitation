// "No" button functionality
const noButton = document.getElementById('no-btn');
if (noButton) {
    noButton.addEventListener('click', () => {
        noButton.textContent = 'Yes';
    });
}

// "Proceed" button functionality
const proceedButton = document.getElementById('proceed-button');
if (proceedButton) {
    proceedButton.addEventListener('click', () => {
        console.log('Proceed button clicked');
        window.location.href = 'invitation.html'; // Ensure 'invitation.html' exists
    });
}

// "Back" button functionality
const backButton = document.getElementById('back-button');
if (backButton) {
    backButton.addEventListener('click', () => {
        console.log('Back button clicked');
        window.location.href = 'index.html'; // Ensure 'index.html' exists
    });
}

// "Yes" button functionality
const yesButton = document.getElementById('yes-btn');
if (yesButton) {
    // Function to create and animate hearts
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${Math.random() * 2 + 3}s`; // Random duration between 3-5 seconds
        document.body.appendChild(heart);

        // Remove the heart after the animation ends
        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }

    // Event listener for "Yes" button
    yesButton.addEventListener('click', () => {
        yesButton.style.backgroundColor = 'red'; // Turn the button red
        yesButton.style.color = 'white'; // Optional: change text color for contrast

        // Generate hearts every 300ms for 2 seconds
        let interval = setInterval(createHeart, 300);
        setTimeout(() => clearInterval(interval), 2000);

        // Display the message below the button
        const message = document.createElement('p');
        message.textContent = 'See you soon, Pau! PS. Date is changeable according to your free time.';
        message.style.color = '#333'; // Optional: style the message
        message.style.marginTop = '10px';
        yesButton.insertAdjacentElement('afterend', message); // Insert message below the button

        // Prevent multiple messages by disabling the button
        yesButton.disabled = true; // Disable further clicks
    });
}
