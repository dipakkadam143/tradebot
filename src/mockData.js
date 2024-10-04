let currentPrice = 100;  // Initial stock price

// Function to generate random stock price fluctuations
function getStockPrice() {
  // Simulate random fluctuation
  const priceChange = (Math.random() - 0.5) * 2;  // +/- 1% change
  currentPrice += priceChange;
  return currentPrice.toFixed(2);  // Return price with 2 decimal places
}

module.exports = { getStockPrice };
