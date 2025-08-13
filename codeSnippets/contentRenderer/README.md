# ContentLoader Component

## Overview

A reusable content rendering component that dynamically fetches and displays different types of content based on the contentType prop. This component was designed to handle multiple content formats within a single application architecture.

## Problem Solved

Our application needed to display three different types of content:

NEWS - News articles
BLOG - Blog posts
TALK SHOW - Talk show episodes

Instead of creating separate components for each content type, I built a single reusable component that accepts a contentType prop to determine what data to fetch and how to display it.

## How It Works

Receives contentType prop - Component accepts a string indicating the type of content to load
Fetches data - Uses the contentType to make the API call
Renders content - Displays the fetched content using the appropriate layout/styling

## Usage

// Load news content
<ContentLoader contentType="NEWS" />

// Load blog content  
<ContentLoader contentType="BLOG" />

// Load talk show content
<ContentLoader contentType="TALK_SHOW" />

## Benefits of This Approach

DRY Principle - Don't Repeat Yourself - one component instead of three
Scalability - Easy to add new content types in the future
Consistency - All content types share the same loading states and error handling
Maintainability - Bug fixes and improvements apply to all content types

## Key Learning

This component demonstrates the power of props-based configuration in React. By making the component generic and using props to control its behavior, we can reuse the same logic across different parts of the application while maintaining clean, readable code.
