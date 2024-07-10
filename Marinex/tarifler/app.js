const inputs = document.getElementById('inputs');
const current = document.getElementById('current');

inputs.addEventListener('submit', function (event) {
    event.preventDefault();

    const country = document.getElementById('country').value;

    const en = +document.getElementById('en').value;
    const hundurluk = +document.getElementById('hundurluk').value;
    const uzunluq = +document.getElementById('uzunluq').value;
    const ceki = +document.getElementById('ceki').value;

    let result;
    if (country === 'Turkiye') {
        result = Math.floor(((en + hundurluk + uzunluq + ceki) * 2) * 19.23);
    } else if (country === 'Amerika') {
        result = Math.floor(((en + hundurluk + uzunluq + ceki) * 2) / 1.70);
    } else if (country === 'Azerbaycan') {
        result = (en + hundurluk + uzunluq + ceki) * 2;
    } else {
        result = "Nəsə yanlış var";
    }

    current.textContent = ` mebleg ;${result}`;
});