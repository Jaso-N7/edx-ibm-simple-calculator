let compute = () =>
{
    var p = document.getElementById("principal")
    var principal = p.value

    // Ensure user enters a Principal
    if (principal <= 0){
        alert("Enter a positive number")
        p.focus()
        return false;
    }

    var rate = document.getElementById("rate").value
    var years = document.getElementById("years").value
    var interest = principal * years * rate / 100

    var year = new Date().getFullYear() + parseInt(years)

    // console.log(interest + " in " + year)

    // Displays results of the calculation
    document.getElementById("result").innerHTML=
    "If you deposit <mark>" + principal + "</mark>,<br>" +
    "at an interest rate of <mark>" + rate + "%</mark>.<br>" +
    "You will receive an amount of <mark>" + interest + "</mark>,<br>" +
    "in the year <mark>" + year + "<mark>"

}

// Displays the rate once slider changes
let updateRate = () => {
    var rateval = document.getElementById("rate").value
    document.getElementById("rate_val").innerText = rateval
}