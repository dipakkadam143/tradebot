const stockData = {
    AAPL: 100,  // Initial price for Apple
    TSLA: 200,  // Initial price for Tesla
    AMZN: 150,  // Initial price for Amazon
    GOOGL: 250, // Initial price for Google
    MSFT: 300   // Initial price for Microsoft
  };
  
  // Simulate random price fluctuation for each stock
  function getStockPrice(symbol) {
    const priceChange = (Math.random() - 0.5) * 2;  // +/- 1% fluctuation
    stockData[symbol] += priceChange;
    return stockData[symbol].toFixed(2);  // Return price with 2 decimal places
  }
  
  // Get the list of all available stocks
  function getStockSymbols() {
    return Object.keys(stockData);
  }
  
  module.exports = { getStockPrice, getStockSymbols };
  