# Step 1: Use an official Node.js image as a base image (docker version)
FROM node:18 

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json files to the working directory
COPY package*.json ./

# Step 4: Install dependencies
RUN npm Install

# Step 5: Copy the entire project directory to the container
# first dot means copying the entire project directory
# second dot means moving the files over to the container
COPY . .

# Step 6: Set environment variables (example: change the port to 4000)
ENV PORT = 4000

# Step 7: Expose the port on which your API (matching the PORT environment variable)
# the expose command makes sure that the docker is able to access the PORT 4000
EXPOSE 4000

# Step 8: Define the command to run your API (choose between production or dev mode)
# for production mode:
# CMD ["npm", "start"]

# for dev mode:
# CMD ["npm", "run", "start:dev"]