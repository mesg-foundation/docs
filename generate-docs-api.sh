#!/bin/bash -e

VERSION=${version:-master}

if [ ! -f /.dockerenv ]; then
  docker build -t mesg/docs:local --build-arg version=$VERSION -f Dockerfile.docs .

  docker run --rm -ti -v /var/run/docker.sock:/var/run/docker.sock -v $(pwd):/project mesg/docs:local ./generate-docs-api.sh
  exit
fi

curl -sL https://github.com/mesg-foundation/core/archive/$VERSION.tar.gz | tar -xz

COREDIR=engine-${VERSION#v}

PROJECT=$(pwd)
GRPC=$PROJECT/$COREDIR

pushd $COREDIR
go install github.com/pseudomuto/protoc-gen-doc/cmd/protoc-gen-doc

echo "Generate API documentation"
API_DOCS="--doc_out=$PROJECT/api/ --doc_opt=$PROJECT/api.template"

protoc $API_DOCS,core.md --proto_path=$GRPC protobuf/coreapi/api.proto
protoc $API_DOCS,service.md --proto_path=$GRPC protobuf/serviceapi/api.proto
popd

rm -rf $COREDIR
