FROM node:18.10.0-alpine

WORKDIR /service

# Create an unprivileged user
RUN adduser \
    --disabled-password \
    --gecos "" \
    --home "$(pwd)" \
    --no-create-home \
    "service"

RUN chown -R service /service

COPY --chown=service . /service/

RUN npm install
# Don't run as root
USER service

CMD ["npm", "run", "start"]

EXPOSE 3000
