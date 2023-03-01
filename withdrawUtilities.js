document.getElementById('submitWithdraw').addEventListener('click', function(){
    const newWithdrawAmount = getValueByInputField('withdraw');
    if(isNaN(newWithdrawAmount)){
        alert('please include a valid number');
        return;
    }

    const previousWithdraw = getValueByBoxText('withdrawText');
    const previousBalanceText = getValueByBoxText('balance');

    if(newWithdrawAmount > previousBalanceText){
        alert('you do not have that much money');
        return;
    }

    const currentWithdrawAmount = previousWithdraw + newWithdrawAmount;
    getTextInBox('withdrawText', currentWithdrawAmount);

    
    const currentWithdrawText = previousBalanceText - newWithdrawAmount;
    getTextInBox('balance', currentWithdrawText);
})