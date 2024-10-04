const express = require('express');
const dotenv = require('dotenv');
const { getStockPrice, getStockSymbols } = require('./mockData');
const { tradeBot, getReport } = require('./bot');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Endpoint to get the current price of a specific stock
app.get('/api/stock/:symbol', (req, res) => {
  const symbol = req.params.symbol;
  const price = getStockPrice(symbol);
  res.json({ symbol, price });
});

// Endpoint to get a list of all available stock symbols
app.get('/api/stocks', (req, res) => {
  const symbols = getStockSymbols();
  res.json(symbols);
});

// Endpoint to get the trading report
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
