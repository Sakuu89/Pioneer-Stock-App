
# Crypto Trading Dashboard

This project is a web application for a crypto trading dashboard built using React and Chakra UI.
You can check the live demo here - https://pioneer-stock-app.vercel.app/

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)


## Overview

The Crypto Trading Dashboard lets users view cryptocurrency prices, monitor population graphs, and trade assets. It includes a sidebar navigation component and various UI elements styled using Chakra UI.

## Features

- Display cryptocurrency prices fetched from an API
- View population graphs for trading analysis
- Trade assets with a user-friendly interface
- Responsive design with sidebar navigation

## Getting Started

### Prerequisites

Before running the project, make sure you have the following installed:

- Node.js
- npm (Node Package Manager) or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd crypto-trading-dashboard
   ```

3. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

## Usage

To start the development server and view the application:

```bash
npm start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Folder Structure

The project follows a standard React folder structure:

```
crypto-trading-dashboard/
├── public/
├── src/
│   ├── Components/
│   │   ├── CryptoPrices/
│   │   │   ├── CryptoPrices.js
│   │   │   
│   │   ├── PopulationGraph/
│   │   │   ├── PopulationGraph.js
│   │   │   
│   │   └── Sidebar/
│   │       ├── Sidebar.js
│   │      
│   ├── App.js
│   └── index.js
├── .gitignore
├── package.json
├── README.md
└── yarn.lock
```

