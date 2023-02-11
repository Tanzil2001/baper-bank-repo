
document.getElementById('btn-withdraw').addEventListener('click', function(){
   const withdrawFild = document.getElementById('Withdraw-fild');
    const withdrawFildString = withdrawFild.value;
    const withdrawFildAmount = parseFloat(withdrawFildString);
    
    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawAmountString = withdrawAmount.innerText;
    const totalWithdraw = parseFloat(withdrawAmountString);

    const currentWithdrawTotal = totalWithdraw + withdrawFildAmount;
    withdrawAmount.innerText = currentWithdrawTotal;

    const balancePreTotal = document.getElementById('total-balance');
    const balancePreTotalString = balancePreTotal.innerText;
    const balanceNewTotal = parseFloat(balancePreTotalString);

    const currentPreBalanceTotal = balanceNewTotal - withdrawFildAmount;
    balancePreTotal.innerText = currentPreBalanceTotal;

    withdrawFild.value = '';
})