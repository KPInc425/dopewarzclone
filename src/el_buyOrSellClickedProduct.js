import displayBuySellUI from "./displayBuySellUI";

const el_buyOrSellClickedProduct = () => {
    const productNodeList = document.querySelectorAll('.availableProductData');

    productNodeList.forEach((node) => {
        node.addEventListener('click', () => {
            // console.log('click');
            // console.log(node);
            let productName = node.querySelector('.productName > p').textContent;
            // console.log(productName);
            let productQty = node.querySelector('.productQty > p').textContent;
            // console.log(productQty);
            let productPrice = node.querySelector('.productPrice > p').textContent;
            productPrice = Number(productPrice.slice(1).replace('/g', ''));
            console.log(productPrice);

            displayBuySellUI(productName, productQty, productPrice);
        })
    })
}

export default el_buyOrSellClickedProduct;