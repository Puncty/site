package main

import (
	"io"
	"os"

	"github.com/gin-gonic/gin"
)

var TOKEN = os.Getenv("PUNCTY_AUTH_TOKEN")

func main() {
	r := gin.Default()
	// serve the /public directory
	r.Static("/", "./public")

	// allow updates to be pushed while server is running
	r.POST("/upload", func(ctx *gin.Context) {
		if verifyUpload(ctx) {
			err := processUpload(ctx)
			if err != nil {
				ctx.Error(err)
			}
		}
	})

	r.Run(":8001")
}

func verifyUpload(ctx *gin.Context) bool {
	return ctx.Request.Header.Get("Authorization") == TOKEN
}

func processUpload(ctx *gin.Context) error {
	uploadFile, _, err := ctx.Request.FormFile("file")
	if err != nil {
		return err
	}
	defer uploadFile.Close()

	downloadFile, err := os.OpenFile("./public/puncty.apk", os.O_CREATE|os.O_WRONLY, 0755)
	if err != nil {
		return err
	}
	defer downloadFile.Close()

	_, err = io.Copy(downloadFile, uploadFile)

	return err
}
