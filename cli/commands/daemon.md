# `mesg-cli daemon`
=================

Manage MESG Engine

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
  -h, --help   show CLI help
  -q, --quiet
  --name=name  (required) [default: engine] name of the service running the engine
  --silent
  --tail=tail  [default: -1] Output specified number of lines at the end of logs
```

_See code: [src/commands/daemon/logs.ts](https://github.com/mesg-foundation/cli/blob/v1.0.0/src/commands/daemon/logs.ts)_

## `mesg-cli daemon:start`

Start the MESG Engine's daemon

```
USAGE
  $ mesg-cli daemon:start

OPTIONS
  -h, --help                                       show CLI help
  -q, --quiet
  --log-force-colors                               log force colors
  --log-format=(text|json)                         [default: text] log format
  --log-level=(debug|info|warn|error|fatal|panic)  [default: info] log level
  --name=name                                      (required) [default: engine] name of the service running the engine
  --silent
  --version=version                                (required) [default: v0.10.0] Version of the engine to run
```

_See code: [src/commands/daemon/start.ts](https://github.com/mesg-foundation/cli/blob/v1.0.0/src/commands/daemon/start.ts)_

## `mesg-cli daemon:status`

Get the Engine's status

```
USAGE
  $ mesg-cli daemon:status

OPTIONS
  -h, --help   show CLI help
  -q, --quiet
  --name=name  (required) [default: engine] name of the service running the engine
  --silent
```

_See code: [src/commands/daemon/status.ts](https://github.com/mesg-foundation/cli/blob/v1.0.0/src/commands/daemon/status.ts)_

## `mesg-cli daemon:stop`

Stop the MESG Engine's daemon

```
USAGE
  $ mesg-cli daemon:stop

OPTIONS
  -h, --help   show CLI help
  -q, --quiet
  --name=name  (required) [default: engine] name of the service running the engine
  --silent
```

_See code: [src/commands/daemon/stop.ts](https://github.com/mesg-foundation/cli/blob/v1.0.0/src/commands/daemon/stop.ts)_
