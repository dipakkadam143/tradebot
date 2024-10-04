const axios = require('axios');

let balance = 1000;  // Initial USD balance
let stockOwned = 0;  // Number of stocks owned
const buyPriceThreshold = 0.98;  // 2% drop
const sellPriceThreshold = 1.03; // 3% rise
let lastPrice = 100;  // Initial stock price
const trades = [];

// Function to execute trades based on stock price
async function tradeBot() {
  try {
    setInterval(async () => {
      const response = await axios.get('http://localhost:3000/api/stock');
      const currentPrice = parseFloat(response.data.price);

      // Buy if price drops by 2%
      if (currentPrice / lastPrice < buyPriceThreshold && balance >= currentPrice) {
        stockOwned += 1;
        balance -= currentPrice;
        logTrade('BUY', currentPrice);
        console.log(`Bought 1 stock at $${currentPrice}, balance: $${balance}`);
      }
      // Sell if price rises by 3%
      else if (currentPrice / lastPrice > sellPriceThreshold && stockOwned > 0) {
        stockOwned -= 1;
        balance += currentPrice;
        logTrade('SELL', currentPrice);
        console.log(`Sold 1 stock at $${currentPrice}, balance: $${balance}`);
      }

      lastPrice = currentPrice;  // Update last price
    }, 2000);  // Check every 2 seconds
  } catch (error) {
    console.error('Error in trade bot:', error);
  }
}

// Log trade for reporting
function logTrade(action, price) {
  trades.push({ action, price, date: new Date() });
}

// Get report of all trades and profit/loss
function getReport() {
  const totalStockValue = stockOwned * lastPrice;
  const netWorth = balance + totalStockValue;
  return {
    balance,
    stockOwned,
    lastPrice,
    totalStockValue,
    netWorth,
    trades
  };
}

module.exports = { tradeBot, getReport };
