# Portafolio
A portafolio to show about me, skills, experience and projects.

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

