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
2. Install dependencies:

