# Use a recent Node runtime as a base image
FROM node:18-alpine as build

# Set the working directory in the container
WORKDIR /app

# Copy only the package.json and package-lock.json first, to leverage Docker cache
COPY ./package.json ./package-lock.json ./

# Install only production dependencies
RUN npm install --production --silent

# Copy the rest of the project files to the working directory
COPY ./ ./

# Build the React app
RUN npm run build

# Use a minimal Nginx image for serving the build
FROM nginx:alpine

# Copy build files to Nginx server directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Command to run the Nginx server
CMD ["nginx", "-g", "daemon off;"]
