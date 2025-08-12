# CustomTokenizerInJs

A custom tokenizer and vocabulary encoder/decoder built in JavaScript for Gen AI applications.

## What is this?

This project shows how to break text into tokens (words or pieces), assign each token a unique number, and convert between text and numbers. It's useful for AI and machine learning tasks.

## Features

- **Custom Tokenizer:** Splits text into tokens using simple rules
- **Vocabulary Management:** Maps tokens to random numbers, stores and loads them
- **Encoding/Decoding:** Turns text into numbers and back
- **Persistent Storage:** Saves vocabulary to data/vocab.json
- **REST API:** Provides endpoints for encoding/decoding via Express
- **Web UI:** Simple browser interface

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (JavaScript runtime for running code outside the browser)
- [pnpm](https://pnpm.io/) (fast package manager, like npm or yarn)

### Installation

Install dependencies (libraries the project needs):

```sh
pnpm install
```

### Running the Server

Start the server:

```sh
pnpm start
```

Server runs at http://localhost:3000

### Usage

- Open http://localhost:3000 in your browser.
- Enter text to encode (get numbers) or a comma-separated list of numbers to decode (get text).
- Click "Encode" or "Decode" to see results.

### Demo

<img width="400" height="400" alt="image" src="https://github.com/user-attachments/assets/3446215c-f916-43ea-8ff6-0ab39ed12c7b" />
<img width="400" height="400" alt="image" src="https://github.com/user-attachments/assets/5af38065-38c8-4364-94e3-a46540020578" />




## Project Structure

- [`src/tokenizer.js`](src/tokenizer.js): Splits text into tokens
- [`src/vocab.js`](src/vocab.js): Trains vocabulary, encodes/decodes tokens
- [`src/vocabStorage.js`](src/vocabStorage.js): Saves/loads vocabulary to disk
- [`src/trainingData.js`](src/trainingData.js): Example training data
- [`src/util.js`](src/util.js): Utility functions for generating unique numbers for each token
- [`server.js`](server.js): Express server and API endpoints
- [`public/index.html`](public/index.html): Web UI
- [`data/vocab.json`](data/vocab.json): Saved vocabulary

## API

You can use these endpoints with tools like Postman or curl.

### POST /encode

Request:

```json
{ "text": "your text here" }
```

Response:

```json
{ "encoded": [388, 988672, ...] }
```

### POST /decode

Request:

```json
{ "text": "388,988672,..." }
```

Response:

```json
{ "decoded": "Hello, ..." }
```
