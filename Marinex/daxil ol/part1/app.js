
const form = document.getElementById('form');

form.addEventListener("submit", function (e) {
    e.preventDefault()

    const emailInp = document.getElementById("email").value;
    const parolInp = document.getElementById("parol").value;

    const userData = {
        email: emailInp,
        parol: parolInp
    }
    const url = 'http://localhost:3000/users'
    axios.post(url, userData).then(response => {
        console.log(response.data);
        form.reset()
    })

});