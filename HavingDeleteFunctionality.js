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
    console.log(obj);
    localStorage.setItem(obj.email, JSON.stringify(obj));
    showUserOnScreen(obj);
}

function showUserOnScreen(obj) {
    const parentElem = document.querySelector('ul');
    const childElem = document.createElement('li');
    childElem.textContent = obj.username + ' - ' + obj.email + ' - ' + obj.phone;
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick= () => {
        localStorage.removeItem(obj.email);
        parentElem.removeChild(childElem);
    }
    childElem.appendChild(deleteButton);
    parentElem.appendChild(childElem);
}

module.exports = handleFormSubmit;