# Installation

## Automatic

MESG is using Docker so you need to make sure to have Docker installed on your machine.

- Download and install [Docker CE](https://www.docker.com/community-edition)
- Initialize Docker Swarm by running `docker swarm init`
- In order to access to the Engine, you can use the MESG CLI and install it with

```bash
npm install -g @mesg/cli
```

You can now run the MESG Engine with `mesg-cli daemon:start`

<div class="page-nav">
  <p class="inner">
    <span class="next">
      <router-link to="/guide/quick-start-guide.html">
        Quick Start Guide
      </router-link>
      →
    </span>
  </p>
</div>

## MESG Engine only (advanced mode)

If you don't want to use the CLI, you can start the Engine directly on Docker.

- Download and install [Docker CE](https://www.docker.com/community-edition)
- Initialize Docker Swarm by running `docker swarm init`
- Run the following commands:

```bash
# Create local `.mesg` dir
mkdir -p $HOME/.mesg
# Start docker swarm
docker swarm init
# Download latest version
docker pull mesg/engine:latest
# Create the MESG network
docker network create engine -d overlay --label com.docker.stack.namespace=engine
# Start the MESG Engine
docker service create \
  --network engine \
  --mount source=/var/run/docker.sock,destination=/var/run/docker.sock,type=bind \
  --mount source=$HOME/.mesg,destination=/root/.mesg,type=bind \
  --publish 50052:50052 \
  --label com.docker.stack.namespace=engine \
  --name engine \
  mesg/engine:latest
```

::: tip Get Help
You need help? Check out the <a href="https://forum.mesg.com" target="_blank">MESG Forum</a>.
:::
