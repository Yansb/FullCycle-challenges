FROM golang:1.18.1-alpine3.15 AS builder

WORKDIR /usr/src/app

COPY go.mod main.go ./

RUN env GOOS=linux GOARCH=amd64 go build


FROM scratch

COPY --from=builder /usr/src/app/codeeducation .

CMD ["./codeeducation"]