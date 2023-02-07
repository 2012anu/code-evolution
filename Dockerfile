
FROM node:13.12.0-alpine
WORKDIR /Users/anusha.arun/Desktop/work/React-stuff/code-evolution
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@4.0.3 -g --silent
COPY . ./
CMD ["npm", "start"]