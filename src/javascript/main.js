function main() {
    const form = document.getElementById('formRegistration');
    const fullName = document.getElementById('fullName');
    const userPhone = document.getElementById('userPhone');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const data = `Name: ${fullName.value}, Phone: ${userPhone.value}`;
        const a = document.createElement('a');
        a.href = window.URL.createObjectURL(new Blob([data], { type: 'text/plain' }));
        a.download = 'data.txt';
        document.body.append(a);
        a.click();
    });
}

document.addEventListener('DOMContentLoaded', main);
