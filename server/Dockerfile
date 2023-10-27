<<<<<<< HEAD
FROM docker.io/node:alpine
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install
COPY . .
EXPOSE 5000.json 
CMD ["npm", "start"]      
=======
# Use the official Node.js image as the base image
FROM docker.io/node:alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package.json package-lock.json /app/
# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port on which the server will run
EXPOSE 5000

# Start the server
CMD ["npm", "start"]
>>>>>>> a4550e72e7017e3179eb85525107addfb6658474
