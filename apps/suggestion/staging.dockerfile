FROM breeze/node as builder

WORKDIR /var/www/suggestion

COPY package.json .
COPY tsconfig.json .
COPY tsconfig.build.json .
COPY nest-cli.json .

RUN pnpm install

COPY . .
RUN pnpm run build suggestion


FROM breeze/node

WORKDIR /var/www/suggestion

COPY --chown=node:node . .
COPY --chown=node:node --from=builder /var/www/suggestion/node_modules ./node_modules
COPY --chown=node:node --from=builder /var/www/suggestion/dist ./dist

COPY docker/start-container /usr/local/bin/start-container
RUN chmod +x /usr/local/bin/start-container

ENTRYPOINT ["start-container"]
