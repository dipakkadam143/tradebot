# Basic Trading Bot

This project implements a backend service that simulates a basic stock market trading bot. The bot monitors stock prices and automatically buys and sells stocks based on a simple trading strategy. It tracks profit and loss over time and generates a report summarizing its performance.

## Features

- Simulates multiple stock prices for companies like **AAPL**, **TSLA**, **AMZN**, **GOOGL**, and **MSFT**.
- Implements a basic trading strategy:
  - **Buy** when the stock price drops by 2%.
  - **Sell** when the stock price rises by 3%.
- Tracks the bot’s balance, stocks owned, and overall net worth (cash + stock value).
- Logs each trade action (buy or sell).
- Generates a report with trade history and performance metrics.


---

### Summary of Instructions:

1. **Clone the repository** to your local machine.
2. **Install dependencies** by running `npm install`.
3. **Set environment variables** by creating a `.env` file.
4. **Start the application** using `node src/server.js`.
5. **Access the API endpoints** to fetch stock prices and trading reports.

Let me know if you need further clarification or additional improvements!

  
## Project Structure

trading-bot/ ├── src/ │ 
                    ├── server.js # Main server setup │ 
                    ├── bot.js # Trading bot logic │ 
                    ├── mockData.js # Mock stock price generator 
                ├── .env # Environment variables 
                ├── package.json # Dependencies and project metadata 
                └── README.md # Project documentation
## Requirements
- Node.js
- Express.js
- Axios

## Setup

1. Clone the repository.
    Using:-
        git clone https://github.com/dipakkadam143/tradebot.git
        cd trading-bot

2. Install dependencies: 
    Using:-
        npm install
3. Run command:
    Using:-
         npm start

Description: Retrieves a list of all stock symbols that the bot is monitoring.
Example: http://localhost:3000/api/stocks

Response Example:

[
  "AAPL",
  "TSLA",
  "AMZN",
  "GOOGL",
  "MSFT"
]

Description: Fetches the current price of a specific stock symbol.
Example: http://localhost:3000/api/stock/AAPL
Response Example:

{
  "symbol": "AAPL",
  "price": "101.23"
}

Description: Provides a summary report of the bot's trades, the balance, stock ownership, and profit/loss.
Example: http://localhost:3000/api/report

Response Example:

{
  "balance": 950.57,
  "stockOwned": {
    "AAPL": 2,
    "TSLA": 1,
    "AMZN": 0,
    "GOOGL": 0,
    "MSFT": 0
  },
  "lastPrices": {
    "AAPL": 101.23,
    "TSLA": 202.56,
    "AMZN": 151.78,
    "GOOGL": 252.13,
    "MSFT": 305.67
  },
  "totalStockValue": 405.02,
  "netWorth": 1355.59,
  "trades": [
    {
      "action": "BUY",
      "symbol": "AAPL",
      "price": 99.76,
      "date": "2024-10-04T10:00:00Z"
    },
    {
      "action": "BUY",
      "symbol": "TSLA",
      "price": 200.45,
      "date": "2024-10-04T10:01:00Z"
    }
  ]
}


Make sure you have **Node.js** installed on your system. You can check if Node.js is installed by running:

## Setup and Installation

### Prerequisites 

node -v