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
    const depositNumber = getInput("depositAmount")
    updateSpanTag("currentDeposit", depositNumber);
    updateSpanTag("currentBalance", depositNumber);
    document.getElementById("depositAmount").value = "";
})
const withdrawMoney = document.getElementById("withdrawMoney");
withdrawMoney.addEventListener("click", function() {
    const amountWithdrawNumber = getInput("amountWithdraw")
    updateSpanTag("withdrawAmount", amountWithdrawNumber);
    updateSpanTag("currentBalance", -1 * amountWithdrawNumber);
    document.getElementById("amountWithdraw").value = "";
})

function getInput(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

function updateSpanTag(id, number) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = number + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}