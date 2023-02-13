document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdraw = document.getElementById('withdraw-field')
    const newWithdraw = parseFloat(withdraw.value);
    const preWithdraw = parseFloat(document.getElementById('withdraw-total').innerText);
    const currentWith = newWithdraw + preWithdraw;
    document.getElementById('withdraw-total').innerText = currentWith;
    const balance = parseFloat(document.getElementById('balance').innerText);
    const newbalance = balance - newWithdraw;
    document.getElementById('balance').innerText = newbalance;
    withdraw.value ='';
})