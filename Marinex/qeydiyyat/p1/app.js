const form = document.getElementById('form');

form.addEventListener("submit", function (e) {
    e.preventDefault()

    const nameInp = document.getElementById("name").value;
    const surnameInp = document.getElementById("surname").value;
    const dateInp = document.getElementById("date").value;
    const genderInp = document.getElementById("gender").value;
    const countryInp = document.getElementById("country").value;
    const finInp = document.getElementById("fin").value;
    const cityInp = document.getElementById("city").value;
    const telInp = document.getElementById("tel").value;
    const adressInp = document.getElementById("adress").value;
    const filialInp = document.getElementById("filial").value;
    const emailInp = document.getElementById("email").value;
    const parolInp = document.getElementById("parol").value;
    const hiddenparalInp = document.getElementById("hiddenparal").value;


    const userData = {
        name: nameInp,
        surname: surnameInp,
        date: dateInp,
        gender: genderInp,
        country: countryInp,
        fin: finInp,
        city: cityInp,
        tel: telInp,
        adress: adressInp,
        filial: filialInp,
        email: emailInp,
        parol: parolInp,
        hiddenparal: hiddenparalInp
    }


    const url = 'http://localhost:3000/users'

    axios.post(url, userData)
        .then(response => {
            console.log('Data sent:', response.data);
            form.reset();
        })

})