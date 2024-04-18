FROM node:18-alpine

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8080

CMD [ "npm", "run", "preview" ]




# # First Stage
# FROM FROM node:18-alpine AS installer
# WORKDIR /app

# # Copying package.json & package-lock.json.
# # Why we have used * symbol? Check this -> https://docs.docker.com/engine/reference/builder/#copy
# COPY package.json yarn.lock .

# # Install app dependencies
# RUN yarn install --frozen-lockfile

# # Second Stage
# # Using Alpine images to curb down the image size
# FROM FROM node:18-alpine AS release

# WORKDIR /app

# # Copying all the contents from previous stage(used - - from) into current stage
# COPY --from=installer /app /app
# #
# # Copying all the repo content into our Docker environment
# COPY . .

# # Building the application
# RUN npm run build

# # Triggering the start command to run the application
# # CMD ['npm', 'start']

# # Running the application on port 8080
# CMD [ "npm", "run", "preview" ]