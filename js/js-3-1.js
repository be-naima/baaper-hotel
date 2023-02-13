document.getElementById('btn-deposit').addEventListener('click' , function(){
const deposit = document.getElementById('deposit-field');
const newDepositAmount = parseFloat(deposit.value);
const depositTotalElement = document.getElementById('deposit-total');
const previousDepositTotal = parseFloat(depositTotalElement.innerText);
const currentDepositAmount = newDepositAmount + previousDepositTotal;
depositTotalElement.innerText = currentDepositAmount;
const balance = document.getElementById('balance');
const preBalance = parseFloat(balance.innerText)
const newBalance = preBalance + newDepositAmount ;
balance.innerText = newBalance;
deposit.value ='';
})