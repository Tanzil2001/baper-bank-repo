
document.getElementById('btn-submit').addEventListener('click', function(){
    const emailFild = document.getElementById('user-email');
    const email = emailFild.value;
    const password = document.getElementById('user-password');
    const pass =password.value;
    if(email === 'tanzil@gmail.com' && pass === 'baperhotel'){
        location.href = 'bank.html';
    }
    else{
        alert('invalid email or password');
    }
})