#!/bin/bash

if [ -z "$1" ]; then
  VERSION=$(curl https://api.github.com/repos/mesg-foundation/core/releases/latest | jq -r '.tag_name')
else
  VERSION=$1
fi

PROJECT=$(pwd)
GRPC=$PROJECT/protobuf
mkdir -p $GRPC

DEF_REPO="mesg-foundation/core"

apis="core service"
for api in $apis; do
  curl -o $GRPC/$api.proto "https://raw.githubusercontent.com/$DEF_REPO/$VERSION/protobuf/${api}api/api.proto"
done

echo "Generate API documentation"
API_DOCS="--doc_out=$PROJECT/api/ --doc_opt=$PROJECT/api.template"

go install github.com/pseudomuto/protoc-gen-doc/cmd/protoc-gen-doc
go get -u github.com/mesg-foundation/core@$VERSION
protoc $API_DOCS,core.md --proto_path=$PROJECT $GRPC/core.proto
protoc $API_DOCS,service.md --proto_path=$PROJECT $GRPC/service.proto
rm -rf $GRPC

echo "Generate CLI documentation"
go run generate.go
