FROM node:10 AS builder

WORKDIR /usr/share/app
COPY . .

RUN yarn build

FROM nginx:stable

WORKDIR /var/www

COPY --from=builder /usr/share/app/build/web .
COPY ./web/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]