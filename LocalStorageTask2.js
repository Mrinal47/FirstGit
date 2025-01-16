function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    const user = {
        username,
        email,
        phone
    };

    // Save user details to localStorage
    localStorage.setItem('User Details', JSON.stringify(user));
}

module.exports = handleFormSubmit;