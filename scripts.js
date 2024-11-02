// Array of technical-sounding loading messages
const loadingMessages = [
    "Initializing system protocols...",
    "Loading kernel modules...",
    "Synchronizing network adapters...",
    "Establishing secure connections...",
    "Configuring user interface modules...",
    "Retrieving system configuration...",
    "Optimizing memory allocation...",
    "Updating registry values...",
    "Allocating resources to virtual machines...",
    "Starting daemon processes...",
    "Applying security patches...",
    "Enabling firewall settings...",
    "Parsing environment variables...",
    "Running garbage collection...",
    "Setting up temporary directories...",
    "Scanning for hardware changes...",
    "Synchronizing time with NTP server...",
    "Loading asset libraries...",
    "Encrypting data packets...",
    "Compressing system files...",
    "Executing background tasks...",
    "Mapping network drives...",
    "Compiling configuration files...",
    "Indexing system files...",
    "Performing diagnostics...",
    "Authenticating system credentials...",
    "Mounting virtual drives...",
    "Applying user preferences...",
    "Setting up local server instances...",
    "Initializing display settings...",
    "Connecting to mainframe...",
    "Cleaning up old log files...",
    "Configuring secure protocols...",
    "Loading biometric data...",
    "Performing system checks...",
    "Updating software dependencies...",
    "Loading AI modules...",
    "Encrypting user data...",
    "Verifying integrity of files...",
    "Initializing user access controls...",
    "Resolving DNS queries...",
    "Configuring GPU settings...",
    "Setting up virtualization environment...",
    "Checking CPU temperature...",
    "Downloading system updates...",
    "Rebuilding cache...",
    "Registering system components...",
    "Synchronizing with cloud backup...",
    "Performing system integrity checks...",
    "Executing background scripts..."
];

// Get elements by class and ID
const loadingMessageElement = document.querySelector(".loading-message");
const percentageElement = document.querySelector(".percentage");
const progressElement = document.querySelector(".progress");

// Function to display random loading messages
function changeLoadingMessage() {
    const randomIndex = Math.floor(Math.random() * loadingMessages.length);
    loadingMessageElement.innerText = loadingMessages[randomIndex];
}

// Function to simulate loading percentage
let percentage = 0;
function updatePercentage() {
    // Increment percentage randomly between 1 and 5
    percentage += Math.floor(Math.random() * 5) + 1;
    if (percentage >= 100) {
        percentage = 0; // Reset to 0 to keep it going indefinitely
    }
    percentageElement.innerText = `${percentage}%`;
    progressElement.style.width = `${percentage}%`;
}

// Set intervals for updating messages and percentage
setInterval(changeLoadingMessage, 2000); // Every 2 seconds
setInterval(updatePercentage, 500); // Every 0.5 seconds
