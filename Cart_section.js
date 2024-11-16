document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', event => {
        const productInfo = event.target.closest('.product-info');
        const productName = productInfo.querySelector('h1').textContent;
        const productPrice = productInfo.querySelector('h2').textContent.replace('Rs', '').trim();

        addToCart(productName, productPrice);
    });
});
function addToCart(productName, productPrice) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingProduct = cart.find(item => item.name === productName);

    if (existingProduct) {
        existingProduct.quantity += 1;
        existingProduct.subtotal = existingProduct.quantity * existingProduct.price;
    } else {
        cart.push({
            name: productName,
            price: parseFloat(productPrice),
            quantity: 1,
            subtotal: parseFloat(productPrice),
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
}
document.addEventListener('DOMContentLoaded', () => {
    renderCart();
});

function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    cartItemsContainer.innerHTML = '';

    let total = 0;

    cart.forEach(item => {
        total += item.subtotal;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>Rs ${item.price.toFixed(2)}</td>
            <td>
                <button class="decrease-qty">-</button>
                ${item.quantity}
                <button class="increase-qty">+</button>
            </td>
            <td>Rs ${item.subtotal.toFixed(2)}</td>
            <td><button class="remove-item">Remove</button></td>
        `;

        // Decrease Quantity
        row.querySelector('.decrease-qty').addEventListener('click', () => {
            if (item.quantity > 1) {
                item.quantity -= 1;
                item.subtotal = item.quantity * item.price;
                saveCart(cart);
                renderCart();
            }
        });

        // Increase Quantity
        row.querySelector('.increase-qty').addEventListener('click', () => {
            item.quantity += 1;
            item.subtotal = item.quantity * item.price;
            saveCart(cart);
            renderCart();
        });

        // Remove Item
        row.querySelector('.remove-item').addEventListener('click', () => {
            removeFromCart(item.name);
        });

        cartItemsContainer.appendChild(row);
    });

    cartTotalElement.textContent = `Rs ${total.toFixed(2)}`;
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function removeFromCart(productName) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.name !== productName);
    saveCart(cart);
    renderCart();
}
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.add-to-cart');
    console.log(buttons); // Should log all buttons with the class "add-to-cart"

    buttons.forEach(button => {
        button.addEventListener('click', event => {
            console.log('Add to Cart button clicked'); // Should log when the button is clicked
        });
    });
});

