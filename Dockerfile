FROM nginx:latest

COPY ./fidget/build /usr/share/nginx/html

EXPOSE 80