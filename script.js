let cart = [];
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
        const productCard = event.target.closest('.product-card');
        const product = {
            id: productCard.getAttribute('data-id'),
            name: productCard.getAttribute('data-name'),
            price: parseFloat(productCard.getAttribute('data-price')),
        };
        cart.push(product);
        updateCart();
    });
});

document.querySelector('.check').addEventListener('click', () => {
    alert('Thank you for your purchase!');
    cart = [];
    updateCart();
});

function updateCart() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const cartTotalContainer = document.querySelector('.cart-total');

    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ₹${item.price}`;
        cartItemsContainer.appendChild(li);
        total += item.price;
    });

    cartTotalContainer.textContent = total;
}
