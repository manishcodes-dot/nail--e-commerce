const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static frontend files if hosted together
app.use(express.static(path.join(__dirname, '../frontend')));

// Sample In-Memory Database for Products
const products = [
    {
        id: 1,
        name: 'Rose Quartz Polish',
        price: 18.00,
        badge: 'New',
        image: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=500&auto=format&fit=crop'
    },
    {
        id: 2,
        name: 'Midnight Shimmer',
        price: 22.00,
        badge: null,
        image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=500&auto=format&fit=crop'
    },
    {
        id: 3,
        name: 'Gold Leaf Kit',
        price: 32.00,
        oldPrice: 45.00,
        badge: 'Sale',
        image: 'https://images.unsplash.com/photo-1600057424095-2cc675238241?q=80&w=500&auto=format&fit=crop'
    },
    {
        id: 4,
        name: 'Matte Lavender',
        price: 16.00,
        badge: null,
        image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=500&auto=format&fit=crop'
    }
];

// API Endpoints
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Luxe Nails API Server is running' });
});

app.get('/api/products', (req, res) => {
    res.json({ success: true, count: products.length, data: products });
});

app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (!product) {
        return res.status(404).json({ success: false, message: 'Product not found' });
    }
    res.json({ success: true, data: product });
});

app.post('/api/newsletter', (req, res) => {
    const { email } = req.body;
    if (!email || !email.includes('@')) {
        return res.status(400).json({ success: false, message: 'Invalid email address' });
    }
    console.log(`[NEWSLETTER] New subscription: ${email}`);
    res.json({ success: true, message: 'Successfully subscribed to the Luxe List!' });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
