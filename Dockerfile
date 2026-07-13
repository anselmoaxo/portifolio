# ========================================
# PORTFOLIO STATIC SITE — NGINX
# ========================================

FROM nginx:alpine

LABEL maintainer="Anselmo Xavier" \
      description="Portfolio static site served by Nginx"

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy static assets
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY css/ /usr/share/nginx/html/css/
COPY i18n.js /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/
COPY assets/ /usr/share/nginx/html/assets/
COPY projetos/ /usr/share/nginx/html/projetos/
COPY robots.txt /usr/share/nginx/html/
COPY sitemap.xml /usr/share/nginx/html/
COPY favicon.svg /usr/share/nginx/html/

# Ensure proper permissions
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
