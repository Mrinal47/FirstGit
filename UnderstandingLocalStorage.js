function handleFormSubmit(event) {
    event.preventDefault();

    // Collecting form data
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    // Storing data in local storage
    localStorage.setItem("Username", username);
    localStorage.setItem("Email", email);
    localStorage.setItem("Phone", phone);

}

module.exports = handleFormSubmit;