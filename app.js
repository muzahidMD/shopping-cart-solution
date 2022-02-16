function updateProductNumber(product, price, isIncrising) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncrising) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber - 1);
    }
    productInput.value = productNumber;
    // update Total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    // calculate total 
    calculatetotal();

}

function getInputValue(product) {
    // const phoneNumber = document.getElementById('phone-total').value;
    const prouctInput = document.getElementById(product + '-number');
    const productNumber = parseInt(prouctInput.value);
    return productNumber;
}

function calculatetotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // update on the html
    document.getElementById('subTotal').innerText = subTotal;
    document.getElementById('tax-amound').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

// handle phone incrise decrise events 
document.getElementById('phone-Plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false)
})

// handle case incrise decrise events 
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
})
document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
})