FROM php:8.2-fpm

RUN apt-get update
RUN apt-get -y install libzip-dev unzip
RUN docker-php-ext-install zip pdo_mysql

COPY --from=composer /usr/bin/composer /usr/bin/composer

COPY ./backend /var/www/html

RUN composer update
RUN composer install

CMD ["php", "artisan", "serve", "--host", "0.0.0.0"]
