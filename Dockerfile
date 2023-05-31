FROM golang:alpine

WORKDIR /app

COPY ./public ./public
COPY .env .env
COPY go.mod go.mod
COPY go.sum go.sum
COPY main.go main.go

RUN go build

CMD [ "./site" ]
