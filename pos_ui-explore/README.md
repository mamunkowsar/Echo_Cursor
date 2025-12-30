# Cafe POS System

A modern, touch-friendly Point of Sale (POS) application designed for cafe operations. Built with vanilla HTML, CSS, and JavaScript for fast performance and easy deployment.

## Features

### Menu Management
- **Categorized Menu Items**: Browse items by category (All, Beverages, Food, Pastries, Specials)
- **Visual Product Display**: Emoji-based product icons for quick recognition
- **32 Pre-loaded Items**: Ready-to-use menu items covering beverages, food, pastries, and specials

### Order Processing
- **Interactive Cart**: Add/remove items, adjust quantities
- **Real-time Calculations**: Automatic subtotal, tax (10%), and total calculations
- **Touch-optimized Interface**: Large buttons and touch targets for tablet/kiosk use

### Payment Processing
- **Multiple Payment Methods**: Cash, Card, and Mobile Pay
- **Cash Payment Handling**: Calculate change automatically
- **Payment Confirmation**: Secure payment flow with confirmation

### Order Management
- **Order History**: View all past orders
- **Receipt Generation**: Professional receipt printing
- **Local Storage**: Orders persist in browser localStorage

### User Interface
- **Modern Design**: Clean, professional interface
- **Responsive Layout**: Works on desktop, tablet, and mobile devices
- **Dark Mode Ready**: CSS variables make theming easy
- **Smooth Animations**: Enhanced user experience with transitions

## File Structure

```
pos_ui-explore/
├── index.html      # Main HTML structure
├── styles.css      # All styling and layout
├── script.js       # Application logic and functionality
└── README.md       # This file
```

## Getting Started

### Option 1: Direct File Opening
1. Open `index.html` in a modern web browser
2. Start using the POS system immediately

### Option 2: Local Server (Recommended)
For the best experience, serve the files through a local server:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (with http-server package)
npx http-server
```

Then open `http://localhost:8000` in your browser.

## Usage Guide

### Taking an Order
1. Browse menu items by category or view all items
2. Click on a menu item to add it to the cart
3. Adjust quantities using the +/− buttons in the cart
4. Click "Process Payment" when ready to checkout

### Processing Payment
1. Select payment method (Cash, Card, or Mobile Pay)
2. For cash payments, enter the amount received
3. Click "Confirm Payment" to complete the transaction
4. A receipt will be displayed automatically

### Viewing Orders
1. Click "View Orders" in the header
2. Browse through order history
3. Click on any order to view its receipt
4. Print receipts using the print button

### Clearing the Cart
- Click the "Clear" button in the cart header to remove all items

## Customization

### Adding Menu Items
Edit the `menuItems` array in `script.js`:

```javascript
{
    id: 33,
    name: 'Your Item Name',
    category: 'beverages', // or 'food', 'pastries', 'specials'
    price: 5.00,
    emoji: '☕' // or any emoji
}
```

### Changing Tax Rate
In `script.js`, modify the tax calculation in the `calculateTotals()` function:

```javascript
const tax = subtotal * 0.10; // Change 0.10 to your desired rate (e.g., 0.08 for 8%)
```

### Styling
All colors and styling use CSS variables in `styles.css`. Modify the `:root` section:

```css
:root {
    --primary-color: #2563eb;    /* Change primary color */
    --secondary-color: #10b981;  /* Change success/checkout color */
    /* ... other variables */
}
```

### Receipt Information
Update the receipt header in the `showReceipt()` function in `script.js`:

```javascript
<p>123 Main Street<br>City, State 12345<br>Phone: (555) 123-4567</p>
```

## Browser Compatibility

- ✅ Chrome (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

## Features in Detail

### Menu Categories
- **Beverages**: Coffee, tea, cold drinks (12 items)
- **Food**: Sandwiches, salads, wraps (8 items)
- **Pastries**: Croissants, muffins, cookies (8 items)
- **Specials**: Featured items and combos (4 items)

### Payment Methods
- **Cash**: Enter amount received, automatic change calculation
- **Card**: Credit/debit card payments (simulated)
- **Mobile Pay**: Mobile payment options (simulated)

### Data Persistence
- Orders are saved to browser localStorage
- Data persists between sessions
- To clear all data, clear browser localStorage or use browser dev tools

## Keyboard Shortcuts
- Click menu items to add to cart
- Use +/− buttons to adjust quantities
- Press Escape to close modals

## Deployment

This POS system can be deployed to any static hosting service:

- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your repository
- **GitHub Pages**: Push to a repository and enable Pages
- **Local Network**: Use for local cafe operations on a tablet/kiosk

## Future Enhancements (Potential)

- Backend integration for order management
- Real payment gateway integration
- Inventory management
- Employee login/management
- Sales reporting and analytics
- Table/seat management
- Kitchen display system integration
- Multi-language support

## Troubleshooting

**Orders not saving?**
- Check browser localStorage is enabled
- Clear localStorage and try again: `localStorage.clear()`

**Layout issues on mobile?**
- Ensure viewport meta tag is present (already included)
- Clear browser cache

**Print not working?**
- Check browser print settings
- Ensure pop-ups are not blocked

## License

This is a free-to-use POS system template. Customize it for your cafe needs.

## Support

For issues or questions, please check the code comments or modify the code to fit your specific requirements.

---

**Enjoy using your Cafe POS System! ☕**

