// JavaScript for the Copy button functionality
document.getElementById("copy_button").addEventListener("click", function() {
    var email = document.getElementById("contact_email").innerText; // Get the email text
    navigator.clipboard.writeText(email).then(function() {
      alert("Email copied to clipboard!");
    }, function(err) {
      console.error('Error copying email to clipboard: ', err);
    });
  });

//Popover Behavior for outdated hardware
  const popoverElement = document.querySelector('[popover]');
  const fallbackElement = document.getElementById('contact-fallback');
  if (!HTMLDivElement.prototype.showPopover) {
    console.log("Popover API not supported on this device/browser.");
    document.querySelectorAll('.floating-button').forEach(function(button) {
      button.style.bottom = '20px';
    });
    fallbackElement.classList.remove('hidden');
} else {
    popoverElement.classList.remove('hidden');
    document.getElementById('contact').classList.remove('hidden');
    console.log("Popover API is supported!");
}