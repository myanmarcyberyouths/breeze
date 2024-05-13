FROM mmcyberyouths/php:dev

RUN install-php-extensions                                                                           \
        bcmath                                                                                       \
        intl

COPY ./apps/wallets .

RUN composer install \
    --no-autoloader && \
    composer dump-autoload --optimize --no-scripts

ENTRYPOINT ["./start-container"]
