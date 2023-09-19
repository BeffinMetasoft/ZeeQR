FROM docker.io/node:alpine
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install
COPY . .
EXPOSE 5000.json 
CMD ["npm", "start"]      
