// JavaScript for the Copy button functionality
document.getElementById("copy_button").addEventListener("click", function() {
    var email = document.getElementById("contact_email").innerText; // Get the email text
    navigator.clipboard.writeText(email).then(function() {
      alert("Email copied to clipboard!");
    }, function(err) {
      console.error('Error copying email "' + email + '" to clipboard: ', err);
    });
  });