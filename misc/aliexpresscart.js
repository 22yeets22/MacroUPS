const cartItems = document.querySelectorAll('.cart-product-wrap-group-new');

const cartData = [];

cartItems.forEach(item => {
    const productLink = item.querySelector('a.cart-product-name-title');
    let productUrl = productLink?.href || '';
    if (productUrl.includes('?')) productUrl = productUrl.split('?')[0];
    const productName = productLink?.textContent.trim() || '';

    const quantityInput = item.querySelector('input.comet-v2-input-number-input');
    const quantity = quantityInput ? parseInt(quantityInput.value) : 0;

    const typeDiv = item.querySelector('div.skuStr');
    const type = typeDiv?.textContent.trim() || '';

    const priceDiv = item.querySelector('.cart-product-price-buynow .es--wrap--1Hlfkoj');
    const price = priceDiv ? priceDiv.textContent.trim().replace(/\s+/g, '') : '';

    cartData.push({ name: productName, url: productUrl, quantity: quantity, type: type, price: price });
});

const formattedList = cartData.map(d => 
    `- ${d.quantity}x of ${d.name}, TYPE ${d.type || 'N/A'}, PRICE ${d.price || 'N/A'}: ${d.url}`
).join('\n');

console.log(formattedList);
