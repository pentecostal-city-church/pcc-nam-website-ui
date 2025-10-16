# Use Node.js LTS version that matches your project requirements
FROM node:18-bullseye

# Set working directory
WORKDIR /app

# Install system dependencies that Gatsby might need
RUN apt-get update && apt-get install -y \
    git \
    && rm -rf /var/lib/apt/lists/*

# Copy package files first for better layer caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose port for Gatsby development server
EXPOSE 8000

# Expose port for Gatsby GraphQL playground
EXPOSE 8001

# Default command - run Gatsby development server
# The host flag allows access from outside the container
CMD ["npm", "run", "develop", "--", "-H", "0.0.0.0"]
