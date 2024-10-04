const axios = require('axios');

let balance = 1000;  // Initial USD balance
let stockOwned = {
  AAPL: 0,
  TSLA: 0,
  AMZN: 0,
  GOOGL: 0,
  MSFT: 0
};

const buyPriceThreshold = 0.98;  // 2% drop
const sellPriceThreshold = 1.03; // 3% rise
let lastPrices = {
  AAPL: 100,
  TSLA: 200,
  AMZN: 150,
  GOOGL: 250,
  MSFT: 300
};

const trades = [];

// Function to execute trades based on stock price
async function tradeBot() {
  try {
    const stockSymbols = ['AAPL', 'TSLA', 'AMZN', 'GOOGL', 'MSFT'];
    
    setInterval(async () => {
      for (let symbol of stockSymbols) {
        const response = await axios.get(`http://localhost:3000/api/stock/${symbol}`);
        const currentPrice = parseFloat(response.data.price);

        // Buy if price drops by 2%
        if (currentPrice / lastPrices[symbol] < buyPriceThreshold && balance >= currentPrice) {
          stockOwned[symbol] += 1;
          balance -= currentPrice;
          logTrade('BUY', symbol, currentPrice);
          console.log(`Bought 1 share of ${symbol} at $${currentPrice}, balance: $${balance}`);
        }
        // Sell if price rises by 3%
        else if (currentPrice / lastPrices[symbol] > sellPriceThreshold && stockOwned[symbol] > 0) {
          stockOwned[symbol] -= 1;
          balance += currentPrice;
          logTrade('SELL', symbol, currentPrice);
          console.log(`Sold 1 share of ${symbol} at $${currentPrice}, balance: $${balance}`);
        }

        lastPrices[symbol] = currentPrice;  // Update last price
      }
    }, 2000);  // Check every 2 seconds for each stock
  } catch (error) {
    console.error('Error in trade bot:', error);
  }
}

// Log trade for reporting
function logTrade(action, symbol, price) {
  trades.push({ action, symbol, price, date: new Date() });
}

// Get report of all trades and profit/loss
function getReport() {
  let totalStockValue = 0;
  for (let symbol in stockOwned) {
    totalStockValue += stockOwned[symbol] * lastPrices[symbol];
  }
  const netWorth = balance + totalStockValue;
  return {
    balance,
    stockOwned,
    lastPrices,
    totalStockValue,
    netWorth,
    trades
  };
}

module.exports = { tradeBot, getReport };
