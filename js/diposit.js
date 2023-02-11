document.getElementById('btn-diposit').addEventListener('click', function(){
    const dipositFild = document.getElementById('diposit-fild');
    const newDipositString = dipositFild.value;
    const newDiposit = parseFloat(newDipositString);

    const dipositAmount = document.getElementById('diposit-amount');
    const priviousAmountString =dipositAmount.innerText;
    const priviousAmount = parseFloat(priviousAmountString);

    const currentDeposit = priviousAmount + newDiposit;
    dipositAmount.innerText = currentDeposit;

    const getBalanceTotal = document.getElementById('total-balance');
    const balanceTotalString = getBalanceTotal.innerText;
    const balanceTotal = parseFloat(balanceTotalString);

    const currentBalanceTotal = balanceTotal + newDiposit;
    getBalanceTotal.innerText = currentBalanceTotal;

    dipositFild.value = '';
})