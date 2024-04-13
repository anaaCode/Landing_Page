
// Get references to the elements
const signInButton = document.querySelector('.switch-button');
const leftContainer = document.querySelector('.red-container');
const rightContainer = document.querySelector('.white-container');
const Paragraph = document.querySelector('.headline');
const HeadLine = document.querySelector('.paragraph');
// Add click event listener to the signInButton
signInButton.addEventListener('click', () => {
    // Toggle classes to slide containers
    leftContainer.classList.toggle('float-right');
    rightContainer.classList.toggle('float-left');

    // Change text and functionality of the button
    if (signInButton.textContent === 'SignIn') {
        signInButton.textContent = 'SignUp';
        
        signInButton.setAttribute('onclick', 'switchContainers()');
    } else {
        signInButton.textContent = 'SignIn';
        signInButton.setAttribute('onclick', 'switchContainers()');
    }
});

// Function to handle switching containers (just in case it's called separately)
function switchContainers() {
    rightContainer.classList.toggle('float-left');
    leftContainer.classList.toggle('float-right');

    if (signInButton.textContent === 'SignIn') {
        signInButton.textContent = 'SignUp';
        
        signInButton.setAttribute('onclick', 'switchContainers()');
    } else {
        signInButton.textContent = 'SignIn';
        signInButton.setAttribute('onclick', 'switchContainers()');
    }
}
