const form = document.querySelector("#contact-page main #contact-form form");
const thankYou = document.querySelector(
    "#contact-page main #contact-form #thank-you"
);
const failSend = document.querySelector(
    "#contact-page main #contact-form #fail-send"
);
emailjs.init("user_e5KWs7tkBUcUHRZ9K8fAt");

/** Submits the contact form information to EmailJS servie and if successful it will show
 * the thank you panel otherwise it shows fail send panel.
 */
form.addEventListener("submit", function(event) {
    event.preventDefault();
    emailjs
        .send("service_vhlc8f5", "template_k9s8pwo", {
            name: form.querySelector("#name").value,
            email: form.querySelector("#email").value,
            message: form.querySelector("#message").value
        })
        .then(
            function() {
                showThankYou();
            },
            function() {
                showFailSend();
            }
        );
});

/**
 * Hides the send feedback form and shows the Thank you panel
 */
function showThankYou() {
    form.classList.add("hide");
    thankYou.classList.add("show");
}

/**
 * Hides the send feedback form and shows the Send failed panel
 */
function showFailSend() {
    form.classList.add("hide");
    failSend.classList.add("show");
}
