const currencyEl_one = document.getElementById("currency-one")
const amountEl_one = document.getElementById("amount-one")
const currencyEl_two = document.getElementById("currency-two")
const amountEl_two = document.getElementById("amount-two")
const rateEl = document.getElementById("rate")
const swap = document.getElementById("swap")



// Fetch exchange rates and update the DOM
const calculator = () => {
  const currency_one = currencyEl_one.value
  const currency_two = currencyEl_two.value

  fetch(`https://v6.exchangerate-api.com/v6/e6d10846b02b1e5bb88e257a/latest/${currency_one}`)
  .then(res => res.json())
  .then(data => {
    const rate = data.conversion_rates[currency_two]
    rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`
    amountEl_two.value = (amountEl_one.value * rate).toFixed(2)
  })
}


// Events Listeners
currencyEl_one.addEventListener("change", calculator)
amountEl_one.addEventListener("input", calculator)
currencyEl_two.addEventListener("change", calculator)
amountEl_two.addEventListener("input", calculator)
swap.addEventListener("click", ()=> {
  const temp = currencyEl_one.value
  currencyEl_one.value = currencyEl_two.value
  currencyEl_two.value = temp
  calculator()
})


calculator()
