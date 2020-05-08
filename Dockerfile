# Specify Base Image
FROM node:alpine

WORKDIR /usr/app

# Install Dependencies
COPY ./package.json ./
RUN npm install
COPY ./ ./

# Default Command
CMD ["npm", "start"]