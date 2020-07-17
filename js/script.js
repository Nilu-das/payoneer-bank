//login button evennt creat
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function() {
        const loginArea = document.getElementById("login-area");
        loginArea.style.display = "none";
        const transactionArea = document.getElementById("transaction-area");
        transactionArea.style.display = "block";
    })
    //deposit button event creat
const depositBtn = document.getElementById("addMoney");
depositBtn.addEventListener("click", function() {
    const depositAmount = document.getElementById("depositAmount").value;
    const depositNumber = parseFloat(depositAmount);


    const currentDeposit = document.getElementById("currentDeposit").innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDepositAmount = depositNumber + currentDepositNumber;
    document.getElementById("currentDeposit").innerText = totalDepositAmount;

    const currentBalance = document.getElementById("currentBalance").innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = currentBalanceNumber + depositNumber;
    document.getElementById("currentBalance").innerText = totalBalance;


    document.getElementById("depositAmount").value = "";




})