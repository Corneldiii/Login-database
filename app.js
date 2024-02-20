document.addEventListener('DOMContentLoaded', function () {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const Gmail = document.getElementById('Gmail');
    const message = document.getElementById('message');
    const sendBUt = document.getElementById('send-button');
    const buttonSubmit = document.getElementById('button-submit');
    const usernameMessage = document.querySelector('.username-message');
    const GmailMessage = document.querySelector('.Gmail-message');
    const passwordMessage = document.querySelector('.password-message');
    let petunjuk = true;


    username.addEventListener('input', function () {
        const email = username.value;

        if (email.includes('@')) {
            usernameMessage.textContent = '';
            petunjuk = true;
        } else {
            usernameMessage.textContent = 'Email harus mengandung "@" !!';
            petunjuk = false;
        }
    });

    buttonSubmit.addEventListener('click', function () {

        if (username.value != '' && password.value != '' && petunjuk==true) {
            username.value = '';
            password.value = '';
        } else if (petunjuk != true) {
            alert('Isi Email dengan benar!!');
            usernameMessage.textContent = '';
            username.value = '';
            password.value = '';
        } else if (username.value == '') {
            alert('Isi Email yang kosong!!');
            usernameMessage.textContent = '';
            username.value = '';
            password.value = '';
        } else {
            alert('Isi Password yang kosong!!');
            username.value = '';
            password.value = '';
        }

    });

    sendBUt.addEventListener('click', function () {
        Gmail.value = '';
        message.value = '';
    });



    Gmail.addEventListener('input', function () {
        const alamat = Gmail.value;

        if (alamat.includes('@')) {
            GmailMessage.textContent = '';
        } else {
            GmailMessage.textContent = 'Email harus mengandung "@"!!';
        }
    });



    password.addEventListener('input', function () {
        const passwordValue = password.value;
        const passLength = passwordValue.length;

        if (passLength >= 6) {
            passwordMessage.textContent = '';
        } else {
            passwordMessage.textContent = 'Password minimal 6 karakter!!';
        }
    });
});

const toggle = document.querySelector('.toggle-back');
const toggleFlip = document.querySelector('.toggle-flipback');
const toggleBack = document.querySelector('.flip-container');


toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    toggleBack.classList.toggle('active');
    toggleFlip.classList.remove('active');
});

toggleFlip.addEventListener('click', () => {
    toggleFlip.classList.toggle('active');
    toggleBack.classList.toggle('active');
    toggle.classList.remove('active');
});

// menghubungkan ke database

// const oracledb = require('oracledb');

// const connectionOrcl = {
//     user: 'corneldi',
//     password: 'yudividi12',
//     connectionString: '//localhost:1521/orcl' // Perhatikan perubahan pada format koneksi
// };

// oracledb.getConnection(connectionOrcl, function(err, connection) {
//     if (err) {
//         console.error('Error connecting to database: ' + err.message);
//         return;
//     }

//     console.log('Connected to database.');

//     connection.close(function(err) {
//         if (err) {
//             console.error('Error closing connection: ' + err.message);
//             return;
//         }

//         console.log('Connection closed.');
//     });
// });


