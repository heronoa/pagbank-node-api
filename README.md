# PagSeguro Node.js API

## Overview

This Node.js API is designed to facilitate payments integration with PagSeguro.

## Prerequisites

Ensure that you have Node.js installed in your environment before proceeding.

## Installation

Run the following command to install the required dependencies:

```bash
npm install
```

## Configuration

Configuration settings for the PagSeguro email and token are passed via environment variables. Before using the API, configure your PagSeguro credentials in the `.env` file. Insert your email, token, and specify whether you are using the sandbox environment:

```env
PAGSEGURO_SANDBOX_TOKEN="yourTokenHere"
PAGSEGURO_SELLER_EMAIL="youremail@email.com"
```

## Usage

### Obtaining the Lightbox Code

Send a POST request to the following endpoint:

```bash
curl -X POST http://localhost:3000/pagseguro/lightboxcode
```

```js
// Native
const URL = "http://localhost:3000/pagseguro/lightboxcode";

// Dados a serem enviados no corpo da requisição (um JSON vazio neste caso)
const data = {};

// Configuração da requisição
const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
};

// Realiza a requisição usando fetch
fetch(URL, requestOptions)
  .then(response => response.json())
  .then(data => {
    // Manipula a resposta da API
    console.log('Resposta da API:', data);
  })
  .catch(error => {
    // Trata erros na requisição
    console.error('Erro na requisição:', error);
  });

```

```js
// JQuery
$.post("http://localhost:3000/pagseguro/lightboxcode", "", function fn(code) { displayLightBox(code) })
```

The Lightbox code will be returned as a response. This code is used to open PagSeguro Lightbox.

### Default Route for API Information

Access the route `/` to obtain basic information about the API. It returns an HTML document.

### Primary Route to Access the API

Access the route `/api/v1` to interact with the payment API.

## HTML Example

In the `views` folder, there's an HTML file with an example button illustrating how to use the `/pagseguro/lightboxcode` route in the frontend. The obtained transaction code should be used to open PagSeguro Lightbox through this integration.
