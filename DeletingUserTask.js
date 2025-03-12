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