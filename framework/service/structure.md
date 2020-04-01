# Dockerize the Service

## Why do I need Docker ?

Services run in Docker to provide a sandbox and a normalized environment to remove any side effects that may occur when running on many different machines. See more information on the [Docker website](https://www.docker.com/).

## Steps to be compatible with Docker

* [Create the Dockerfile](#create-the-dockerfile)
* [Add a config](#add-a-configuration-and-dependencies) in your [`mesg.yml`](service-file.md) file, if needed
* [Add dependencies](#add-a-configuration-and-dependencies) in your [`mesg.yml`](service-file.md) file, if needed

## Create the Dockerfile

In order to be compatible with [Docker](https://www.docker.com/), a `Dockerfile` needs to be created in the folder of the service. See the [Dockerfile reference](https://docs.docker.com/engine/reference/builder/).

### Examples

<vue-tabs>
  <v-tab title="Node" vp-markdown>
    
```dockerfile
FROM node:latest
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "npm", "start" ]
```

Check out how to [dockerizing a Node.js web app](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/).

  </v-tab>
  <v-tab title="Go" vp-markdown>

```dockerfile
FROM golang:latest
RUN mkdir /app
ADD . /app/
WORKDIR /app
RUN go build -o main .
CMD ["/app/main"]
```

Check out how to [build a minimal Docker Containers for Go applications](https://blog.codeship.com/building-minimal-docker-containers-for-go-applications/).

  </v-tab>
</vue-tabs>

## Add a configuration and dependencies

::: tip
Configuration and dependencies are an advanced feature and your service may not need them. This is totally optional and really depends on your service's needs.
:::

Once the Service can run on Docker, The Engine should be able to start it automatically. Update the [`mesg.yml`](service-file.md) file with the config. and optional dependencies the service needs.

The `configuration` key is a Dependency object that will be use to configure the main Docker container of the service. All Dependency attributes are available except image. The attribute `image` will be set automatically when the service is deployed.

If the service requires dependencies to other Docker container, specify them in the `dependencies` map.

### Definitions

| **Attribute** | **Type** | **Default** | **Description** |
| --- | --- | --- | --- | --- | --- |
| **image** | `String` | `""` | The docker image of the Service. Only available for dependencies. |
| **volumes** | `String[]` | `[]` | A list of [volumes](https://docs.docker.com/storage/volumes/) that will be mounted in the Service. |
| **ports** | `String[]` | `[]` | A list of ports that the Service needs to expose. |
| **command** | `String` | `""` | The command to run when the Service starts if not defined in your [Dockerfile](#create-the-dockerfile). |
| **volumesFrom** | `String[]` | `[]` | List of dependencies' names to mount a volume from. |
| **env** | `String[]` | `[]` | List of environmental variables needed for the dependency with the format `KEY=VALUE`. |

### Example

```yaml
name: serviceX
tasks: {}
events: {}
configuration:
  command: "node start"
  volumesFrom:
    - serviceToConnectWith
  env:
    - FOO=BAR
dependencies:
  serviceToConnectWith:
    image: "..."
    volumes:
      - "/tmp"
    ports:
      - "1234"
```

Each dependency's key is used as its **hostname** on the shared network between the service and dependencies.
In this example, the service can access the dependency at the endpoint `serviceToConnectWith:1234`.

::: tip Get Help
You need help ? Check out the <a href="https://forum.mesg.com" target="_blank">MESG Forum</a>.
