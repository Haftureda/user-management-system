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

### 1. Clone the repository:

git clone https://github.com/Haftureda/user-management-system
cd user-management-system/backend

### 2. Install dependencies:

npm install

### 3. Running the Application

npm start

The server will start on http://localhost:3001


