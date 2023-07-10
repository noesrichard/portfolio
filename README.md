# Portafolio

This template should help get you started developing with Vue 3 in Vite.


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Build and deploy to Nginx with Docker
`docker build -t portfolio . --target=prod`

`docker run -dp 8080:80 portfolio`

