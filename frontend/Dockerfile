# set the base image to create the image for react app
FROM node:20-alpine

# set the working directory to /app
WORKDIR /app

# copy package.json and package-lock.json to the working directory
# This is done before copying the rest of the files to take advantage of Docker’s cache
# If the package.json and package-lock.json files haven’t changed, Docker will use the cached dependencies
COPY package.json ./
COPY yarn.lock  ./

# install dependencies
RUN yarn

# copy the rest of the files to the working directory
COPY . .

# expose port 5174 to tell Docker that the container listens on the specified network port at runtime
EXPOSE 5174

# command to run the app
CMD npm run dev:docker