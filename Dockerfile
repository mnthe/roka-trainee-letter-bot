FROM node:12

WORKDIR /app

# Install node_modules
COPY ./package*.json /app/
RUN npm ci

# Copy source files
COPY ./tsconfig.json /app/
COPY ./src /app/src/

ENV NODE_ENV=production

ENV USERNAME=TEST_USERNAME
ENV PASSWORD=TEST_PASSWORD
ENV TRAINEE_ID=TEST_TRAINEE_ID

CMD ["npm", "start"]

