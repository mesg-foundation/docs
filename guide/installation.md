# Installation

## Automatic installation

Run the following command in a console:

```bash
bash <(curl -fsSL https://mesg.com/install)
```

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

## Manual installation

### Docker

* Download and install [Docker CE](https://www.docker.com/community-edition)
* Initialize Docker Swarm by running
```bash
docker swarm init
```
* If the error `Could not choose an IP address to advertise since this system has multiple addresses on interface eth0 (xxx.xxx.xxx.xxx and yyy.yyy.yyy.yyy)` is returned, run:
```bash
docker swarm init --advertise-addr xxx.xxx.xxx.xxx
```

### CLI

* Download the binary from our [release page on GitHub](https://github.com/mesg-foundation/core/releases)
* Rename the binary to `mesg-core`
* Run the following commands

```bash
# Give it the execution permission
chmod +x mesg-core
# Move it to your local bin folder
mv ./mesg-core /usr/local/bin/mesg-core
# Create system services folder under your mesg path
mkdir -p ~/.mesg/systemservices
# Start MESG Core with the command
mesg-core start
```

### Docker only

If you don't want to use the CLI, you can start the Core by executing the following commands.

```bash
# Download latest version
docker pull mesg/core:latest
# Create the MESG network
docker network create core -d overlay --label com.docker.stack.namespace=core
# Start MESG Core
docker service create --network core --env MESG_CORE_PATH=/mesg --mount source=/var/run/docker.sock,destination=/var/run/docker.sock,type=bind --mount source=$HOME/.mesg,destination=/mesg,type=bind --publish 50052:50052 --label com.docker.stack.namespace=core --name core mesg/core:latest
```

::: tip Get Help
You need help ? Check out the <a href="https://forum.mesg.com" target="_blank">MESG Forum</a>.