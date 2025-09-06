document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("i0xQTXgeDg1EOYhB3"); // Replace with your actual EmailJS public key

    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        let formData = new FormData(this);
        let userEmail = formData.get("email"); // Get user email input

        let button = this.querySelector("button");
        let loader = button.querySelector(".loader");
        let btnText = button.querySelector(".btn-text");
        let statusMessage = document.getElementById("statusMessage");

        // Show loading animation
        loader.style.display = "inline-block";
        btnText.style.display = "none";
        loader.classList.add("rotate");

        let templateParams = {
            name: formData.get("name"),
            email: userEmail, // User's email for reply
            subject: formData.get("subject"),
            message: formData.get("message"),
            reply_to: userEmail // Ensure reply email is set correctly
        };

        emailjs.send("service_vpknuv3", "template_b97mknq", templateParams)
            .then(function (response) {
                console.log("SUCCESS!", response.status, response.text);
                statusMessage.innerHTML = "✅ Message sent successfully!";
                statusMessage.className = "success";
            })
            .catch(function (error) {
                console.error("FAILED...", error);
                statusMessage.innerHTML = "❌ Failed to send message. Please try again.";
                statusMessage.className = "error";
            })
            .finally(() => {
                // Hide loader after 2 seconds
                setTimeout(() => {
                    loader.style.display = "none";
                    btnText.style.display = "inline";
                    loader.classList.remove("rotate");
                }, 2000);
                document.getElementById("contactForm").reset(); // Reset form fields
            });
    });
});
