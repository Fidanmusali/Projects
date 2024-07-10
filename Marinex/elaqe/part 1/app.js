// const email = document.getElementById("email");
// const name = document.getElementById("name");
// const topic = document.getElementById("topic");
// const message = document.getElementById("message");

const form = document.getElementById("form");

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nameInp = document.getElementById('name').value;
    const emailInp = document.getElementById('email').value;
    const topicInp = document.getElementById('topic').value;
    const messageInp = document.getElementById('message').value;

    const userData = {
        name: nameInp,
        topic: topicInp,
        email: emailInp,
        message: messageInp
    };
    const url = 'http://localhost:3000/users';
    axios.post(url,userData)
        .then(response => {
            console.log('Data sent:', response.data);
            form.reset();
        })
})
