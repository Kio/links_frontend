FROM node:19-alpine
WORKDIR /app
COPY . .
RUN npm ci --silent
CMD [ "npm", "run", "start" ]
EXPOSE 3000
