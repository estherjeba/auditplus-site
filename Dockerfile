FROM nginx:1.17.2-alpine

EXPOSE 8000
COPY nginx.conf /etc/nginx/conf.d/default.conf
RUN mkdir /auditplus-site
WORKDIR /auditplus-site
COPY ./dist/ /auditplus-site

CMD ["nginx", "-g", "daemon off;"]
