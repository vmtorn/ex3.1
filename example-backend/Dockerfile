FROM golang:alpine3.14

EXPOSE 8080

WORKDIR /usr/src/app

COPY . .

ENV REQUEST_ORIGIN=http://localhost:5000
RUN go build


CMD ./server


