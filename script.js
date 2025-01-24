// JavaScript for the Copy button functionality
document.getElementById("copy_button").addEventListener("click", function() {
    var email = document.getElementById("contact_email").innerText; // Get the email text
    navigator.clipboard.writeText(email).then(function() {
      alert("Email copied to clipboard!");
    }, function(err) {
      console.error('Error copying email to clipboard: ', err);
    });
  });
//Popover Behavior for outdated hardware//
  const popoverElement = document.querySelector('[popover]');
  if (!HTMLDivElement.prototype.showPopover) {
    console.log("Popover API not supported on this device/browser.");
    document.getElementById('submit-pic-button').style.bottom = '20px';
} else {
    popoverElement.classList.remove('hidden');
    document.getElementById('contact').classList.remove('hidden');
    console.log("Popover API is supported!");
}