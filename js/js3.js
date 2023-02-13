document.getElementById('btn-submit').addEventListener('click',function(){
    console.log('clicked')
    const emailField  = document.getElementById('user-email');
const passwordField = document.getElementById('user-password');
const email = emailField.value;
console.log(email)
const pw = passwordField.value;
console.log(pw)


if(email === 'naima@yahoo.com' && pw === 'nemo')
window.location.href = ('index3-1.html');
else
alert('Geeeeeeeeeeet Looooooost')
})




