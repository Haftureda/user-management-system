# User Management System - Frontend

A React-based frontend application built with Vite for managing and viewing user data. Features a professional UI with advanced filtering and reporting capabilities.

## Features

- Modern React application with Vite
- User list display with customizable columns
- Real-time search functionality
- Advanced filtering by specific user fields
- Reports dashboard with age demographics
- Settings to show/hide table columns

## Prerequisites

- Node.js (v18 or higher recommended)
- npm (v8 or higher) 
- Backend server running (see backend README)

## Local Development Setup with Vite

### 1. Clone the Repository
```bash
git clone https://github.com/Haftureda/user-management-system
cd user-management-system/frontend
```
### 2. Install Dependencies

    npm install

### 3. Start the Development Server

```bash
npm run dev
```
Vite will start the development server on http://localhost:3000 with hot module replacement (HMR) enabled.

### 4. Build the project

    npm run build

### 5. Preview Build

    npm run preview

# User Management System - Backend

A Node.js/Express.js backend server for managing users. This API connects to the DummyJSON API to fetch and filter user data.

## Features

- RESTful API endpoints
- User data retrieval from DummyJSON API
- Advanced filtering by various user fields
- CORS enabled for frontend communication
- MVC architecture pattern

## API Endpoints

- `GET /api/users` - Fetch all users
- `GET /api/users/search?q={query}` - Search users across multiple fields
- `GET /api/users/filter?field={field}&value={value}` - Filter users by specific field

## Supported Filter Fields

- `firstName` - Filter by first name
- `lastName` - Filter by last name  
- `email` - Filter by email
- `phone` - Filter by phone number
- `age` - Filter by age

## Prerequisites

- Node.js (v18 or higher)
- npm (v8 or higher)

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/Haftureda/user-management-system
cd user-management-system/backend
```

### 2. Install dependencies:

```bash
npm install
```
### 3. Running the Application

```bash
npm start
```

The server will start on http://localhost:3001

