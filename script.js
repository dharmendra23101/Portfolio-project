

console.log("Form script loaded.");
document.getElementById("contect").addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const mail = document.getElementById("mail").value;
    const message = document.getElementById("message").value;


    const response = { name, mail, message, date: new Date().toISOString() };
    const responses = JSON.parse(localStorage.getItem('responses')) || [];

    responses.push(response);
    localStorage.setItem("responses", JSON.stringify(responses));
    console.log(responses);
    this.reset();
    userresponse()
});

function formatDateTime(dateString) {
    let date = new Date(dateString);
    
    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    let year = date.getFullYear();
    
    let hours = String(date.getHours()).padStart(2, '0');
    let minutes = String(date.getMinutes()).padStart(2, '0');
    let seconds = String(date.getSeconds()).padStart(2, '0');
    
    return `${day}/${month}/${year} - ${hours}:${minutes}:${seconds}`;
}

function userresponse() {
    const responsContainer = document.getElementById("user-response");
    const responses = JSON.parse(localStorage.getItem('responses')) || [];
    responsContainer.innerHTML = "";

    responses.forEach(response => {
        const resposeElement = document.createElement("div");
        resposeElement.innerHTML = `
    <p> Name : ${response.name} </P>
    <p> Email : ${response.mail} </P>
    <p> Message : ${response.message} </P>
    <p> Date : ${formatDateTime(response.date)} </P>
    <hr>
    `
        responsContainer.append(resposeElement);
    });
}
userresponse()
