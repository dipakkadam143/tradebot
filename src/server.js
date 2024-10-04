const express = require('express');
const dotenv = require('dotenv');
const { getStockPrice } = require('./mockData');
const { tradeBot, getReport } = require('./bot');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint to get real-time stock price
app.get('/api/stock', (req, res) => {
  const price = getStockPrice();
  res.json({ symbol: 'AAPL', price });
});

// Endpoint to get trading report
app.get('/api/report', (req, res) => {
  const report = getReport();
  res.json(report);
});

// Start the bot logic
tradeBot();

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
