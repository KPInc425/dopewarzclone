const formatter = new Intl.NumberFormat({
    style: 'currency'
});

const updateCurrencyDisplay = (selector, value) => {
    const currencyDisplay = document.getElementById(selector);
    let newValue = formatter.format(value);
    console.log(newValue);
    console.log(currencyDisplay);
    currencyDisplay.textContent = `$${newValue}`;
};

export default updateCurrencyDisplay;