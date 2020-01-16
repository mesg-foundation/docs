# `mesg-cli daemon`
=================

Manage the Engine

* [`mesg-cli daemon:logs`](#mesg-cli-daemonlogs)
* [`mesg-cli daemon:start`](#mesg-cli-daemonstart)
* [`mesg-cli daemon:status`](#mesg-cli-daemonstatus)
* [`mesg-cli daemon:stop`](#mesg-cli-daemonstop)

## `mesg-cli daemon:logs`

Show the Engine's logs

```
USAGE
  $ mesg-cli daemon:logs

OPTIONS
  -h, --help       show CLI help
  -p, --port=port  [default: 50052] Port to access the MESG engine
  -q, --quiet      Display only essential information
  --[no-]follow    Follow logs
  --host=host      [default: localhost] Host to access the MESG engine
  --name=name      (required) [default: engine] Name of the docker service running the engine
  --tail=tail      [default: 10000] Display the last N lines
```

_See code: [src/commands/daemon/logs.ts](https://github.com/mesg-foundation/js-sdk/blob/v0.1.2/src/commands/daemon/logs.ts)_

## `mesg-cli daemon:start`

Start the Engine

```
USAGE
  $ mesg-cli daemon:start

OPTIONS
  -h, --help           show CLI help
  -p, --port=port      [default: 50052] Port to access the MESG engine
  -q, --quiet          Display only essential information
  --host=host          [default: localhost] Host to access the MESG engine
  --name=name          (required) [default: engine] Name of the docker service running the engine
  --network=network    (required) [default: mesg-dev-chain] Name of the network to connect to
  --p2p-port=p2p-port  (required) [default: 26656] Port to use for p2p interaction
  --path=path          (required) [default: /Users/antho/.mesg] Path to the mesg folder
  --[no-]pull          Pull the latest image of the given version
  --version=version    (required) [default: v0.18] Version of the Engine to run
```

_See code: [src/commands/daemon/start.ts](https://github.com/mesg-foundation/js-sdk/blob/v0.1.2/src/commands/daemon/start.ts)_

## `mesg-cli daemon:status`

Get the Engine's status

```
USAGE
  $ mesg-cli daemon:status

OPTIONS
  -h, --help       show CLI help
  -p, --port=port  [default: 50052] Port to access the MESG engine
  -q, --quiet      Display only essential information
  --host=host      [default: localhost] Host to access the MESG engine
  --name=name      (required) [default: engine] Name of the docker service running the engine
```

_See code: [src/commands/daemon/status.ts](https://github.com/mesg-foundation/js-sdk/blob/v0.1.2/src/commands/daemon/status.ts)_

## `mesg-cli daemon:stop`

Stop the Engine

```
USAGE
  $ mesg-cli daemon:stop

OPTIONS
  -h, --help       show CLI help
  -p, --port=port  [default: 50052] Port to access the MESG engine
  -q, --quiet      Display only essential information
  --host=host      [default: localhost] Host to access the MESG engine
  --name=name      (required) [default: engine] Name of the docker service running the engine
```

_See code: [src/commands/daemon/stop.ts](https://github.com/mesg-foundation/js-sdk/blob/v0.1.2/src/commands/daemon/stop.ts)_
