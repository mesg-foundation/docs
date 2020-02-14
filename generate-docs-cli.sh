#!/bin/bash -e

echo "Generate CLI documentation"

BRANCH="${1:-master}"

rm -rf cli-source
rm -rf cli
mkdir cli
git clone https://github.com/mesg-foundation/js-sdk cli-source

pushd cli-source
pushd packages
pushd cli

git checkout $BRANCH
npm install
npm run oclif-dev -- readme --multi --dir=commands
for l in commands/*; do
  echo $l
  echo "# $(cat $l)" > $l
done
echo "# $(cat README.md)" > README.md
echo "move files"
mv README.md ../../../cli
mv commands ../../../cli

popd
popd
popd

rm -rf cli-source