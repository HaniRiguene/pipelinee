# Use a node.js image as the base
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (if any)
COPY package.json /app/
COPY package-lock.json /app/ 

# Install all dependencies
RUN npm install

# Copy the rest of the application files
COPY server.js /app/
COPY index.html /app/
COPY calculator.js /app/
COPY test/ /app/test/ 

# Expose port 3000
EXPOSE 3000

# Run server, then run tests, then stop the server
CMD ["sh", "-c", "node server.js & sleep 5 && npm test && kill $(lsof -t -i:3000)"]
