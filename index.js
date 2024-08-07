document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');
    form.addEventListener('submit', async function(event) {
        event.preventDefault();
        alert("Submitted successfully")

        const fname = document.getElementById('fname').value;
        console.log('First Name:', fname);

        const lname = document.getElementById('lname').value;
        console.log('Last Name:', lname);

        const email = document.getElementById('email').value;
        console.log('Email:', email);

        // const query = document.getElementById('query').value
        const query = document.querySelector('input[name="query"]:checked').value;
        console.log('Query Type:', query);

        const message = document.getElementById('message').value;
        console.log('Message:', message);

        const consent = document.getElementById('consent').value;
        console.log('Consent:', consent);

        document.getElementById('form').reset();
    })
})