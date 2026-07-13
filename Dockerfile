FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY tailwind.config.js postcss.config.js ./
COPY src/ ./src/
COPY scripts/ ./scripts/
COPY index.html style.css script.js i18n.js favicon.svg robots.txt sitemap.xml ./
COPY assets/ ./assets/
COPY projetos/ ./projetos/

RUN npm run build

FROM nginx:1.28-alpine

LABEL maintainer="Anselmo Xavier" \
      description="Portfolio static site served by Nginx"

RUN rm -rf /usr/share/nginx/html/*

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist/ /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
