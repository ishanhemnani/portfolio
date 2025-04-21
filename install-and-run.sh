#!/bin/bash

# Colors for terminal output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}================================${NC}"
echo -e "${GREEN}Portfolio Website Setup${NC}"
echo -e "${BLUE}================================${NC}"

# Check if npm is installed
if ! [ -x "$(command -v npm)" ]; then
  echo -e "${YELLOW}Error: npm is not installed.${NC}" >&2
  echo "Please install Node.js and npm first from https://nodejs.org/"
  exit 1
fi

# Install dependencies
echo -e "\n${GREEN}Installing dependencies...${NC}"
npm install

# Start the development server
echo -e "\n${GREEN}Starting the development server...${NC}"
echo -e "${YELLOW}The website will open in your default browser shortly.${NC}"
echo -e "${BLUE}================================${NC}"

npm run dev 