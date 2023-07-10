 FROM node:18-alpine as base
 WORKDIR /app
 COPY package.json .
 RUN npm install --verbose
 COPY . .

FROM base as builder
RUN npm run build

FROM nginx:alpine as prod
WORKDIR /usr/share/nginx/html
RUN rm -f ./*
COPY --from=builder /app/dist .
ENTRYPOINT ["nginx", "-g", "daemon off;"]

FROM base as dev
CMD ["npm", "run", "dev"]
EXPOSE 8080
