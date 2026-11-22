import { validateContactForm } from "./utils.js";

export function setupContactForm() {
    const form = document.getElementById("contactForm");
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const message = document.getElementById("message");
    const formMessage = document.getElementById("formMessage");

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const result = validateContactForm(
            name.value,
            email.value,
            message.value
        );

        if (result === "success") {
            formMessage.textContent = "Message sent successfully! Thank you for contacting us."
            formMessage.className = "success";

            form.reset();
        }


        else {
            formMessage.textContent = result;

            formMessage.className = "error";
        }

    });
    form.addEventListener("input", function () {
        formMessage.textContent = "";
        formMessage.className = ""
    })
}