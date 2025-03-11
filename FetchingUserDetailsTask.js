function handleFormSubmit(event) {
    window.addEventListener("DOMContentLoaded", () => {
        axios.get("https://crudcrud.com/api/fe6c19b77eff4c169dc19adc3837c48d/appointmentData")
            .then((response) => {
                console.log(response);

                for (var i = 0; i < response.data.length; i++) {
                    console.log(response.data[i]);
                }
            }).catch((error) => {
                console.log(error)
            });
    });
}