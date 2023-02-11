
document.getElementById('btn-withdraw').addEventListener('click', function(){
   const withdrawFild = document.getElementById('Withdraw-fild');
    const withdrawFildString = withdrawFild.value;
    const withdrawFildAmount = parseFloat(withdrawFildString);

    withdrawFild.value = '';

    if(isNaN(withdrawFildAmount)){
        alert('please provide a valid number');
        return;
    }

    
    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawAmountString = withdrawAmount.innerText;
    const totalWithdraw = parseFloat(withdrawAmountString);

    
// ......niche line

    const balancePreTotal = document.getElementById('total-balance');
    const balancePreTotalString = balancePreTotal.innerText;
    const balanceNewTotal = parseFloat(balancePreTotalString);

    if(withdrawFildAmount > balanceNewTotal){
        alert('you cant withdraw more then you have')
        return;
    }

    
    const currentWithdrawTotal = totalWithdraw + withdrawFildAmount;
    withdrawAmount.innerText = currentWithdrawTotal;

   const currentPreBalanceTotal = balanceNewTotal - withdrawFildAmount;
    balancePreTotal.innerText = currentPreBalanceTotal;
  
    

})

