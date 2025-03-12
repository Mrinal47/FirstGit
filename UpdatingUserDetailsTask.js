function handleFormSubmit(event) {

    function editUserDetails(emailId, name, phonenumber, userId) {
        document.getElementById('email').value = emailId;
        document.getElementById('username').value = name;
        document.getElementById('phonenumber').value = phonenumber;

        deleteUser(userId);

    }

    function deleteUser(userId) {
        axios.delete("https://crudcrud.com/api/983cfc7c6a564d48a03d123c75c389e6/appointmentData")
            .then((response) => {
                removeUserFromScreen(userId);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    function removeUserFromScreen(emailId) {
        const parentNode = document.getElementById('listOfUsers');
        const childNodeToBeDeleted = document.getElementById(emailId);
        if (childNodeToBeDeleted) {
            parentNode.removeChild(childNodeToBeDeleted);
        }
    }

    document.getElementById('userForm').addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const name = document.getElementById('username').value;
        const phonenumber = document.getElementById('phonenumber').value;

        const userData = { email, name, phonenumber };

        axios.post("https://crudcrud.com/api/983cfc7c6a564d48a03d123c75c389e6/appointmentData", userData)
            .then((response) => {
                displayUserOnScreen(response.data);
                document.getElementById('userForm').reset();
                editUserId = null; // Clear the edit state
            })
            .catch((error) => {
                console.error("Error adding user:", error);
            });
    });

    function displayUserOnScreen(user) {
        const parentNode = document.getElementById('listOfUsers');
        const childHTML = `
            <div id="${user._id}">
                ${user.name} - ${user.email} - ${user.phonenumber}
                <button onclick="editUserDetails('${user.email}', '${user.name}', '${user.phonenumber}', '${user._id}')">Edit</button>
                <button onclick="deleteUser('${user._id}')">Delete</button>
            </div>
        `;
        parentNode.innerHTML += childHTML;
    }
}