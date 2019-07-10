#!/bin/bash -e

VERSION=${version:-master}

if [ ! -f /.dockerenv ]; then
  docker build -t mesg/docs:local --build-arg version=$VERSION -f Dockerfile.docs .

  docker run --rm -ti -v /var/run/docker.sock:/var/run/docker.sock -v $(pwd):/project mesg/docs:local ./generate-docs-api.sh
  exit
fi

echo "Generate API documentation"

DEF_REPO="mesg-foundation/engine"
DEF_BRANCH="dev"
PROTO_PATH="https://raw.githubusercontent.com/$DEF_REPO/$DEF_BRANCH/protobuf"
PROJECT="/project"
GRPC_CACHE=$PROJECT/protobuf
EXPORT_PATH=$PROJECT/api

rm -rf $EXPORT_PATH
mkdir -p $EXPORT_PATH
mkdir -p $GRPC_CACHE/api
mkdir -p $GRPC_CACHE/types

ressources="event execution instance service"
for ressource in $ressources; do
  curl -o "$GRPC_CACHE/api/$ressource.proto" "$PROTO_PATH/api/$ressource.proto"
  curl -o "$GRPC_CACHE/types/$ressource.proto" "$PROTO_PATH/types/$ressource.proto"
  protoc --doc_out="$EXPORT_PATH" --doc_opt="json","$ressource-api.json" --proto_path="$PROJECT" "$GRPC_CACHE/api/${ressource}.proto"
  protoc --doc_out="$EXPORT_PATH" --doc_opt="json","$ressource-type.json" --proto_path="$PROJECT" "$GRPC_CACHE/types/$ressource.proto"
  echo "# $ressource
  <api-doc 
    :apifiles='$(cat $EXPORT_PATH/$ressource-api.json | jq -c . | sed "s/'/\&rsquo;/g" )'
    :typefiles='$(cat $EXPORT_PATH/$ressource-type.json | jq -c . | sed "s/'/\&rsquo;/g" )'
  />" > $EXPORT_PATH/$ressource.md
  rm $EXPORT_PATH/$ressource-api.json $EXPORT_PATH/$ressource-type.json
done

rm -rf $GRPC_CACHE
