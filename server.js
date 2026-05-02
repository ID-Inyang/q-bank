require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const customerRoutes = require('./routes/customers');
const accountRoutes = require('./routes/accounts');
const transferRoutes = require('./routes/transfers');

const dns = require('dns');

dns.setServers(['8.8.8.8', '1.1.1.1']);

const app = express();
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/accounts', accountRoutes);
app.use('/api/transfers', transferRoutes);

// Health check
app.get('/health', (req, res) => res.send('OK'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Bank server running on port ${PORT}`));