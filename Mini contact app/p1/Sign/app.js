const form = document.getElementById('form');
const displayArea = document.getElementById('displayArea');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nameInp = document.getElementById('name').value;
    const familyInp = document.getElementById('family').value;
    const telInp = document.getElementById('tel').value;
    const emailInp = document.getElementById('email').value;
    const noteInp = document.getElementById('note').value;

    const userData = {
        name: nameInp,
        family: familyInp,
        tel: telInp,
        mail: emailInp,
        note: noteInp
    };
    const url = 'http://localhost:3000/users';
    axios.post(url,userData)
        .then(response => {
            console.log('Data sent:', response.data);
            form.reset();
        })

});