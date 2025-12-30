// Menu Data
const menuItems = [
    // Beverages
    { id: 1, name: 'Espresso', category: 'beverages', price: 2.50, emoji: '☕' },
    { id: 2, name: 'Cappuccino', category: 'beverages', price: 3.75, emoji: '☕' },
    { id: 3, name: 'Latte', category: 'beverages', price: 4.00, emoji: '☕' },
    { id: 4, name: 'Americano', category: 'beverages', price: 3.00, emoji: '☕' },
    { id: 5, name: 'Mocha', category: 'beverages', price: 4.50, emoji: '☕' },
    { id: 6, name: 'Macchiato', category: 'beverages', price: 3.50, emoji: '☕' },
    { id: 7, name: 'Flat White', category: 'beverages', price: 4.25, emoji: '☕' },
    { id: 8, name: 'Cold Brew', category: 'beverages', price: 4.50, emoji: '🧊' },
    { id: 9, name: 'Iced Latte', category: 'beverages', price: 4.25, emoji: '🧊' },
    { id: 10, name: 'Green Tea', category: 'beverages', price: 2.75, emoji: '🫖' },
    { id: 11, name: 'Chai Latte', category: 'beverages', price: 4.00, emoji: '🫖' },
    { id: 12, name: 'Hot Chocolate', category: 'beverages', price: 3.50, emoji: '🍫' },
    
    // Food
    { id: 13, name: 'Avocado Toast', category: 'food', price: 8.50, emoji: '🥑' },
    { id: 14, name: 'Egg Sandwich', category: 'food', price: 7.00, emoji: '🥪' },
    { id: 15, name: 'Caesar Salad', category: 'food', price: 9.00, emoji: '🥗' },
    { id: 16, name: 'Grilled Panini', category: 'food', price: 8.75, emoji: '🥪' },
    { id: 17, name: 'Quiche', category: 'food', price: 7.50, emoji: '🥧' },
    { id: 18, name: 'Soup of the Day', category: 'food', price: 6.50, emoji: '🍲' },
    { id: 19, name: 'Bagel & Cream Cheese', category: 'food', price: 5.50, emoji: '🥯' },
    { id: 20, name: 'Breakfast Wrap', category: 'food', price: 8.00, emoji: '🌯' },
    
    // Pastries
    { id: 21, name: 'Croissant', category: 'pastries', price: 3.50, emoji: '🥐' },
    { id: 22, name: 'Blueberry Muffin', category: 'pastries', price: 3.75, emoji: '🧁' },
    { id: 23, name: 'Chocolate Chip Cookie', category: 'pastries', price: 2.50, emoji: '🍪' },
    { id: 24, name: 'Brownie', category: 'pastries', price: 3.00, emoji: '🍫' },
    { id: 25, name: 'Danish Pastry', category: 'pastries', price: 4.00, emoji: '🥐' },
    { id: 26, name: 'Cinnamon Roll', category: 'pastries', price: 4.50, emoji: '🥐' },
    { id: 27, name: 'Scone', category: 'pastries', price: 3.25, emoji: '🍰' },
    { id: 28, name: 'Cheesecake Slice', category: 'pastries', price: 5.50, emoji: '🍰' },
    
    // Specials
    { id: 29, name: 'Cafe Special Blend', category: 'specials', price: 5.00, emoji: '⭐' },
    { id: 30, name: 'Seasonal Latte', category: 'specials', price: 5.50, emoji: '⭐' },
    { id: 31, name: 'Combo Meal', category: 'specials', price: 12.00, emoji: '⭐' },
    { id: 32, name: 'Afternoon Tea Set', category: 'specials', price: 15.00, emoji: '⭐' },
];

// State
let cart = [];
let orders = JSON.parse(localStorage.getItem('cafeOrders')) || [];
let currentCategory = 'all';
let selectedPaymentMethod = 'cash';

// DOM Elements
const menuGrid = document.getElementById('menuGrid');
const cartItems = document.getElementById('cartItems');
const cartSummary = document.getElementById('cartSummary');
const subtotalEl = document.getElementById('subtotal');
const taxEl = document.getElementById('tax');
const totalEl = document.getElementById('total');
const checkoutBtn = document.getElementById('checkoutBtn');
const checkoutTotal = document.getElementById('checkoutTotal');
const clearCartBtn = document.getElementById('clearCartBtn');
const categoryBtns = document.querySelectorAll('.category-btn');
const paymentModal = document.getElementById('paymentModal');
const ordersModal = document.getElementById('ordersModal');
const receiptModal = document.getElementById('receiptModal');
const currentDateEl = document.getElementById('currentDate');
const viewOrdersBtn = document.getElementById('viewOrdersBtn');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    updateCurrentDate();
    renderMenu();
    renderCart();
    setupEventListeners();
});

// Update Current Date
function updateCurrentDate() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    currentDateEl.textContent = now.toLocaleDateString('en-US', options);
}

// Render Menu
function renderMenu() {
    const filteredItems = currentCategory === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === currentCategory);
    
    menuGrid.innerHTML = filteredItems.map(item => `
        <div class="menu-item" onclick="addToCart(${item.id})">
            <div class="menu-item-image">${item.emoji}</div>
            <div class="menu-item-name">${item.name}</div>
            <div class="menu-item-category">${item.category}</div>
            <div class="menu-item-price">$${item.price.toFixed(2)}</div>
        </div>
    `).join('');
}

// Add to Cart
function addToCart(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    const existingItem = cart.find(i => i.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }
    
    renderCart();
    
    // Add visual feedback
    const menuItemEl = event.currentTarget;
    menuItemEl.style.transform = 'scale(0.95)';
    setTimeout(() => {
        menuItemEl.style.transform = '';
    }, 150);
}

// Remove from Cart
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    renderCart();
}

// Update Quantity
function updateQuantity(itemId, change) {
    const item = cart.find(i => i.id === itemId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(itemId);
        } else {
            renderCart();
        }
    }
}

// Calculate Totals
function calculateTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const tax = subtotal * 0.10; // 10% tax
    const total = subtotal + tax;
    
    return { subtotal, tax, total };
}

// Render Cart
function renderCart() {
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <p>Your cart is empty</p>
                <span>Select items to add to order</span>
            </div>
        `;
        cartSummary.style.display = 'none';
        checkoutBtn.disabled = true;
        checkoutTotal.textContent = '$0.00';
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)} each</div>
            </div>
            <div class="cart-item-controls">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                <span class="quantity-display">${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                <div class="item-total">$${(item.price * item.quantity).toFixed(2)}</div>
            </div>
        </div>
    `).join('');
    
    const { subtotal, tax, total } = calculateTotals();
    subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
    taxEl.textContent = `$${tax.toFixed(2)}`;
    totalEl.textContent = `$${total.toFixed(2)}`;
    checkoutTotal.textContent = `$${total.toFixed(2)}`;
    
    cartSummary.style.display = 'block';
    checkoutBtn.disabled = false;
}

// Clear Cart
function clearCart() {
    if (cart.length > 0 && confirm('Are you sure you want to clear the cart?')) {
        cart = [];
        renderCart();
    }
}

// Category Filter
function filterByCategory(category) {
    currentCategory = category;
    categoryBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === category);
    });
    renderMenu();
}

// Setup Event Listeners
function setupEventListeners() {
    // Category buttons
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterByCategory(btn.dataset.category);
        });
    });
    
    // Clear cart
    clearCartBtn.addEventListener('click', clearCart);
    
    // Checkout
    checkoutBtn.addEventListener('click', () => {
        openPaymentModal();
    });
    
    // Payment modal
    document.getElementById('closePaymentModal').addEventListener('click', closePaymentModal);
    document.getElementById('cancelPaymentBtn').addEventListener('click', closePaymentModal);
    document.getElementById('confirmPaymentBtn').addEventListener('click', confirmPayment);
    
    // Payment methods
    document.querySelectorAll('.payment-method-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.payment-method-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            selectedPaymentMethod = btn.dataset.method;
            
            const cashSection = document.getElementById('cashAmountSection');
            if (selectedPaymentMethod === 'cash') {
                cashSection.style.display = 'block';
            } else {
                cashSection.style.display = 'none';
                document.getElementById('changeDisplay').style.display = 'none';
            }
        });
    });
    
    // Cash received input
    document.getElementById('cashReceived').addEventListener('input', (e) => {
        const cashReceived = parseFloat(e.target.value) || 0;
        const { total } = calculateTotals();
        const change = cashReceived - total;
        
        const changeDisplay = document.getElementById('changeDisplay');
        const changeAmount = document.getElementById('changeAmount');
        
        if (cashReceived > 0 && change >= 0) {
            changeDisplay.style.display = 'flex';
            changeAmount.textContent = `$${change.toFixed(2)}`;
        } else {
            changeDisplay.style.display = 'none';
        }
    });
    
    // Orders modal
    viewOrdersBtn.addEventListener('click', openOrdersModal);
    document.getElementById('closeOrdersModal').addEventListener('click', closeOrdersModal);
    
    // Receipt modal
    document.getElementById('closeReceiptModal').addEventListener('click', closeReceiptModal);
    document.getElementById('closeReceiptBtn').addEventListener('click', closeReceiptModal);
    document.getElementById('printReceiptBtn').addEventListener('click', printReceipt);
    
    // Close modals on background click
    [paymentModal, ordersModal, receiptModal].forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                if (modal === paymentModal) closePaymentModal();
                if (modal === ordersModal) closeOrdersModal();
                if (modal === receiptModal) closeReceiptModal();
            }
        });
    });
}

// Payment Modal
function openPaymentModal() {
    const { total } = calculateTotals();
    document.getElementById('paymentTotal').textContent = `$${total.toFixed(2)}`;
    document.getElementById('cashReceived').value = '';
    document.getElementById('changeDisplay').style.display = 'none';
    paymentModal.classList.add('active');
}

function closePaymentModal() {
    paymentModal.classList.remove('active');
}

function confirmPayment() {
    const { total } = calculateTotals();
    
    if (selectedPaymentMethod === 'cash') {
        const cashReceived = parseFloat(document.getElementById('cashReceived').value) || 0;
        if (cashReceived < total) {
            alert('Cash received is less than the total amount!');
            return;
        }
    }
    
    // Create order
    const order = {
        id: Date.now(),
        items: [...cart],
        subtotal: calculateTotals().subtotal,
        tax: calculateTotals().tax,
        total: total,
        paymentMethod: selectedPaymentMethod,
        date: new Date().toISOString(),
    };
    
    orders.unshift(order);
    localStorage.setItem('cafeOrders', JSON.stringify(orders));
    
    // Show receipt
    showReceipt(order);
    
    // Clear cart
    cart = [];
    renderCart();
    closePaymentModal();
}

// Orders Modal
function openOrdersModal() {
    renderOrders();
    ordersModal.classList.add('active');
}

function closeOrdersModal() {
    ordersModal.classList.remove('active');
}

function renderOrders() {
    const ordersList = document.getElementById('ordersList');
    
    if (orders.length === 0) {
        ordersList.innerHTML = '<div class="empty-cart"><p>No orders yet</p></div>';
        return;
    }
    
    ordersList.innerHTML = orders.map((order, index) => {
        const date = new Date(order.date);
        const itemsSummary = order.items.map(item => `${item.name} (×${item.quantity})`).join(', ');
        
        return `
            <div class="order-card" data-order-index="${index}">
                <div class="order-header">
                    <span class="order-id">Order #${order.id}</span>
                    <span class="order-date">${date.toLocaleDateString()} ${date.toLocaleTimeString()}</span>
                </div>
                <div class="order-items">${itemsSummary}</div>
                <div class="order-total">$${order.total.toFixed(2)}</div>
            </div>
        `;
    }).join('');
    
    // Add click event listeners
    ordersList.querySelectorAll('.order-card').forEach(card => {
        card.addEventListener('click', () => {
            const index = parseInt(card.dataset.orderIndex);
            showReceipt(orders[index]);
        });
    });
}

// Receipt
function showReceipt(order) {
    const receiptContent = document.getElementById('receiptContent');
    const date = new Date(order.date);
    
    receiptContent.innerHTML = `
        <div class="receipt-header">
            <h3>☕ Cafe POS</h3>
            <p>123 Main Street<br>City, State 12345<br>Phone: (555) 123-4567</p>
        </div>
        <div class="receipt-info">
            <p><strong>Order #${order.id}</strong></p>
            <p>Date: ${date.toLocaleDateString()} ${date.toLocaleTimeString()}</p>
            <p>Payment: ${order.paymentMethod.charAt(0).toUpperCase() + order.paymentMethod.slice(1)}</p>
        </div>
        <div class="receipt-items">
            ${order.items.map(item => `
                <div class="receipt-item">
                    <span class="receipt-item-name">${item.name}</span>
                    <span class="receipt-item-qty">×${item.quantity}</span>
                    <span class="receipt-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
                </div>
            `).join('')}
        </div>
        <div class="receipt-total">
            <div class="receipt-row">
                <span>Subtotal:</span>
                <span>$${order.subtotal.toFixed(2)}</span>
            </div>
            <div class="receipt-row">
                <span>Tax (10%):</span>
                <span>$${order.tax.toFixed(2)}</span>
            </div>
            <div class="receipt-row total">
                <span>Total:</span>
                <span>$${order.total.toFixed(2)}</span>
            </div>
        </div>
        <div class="receipt-footer">
            <p>Thank you for your visit!</p>
            <p>Have a great day!</p>
        </div>
    `;
    
    receiptModal.classList.add('active');
}

function closeReceiptModal() {
    receiptModal.classList.remove('active');
}

function printReceipt() {
    const receiptContent = document.getElementById('receiptContent').innerHTML;
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Receipt</title>
            <style>
                body {
                    font-family: 'Courier New', monospace;
                    padding: 20px;
                    max-width: 300px;
                    margin: 0 auto;
                }
                .receipt-header { text-align: center; margin-bottom: 20px; border-bottom: 1px dashed #000; padding-bottom: 15px; }
                .receipt-header h3 { font-size: 1.25rem; margin-bottom: 10px; }
                .receipt-info { margin-bottom: 15px; font-size: 0.85rem; }
                .receipt-items { margin-bottom: 20px; }
                .receipt-item { display: flex; justify-content: space-between; margin-bottom: 8px; font-size: 0.9rem; }
                .receipt-item-name { flex: 1; }
                .receipt-item-qty { margin: 0 10px; }
                .receipt-item-price { min-width: 80px; text-align: right; }
                .receipt-total { border-top: 1px dashed #000; padding-top: 15px; margin-top: 15px; }
                .receipt-row { display: flex; justify-content: space-between; margin-bottom: 8px; }
                .receipt-row.total { font-weight: bold; font-size: 1.1rem; margin-top: 10px; }
                .receipt-footer { text-align: center; margin-top: 20px; padding-top: 15px; border-top: 1px dashed #000; font-size: 0.85rem; }
            </style>
        </head>
        <body>
            ${receiptContent}
        </body>
        </html>
    `);
    printWindow.document.close();
    printWindow.print();
}

// Make functions global for onclick handlers
window.addToCart = addToCart;
window.updateQuantity = updateQuantity;
