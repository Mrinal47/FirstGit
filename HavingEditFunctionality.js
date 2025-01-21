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
    
    event.target.username.value = '';
    event.target.email.value = '';
    event.target.phone.value = '';
    
    localStorage.setItem(obj.email, JSON.stringify(obj));
    showUserOnScreen(obj);
}

function showUserOnScreen(obj) {
    const parentElem = document.querySelector('ul');
    const childElem = document.createElement('li');
    childElem.textContent = obj.username + ' - ' + obj.email + ' - ' + obj.phone;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => {
        localStorage.removeItem(obj.email);
        parentElem.removeChild(childElem);
    }

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = () => {
        localStorage.removeItem(obj.email);
        parentElem.removeChild(childElem);

        const form = document.querySelector('form');
        form.username.value = obj.username;
        form.email.value = obj.email;
        form.phone.value = obj.phone;
    }
    childElem.appendChild(deleteButton);
    childElem.appendChild(editButton);
    parentElem.appendChild(childElem);
}

module.exports = handleFormSubmit;