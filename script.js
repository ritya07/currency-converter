// Currency conversion rates (dummy data for this example)
const exchangeRates = {
    USD: {
        EUR: 0.85,
        GBP: 0.75,
        INR: 74.45,
        JPY: 110.53,
        USD: 1
    },
    EUR: {
        USD: 1.18,
        GBP: 0.88,
        INR: 87.62,
        JPY: 129.53,
        EUR: 1
    },
    GBP: {
        USD: 1.33,
        EUR: 1.14,
        INR: 99.59,
        JPY: 147.10,
        GBP: 1
    },
    INR: {
        USD: 0.013,
        EUR: 0.011,
        GBP: 0.010,
        JPY: 1.47,
        INR: 1
    },
    JPY: {
        USD: 0.009,
        EUR: 0.0077,
        GBP: 0.0068,
        INR: 0.68,
        JPY: 1
    }
};

function convertCurrency() {
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    if (amount === "" || amount <= 0) {
        document.getElementById("result").innerText = "Please enter a valid amount";
        return;
    }

    const conversionRate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = amount * conversionRate;

    document.getElementById("result").innerText =
        `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
}
