document.getElementById("copy_button-page").addEventListener("click", function() {
    var email = document.getElementById("contact_email-page").innerText; // Get the email text
    navigator.clipboard.writeText(email).then(function() {
      alert("Email copied to clipboard!");
    }, function(err) {
      console.error('Error copying email to clipboard: ', err);
    });
  });
  document.getElementById("contact").style.display = "none";
  document.getElementById("contact-fallback").style.display = "none";