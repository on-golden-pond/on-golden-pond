// JavaScript for the Copy button functionality
document.getElementById("copy_button").addEventListener("click", function() {
    var email = document.getElementById("contact_email").innerText; // Get the email text
    navigator.clipboard.writeText(email).then(function() {
      alert("Email copied to clipboard!");
    }, function(err) {
      console.error('Error copying email to clipboard: ', err);
    });
  });
  if (!HTMLDivElement.prototype.showPopover) {
    console.log("Popover API not supported on this device/browser.");
    document.querySelectorAll('[popover]').style.display = 'none'; // Hides the popover
    document.getElementById('contact').style.display = 'none'; // Hides the button
} else {
    console.log("Popover API is supported!");
}