function showModal() {
  const mother = document.getElementById("mother").value;
  const gender = document.getElementById("gender").value;
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const location = document.getElementById("location").value;

  if (!mother || !gender || !firstName || !lastName || !phone || !email || !location) {
    alert("Please fill out all fields!");
    return;
  }

  const details = `
    Preferred Mother: ${mother}<br>
    Preferred Gender: ${gender}<br><br>
    First Name: ${firstName}<br>
    Last Name: ${lastName}<br>
    Phone: ${phone}<br>
    Email: ${email}<br>
    Location: ${location}
  `;
  document.getElementById("modalDetails").innerHTML = details;
  document.getElementById("confirmationModal").style.display = "block";
}

function closeModal() {
  document.getElementById("confirmationModal").style.display = "none";
}

function generateEmail() {
  closeModal(); // Close the modal before opening the email draft

  const mother = document.getElementById("mother").value;
  const gender = document.getElementById("gender").value;
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const location = document.getElementById("location").value;

  const recipient = "ongoldenpondkennel@gmail.com";
  const subject = encodeURIComponent("I am interested in purchasing a Doodle");
  const body = encodeURIComponent(
    `Hello! I would like to be added to a waiting list for a mini golden doodle:\n\n` +
    `Preferred mother: ${mother}\n` +
    `Preferred gender: ${gender}\n\n` +
    `My information is as follows:\n` +
    `First Name: ${firstName}\n` +
    `Last Name: ${lastName}\n` +
    `Phone: ${phone}\n` +
    `Email: ${email}\n` +
    `Location: ${location}`
  );

  const mailtoLink = `mailto:${recipient}?subject=${subject}&body=${body}`;
  window.location.href = mailtoLink;
}
