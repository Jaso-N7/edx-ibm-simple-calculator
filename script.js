let compute = () =>
{
    var principal = document.getElementById("principal").value
    var rate = document.getElementById("rate").value
    var years = document.getElementById("years").value
    var interest = principal * years * rate / 100

    var year = new Date().getFullYear() + parseInt(years)
}

let updateRate = () => {
    var rateval = document.getElementById("rate").value
    document.getElementById("rate_val").innerText = rateval
}