const navlink=document.querySelectorAll('.nav-link');

navlink.forEach(link => {
    link.addEventListener('click',function(){

        navlink.forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    })
})

function showSidemenu(){
    const sidebar=document.querySelector('.side-menu');
    sidebar.style.display='flex';
}

function hideSidemenu(){
    const sidebar=document.querySelector('.side-menu');
    sidebar.style.display='none';
}


    document.querySelector('.send').addEventListener('click', function (e) {
        e.preventDefault(); // Prevent page reload
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('e-mail').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
       
        const scriptURL = 'https://script.google.com/macros/s/{AKfycbwl4ALNARRqB5nCaJGPImjkhrfKQ3iMDBlrfJwH3c3s}/exec';

        // Send data to Google Sheets
        fetch(scriptURL, {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                email: email,
                subject: subject,
                message: message
            })
        })
        .then(response => response.json())
        .then(response => {
            alert('Form submitted successfully!');
        })
        .catch(error => {
            console.error('Error!', error.message);
            alert('There was an error submitting the form');
        });
    });
