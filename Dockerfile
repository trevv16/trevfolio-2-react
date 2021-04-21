# Trevfolio React Client Dockerfile - Dev

FROM node:15.11.0

# Create app directory
WORKDIR /trevfolio-client

# Install app dependencies
COPY package*.json ./
RUN npm install -g npm@7.10.0
RUN npm --version
RUN ["npm", "install"]

# Bundle app source
COPY . .

EXPOSE 3000
CMD ["npm", "start"]
