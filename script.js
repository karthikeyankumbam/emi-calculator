function calculateEMI() {
    var loanAmount = parseFloat(document.getElementById("loanAmount").value);
    var interestRate = parseFloat(document.getElementById("interestRate").value);
    var loanTenure = parseInt(document.getElementById("loanTenure").value);

    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTenure)) {
        document.getElementById("result").innerHTML = "Please enter valid values.";
        return;
    }

    var monthlyInterestRate = interestRate / (12 * 100);
    var emi = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTenure)) /
              (Math.pow(1 + monthlyInterestRate, loanTenure) - 1);

    var totalPayment = emi * loanTenure;
    var totalInterest = totalPayment - loanAmount;

    document.getElementById("result").innerHTML = "Your Monthly EMI: ₹" + emi.toFixed(2) +
                                                  "<br>Total Payment: ₹" + totalPayment.toFixed(2) +
                                                  "<br>Total Interest Paid: ₹" + totalInterest.toFixed(2);
}
