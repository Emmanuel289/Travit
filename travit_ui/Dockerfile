## Base confuguration section
# Extending image
FROM node:12-stretch

# Install tools
RUN apt-get update && apt-get install -y \
    git \
    bash


# Do something like in all tutorials
VOLUME /root/.npm

# Create working directory
WORKDIR /usr/src/app

# Versions
RUN npm -v
RUN node -v

# Copy required packages files
COPY package.json .

# Check that everything is good
RUN ls -la

# Install dependencies
RUN npm i


## Build static bundle section
# Copy the source code
COPY . .

# Expose port
ENV PORT 3000
EXPOSE $PORT
# Compile static files
RUN npm run-script build

## Run static bundle on a server
# Install package for runnning a server
RUN npm i -g http-server

# Run the server with compiled static files
CMD ["http-server", "./dist/travit", "-p", "3000"]
