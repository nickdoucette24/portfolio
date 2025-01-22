# Use an official Node.js runtime as a parent image
FROM node:18-alpine AS build

# Set the working directory in the container
WORKDIR /app

# Copy only the client directory to the working directory
COPY client ./client

# Navigate to the client directory
WORKDIR /app/client

# Install dependencies
RUN npm install

# Build the React application
RUN npm run build

# Use an official NGINX image to serve the built application
FROM nginx:1.23.4-alpine

# Copy the built files from the previous stage to the NGINX public directory
COPY --from=build /app/client/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
