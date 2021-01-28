const loginBtn = document.getElementById('login-btn');
const depositBtn = document.getElementById('deposit-btn');
const withdrawBtn = document.getElementById('withdraw-btn');

//login button event handler

loginBtn.addEventListener('click', function () {
    const inputName = document.getElementById('input-name').value;
    const inputEmail = document.getElementById('input-email').value;
    const inputPassword = document.getElementById('input-password').value;
    if( inputName === '' && inputEmail === '' && inputPassword === ''){
        const loginMsg = document.getElementById('login-msg');
        loginMsg.innerText = 'You should fill all fields';
    }
    else{
        const loginArea = document.getElementById('login-area');
    const transactionArea = document.getElementById('transaction-area');
    loginArea.style.display = 'none';
    transactionArea.style.display = 'block';
    document.body.style.padding = '0 50px'
    
    const userName = document.getElementById('user-name');
    userName.innerText = 'Mr. ' + inputName + ' Bank Account Details';
    }
})

//deposit button event handler

depositBtn.addEventListener('click', function () {
    const inputDeposit = document.getElementById('input-deposit').value;
    const inputDepositNumber = parseFloat(inputDeposit);
    const currentDeposit = document.getElementById('current-deposit').innerText;
    const currentDepositNumber = parseFloat(currentDeposit);

    if (isNaN(inputDepositNumber)) {
        const depositLimitMsg = document.getElementById('deposit-limit-msg');
        depositLimitMsg.innerText = 'You should Enter Number';
        document.getElementById('input-deposit').value = '';
    }
    else {
        if (inputDepositNumber > 0 && inputDepositNumber <= 50000) {
            const totalDeposit = inputDepositNumber + currentDepositNumber;
            document.getElementById('current-deposit').innerText = totalDeposit;
            document.getElementById('input-deposit').value = '';

            const currentBalance = document.getElementById('current-balance').innerText;
            const currentBalanceNumber = parseFloat(currentBalance);
            const currentBalanceTotal = currentBalanceNumber + inputDepositNumber;
            document.getElementById('current-balance').innerText = currentBalanceTotal;
        }
        else {
            const depositLimitMsg = document.getElementById('deposit-limit-msg');
            depositLimitMsg.innerText = 'You should deposit greater than 0 and less than 50000';
            document.getElementById('input-deposit').value = '';
        }
    }
})

//withdraw button event handler

withdrawBtn.addEventListener('click', function () {
    const inputWithdraw = document.getElementById('input-withdraw').value;
    const inputWithdrawNumber = parseFloat(inputWithdraw);
    const currentWithdraw = document.getElementById('current-withdraw').innerText;
    const currentWithdrawNumber = parseFloat(currentWithdraw);
    const currentBalance = document.getElementById('current-balance').innerText;
    const currentBalanceNumber = parseFloat(currentBalance);

    if (isNaN(inputWithdrawNumber)) {
        const withdrawLimitMsg = document.getElementById('withdraw-limit-msg');
        withdrawLimitMsg.innerText = 'You Should Enter Number';
        document.getElementById('input-withdraw').value = '';
    }
    else {
        if (currentBalanceNumber >= inputWithdrawNumber) {
            if (inputWithdrawNumber > 0 && inputWithdrawNumber <= 20000) {
                const totalWithdraw = inputWithdrawNumber + currentWithdrawNumber;
                document.getElementById('current-withdraw').innerText = totalWithdraw;
                document.getElementById('input-withdraw').value = '';


                const currentBalanceTotal = currentBalanceNumber - inputWithdrawNumber;
                document.getElementById('current-balance').innerText = currentBalanceTotal;
            }
            else {
                const withdrawLimitMsg = document.getElementById('withdraw-limit-msg');
                withdrawLimitMsg.innerText = 'You able to withdraw $20000 at a time';
                document.getElementById('input-withdraw').value = '';
            }
        }
        else {
            const withdrawLimitMsg = document.getElementById('withdraw-limit-msg');
            withdrawLimitMsg.innerText = 'You have only $' + currentBalanceNumber;
            document.getElementById('input-withdraw').value = '';
        }
    }



})