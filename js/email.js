// Initialize EmailJS
(function() {
  emailjs.init("i0xQTXgeDg1EOYhB3"); // Replace with your EmailJS public key
})();

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  emailjs.sendForm("service_vpknuv3", "template_xvxtl0c", this)
    .then(() => {
      alert("Message sent successfully!");
      this.reset();
    }, (error) => {
      alert("Failed to send message: " + JSON.stringify(error));
    });
});
