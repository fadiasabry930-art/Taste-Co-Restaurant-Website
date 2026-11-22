export function validateContactForm (name, email, message) {

    if (name === "" || email === "" || message === "") {
        return " Please fill in all fields ";
    }

    else if (!email.includes("@") || !email.includes(".")) {
        return " Please enter a valid email "
    }

    else {
        return " Success! "
    }
}