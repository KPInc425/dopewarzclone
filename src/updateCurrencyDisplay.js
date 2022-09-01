const formatter = new Intl.NumberFormat({
    style: 'currency'
});

const updateCurrencyDisplay = (selector, value) => {
    const currencyDisplay = document.getElementById(selector);
    // console.log(value);
    let newValue = formatter.format(value.toFixed(2));
    // console.log(newValue);
    // console.log(currencyDisplay);
    currencyDisplay.textContent = `$${newValue}`;
};

export default updateCurrencyDisplay;