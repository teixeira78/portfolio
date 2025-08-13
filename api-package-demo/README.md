# API Package Demo

## Overview

A reusable API configuration package that provides a complete setup for RTK Query with built-in authentication management. This package was designed to standardize API integration across multiple applications while handling the complexity of authentication flows.

## Problem Solved

We needed a consistent way to set up APIs across different projects so I took the initiative of implementing this logic to reducing developing time in future projects.

RTK Query configuration - Setting up base APIs with different endpoints
Authentication management - Handling login/logout states and token management
Middleware integration - Combining API middleware with auth listeners
Environment configuration - Different API URLs and client IDs per environment

Instead of duplicating this setup code across projects, I created a single package that handles all API configuration with a simple function call.

## How It Works

Accepts configuration object - Takes API settings like baseUrl, clientId, etc.
Initializes RTK Query API - Creates the base API instance with provided config
Sets up authentication - Creates auth slice and listeners for token management
Returns complete package - Provides everything needed for Redux store integration

## Usage

import { configMyApiPackage } from './api-package-demo';

// Basic setup with defaults
const apiConfig = configMyApiPackage({
baseUrl: "https://api.myapp.com",
clientId: "my-app-client-id"
});

// Add to Redux store
const store = configureStore({
reducer: {
[apiConfig.baseApi.reducerPath]: apiConfig.baseApi.reducer,
auth: apiConfig.authSlice.reducer,
},
middleware: (getDefaultMiddleware) =>
getDefaultMiddleware().concat(apiConfig.middleware),
});

// Extracting endpoints
const {useLoginMutation, useLogoutMutation, useGetCurrentUserQuery} = apiConfig.authEndpoints

## Benefits of This Approach

Consistency - Same API setup pattern across all projects
DRY Principle - No more copying API configuration code between projects
Maintainability - Bug fixes and improvements propagate to all projects using the package

## Key Learning

This package demonstrates the power of abstraction in software development. By identifying common patterns across projects and extracting them into a reusable package
Reduce development time for new projects
Ensure consistency across the codebase
Make maintenance easier by centralizing common logic
Allow teams to focus on business logic instead of boilerplate
