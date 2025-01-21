function handleFormSubmit(event) {
    event.preventDefault();

    const username = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;

    const obj = {
        username,
        email,
        phone
    };

    localStorage.setItem(obj.email, JSON.stringify(obj));
    showUserOnScreen(obj);
}

function showUserOnScreen(obj) {
    const parentElem = document.getElementById('listOfItems');
    const childElem = document.createElement('li');
    childElem.textContent = obj.username + ' - ' + obj.email + ' - ' + obj.phone;
    parentElem.appendChild(childElem);
}

module.exports = handleFormSubmit;