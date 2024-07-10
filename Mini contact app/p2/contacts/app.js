const modes = document.getElementById("modes");

modes.onclick = () => {
    if (document.body.classList.contains("dark")) {
        document.body.classList.remove("dark")
        document.body.classList.add("light")
    } else {
        document.body.classList.remove("light")
        document.body.classList.add("dark")
    }
}


const form = document.getElementById('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nameInp = document.getElementById('name').value;
    const telInp = document.getElementById('tel').value;

    const userData = {
        name: nameInp,
        tel: telInp,
    };
    console.log(userData);
    const url = 'http://localhost:8080/contacts';
    const contactInfo = document.getElementById("contactInfo")
    axios.get(url, userData).then(({ data }) => {
        contactInfo.innerHTML += `  <div id="person1" class="person1">
                    <img src="./img/person.png" alt="" srcset="">
                    <span>
                        <h3>${data.name}</h3>
                        <p>${data.tel}</p>
                    </span>
                </div>`

    })

    axios.post(url, userData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });



});