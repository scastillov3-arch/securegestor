# Use official Node LTS
FROM node:18-alpine

# Create app dir
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install deps
RUN npm ci --only=production

# Copy source
COPY src ./src

# Expose port
EXPOSE 3000

# Start
CMD ["node", "src/app.js"]
