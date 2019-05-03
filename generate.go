package main

import (
	"log"

	"github.com/mesg-foundation/core/commands"
	"github.com/spf13/cobra/doc"
)

func main() {
	if err := doc.GenMarkdownTree(commands.Build(nil), "../cli"); err != nil {
		log.Fatalln(err)
	}
}
