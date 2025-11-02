#!/bin/bash

# Clean Start Script for kemey-app
# This script cleans cache and starts the dev server

echo "🧹 Cleaning cache and build artifacts..."
rm -rf .next
rm -rf node_modules/.cache
rm -rf tsconfig.tsbuildinfo

echo "✨ Cache cleaned successfully!"
echo ""
echo "🚀 Starting development server..."
npm run dev


