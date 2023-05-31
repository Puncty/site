FROM golang:alpine

WORKDIR /app

COPY ./* /app/

RUN go build

CMD [ "./site" ]
