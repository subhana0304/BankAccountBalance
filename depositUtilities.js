

document.getElementById('submitDeposit').addEventListener('click', function(){
    const newDepositAmount = getValueByInputField('deposit');
    // console.log(newDepositAmount);
    if(isNaN(newDepositAmount)){
        alert('please include a valid number');
        return;
    }
    const previousDepositText = getValueByBoxText('depositText');
    // console.log(previousDepositText);

    const currentDepositText = previousDepositText + newDepositAmount;
    getTextInBox('depositText', currentDepositText);

    const previousBalanceText = getValueByBoxText('balance');
    // console.log(previousBalanceText);
    const currentBalanceText = previousBalanceText + newDepositAmount;
    getTextInBox('balance', currentBalanceText);
})