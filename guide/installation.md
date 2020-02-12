# Installation

## Docker

The MESG Engine is using Docker so you need to make sure to have Docker installed on your machine.

- Download and install [Docker CE](https://www.docker.com/community-edition)
- Initialize Docker Swarm by running `docker swarm init`

## CLI

The easiest way to install the Engine and to interact with it is with the MESG CLI.

The CLI requires [node and npm](https://nodejs.org).

To install the CLI globally, run:
```bash
npm install -g @mesg/cli
```

## Start the Engine

You can now start the Engine with the command:
```bash
mesg-cli daemon:start
```

It will start the Engine with a new local development network called `mesg-dev-chain`.
This is a **private network** that contains only your data and is validated by your local engine.

::: tip
Make sure to check the documentation of each command to see options and default configuration using the flag `--help`:
```bash
mesg-cli daemon:start --help
```
:::

## Using a public MESG Network

If you want to start the Engine with a public network you can pass the network's name with the `--network` flag.

To start the engine with the public testnet network `mesg-testnet-01`, run:
```bash
mesg-cli daemon:start --network mesg-testnet-01 --path $HOME/.mesg-testnet-01
```

We advise you to also set a different path for each network to avoid to override an existing network's data.

::: tip
You can find the list of all available public networks on the [networks repository](https://github.com/mesg-foundation/networks).
:::

## Engine's logs

To access the Engine's logs, run the following command:
```bash
mesg-cli daemon:logs
```

## Stop the Engine

To stop the Engine, run the following command:
```bash
mesg-cli daemon:stop
```

## Manual installation

If you don't want to use the CLI or have more control on the Engine's container, you can start the Engine using the Docker CLI.

```bash
# Create local `.mesg` dir
mkdir -p $HOME/.mesg
# Start docker swarm
docker swarm init
# Download latest version
docker pull mesg/engine:latest
# Create the MESG network
docker network create engine -d overlay
# Start the MESG Engine
docker service create \
  --name engine \
  --network engine \
  --mount source=/var/run/docker.sock,destination=/var/run/docker.sock,type=bind \
  --mount source=$HOME/.mesg,destination=/root/.mesg,type=bind \
  --publish 50052:50052 \
  --publish 26656:26656 \
  mesg/engine:latest
```

::: tip Get Help
You need help? Check out the <a href="https://forum.mesg.com" target="_blank">MESG Forum</a>.
:::
