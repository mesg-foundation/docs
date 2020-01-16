# `mesg-cli service`
==================

Manage services

* [`mesg-cli service:compile [SERVICE]`](#mesg-cli-servicecompile-service)
* [`mesg-cli service:create DEFINITION`](#mesg-cli-servicecreate-definition)
* [`mesg-cli service:detail SERVICE_HASH`](#mesg-cli-servicedetail-service_hash)
* [`mesg-cli service:dev [SERVICE]`](#mesg-cli-servicedev-service)
* [`mesg-cli service:doc [SERVICE]`](#mesg-cli-servicedoc-service)
* [`mesg-cli service:execute RUNNER_HASH TASK`](#mesg-cli-serviceexecute-runner_hash-task)
* [`mesg-cli service:init DIR`](#mesg-cli-serviceinit-dir)
* [`mesg-cli service:list`](#mesg-cli-servicelist)
* [`mesg-cli service:logs RUNNER_HASH`](#mesg-cli-servicelogs-runner_hash)
* [`mesg-cli service:start SERVICE_HASH`](#mesg-cli-servicestart-service_hash)
* [`mesg-cli service:stop RUNNER_HASH...`](#mesg-cli-servicestop-runner_hash)

## `mesg-cli service:compile [SERVICE]`

Compile a service and upload its source to IPFS server

```
USAGE
  $ mesg-cli service:compile [SERVICE]

ARGUMENTS
  SERVICE  [default: ./] Path or url of a service

OPTIONS
  -h, --help       show CLI help
  -p, --port=port  [default: 50052] Port to access the MESG engine
  -q, --quiet      Display only essential information
  --host=host      [default: localhost] Host to access the MESG engine
```

_See code: [src/commands/service/compile.ts](https://github.com/mesg-foundation/js-sdk/blob/v0.1.2/src/commands/service/compile.ts)_

## `mesg-cli service:create DEFINITION`

Create a service

```
USAGE
  $ mesg-cli service:create DEFINITION

ARGUMENTS
  DEFINITION  Service's definition. Use service:compile first to build service definition

OPTIONS
  -h, --help       show CLI help
  -p, --port=port  [default: 50052] Port to access the MESG engine
  -q, --quiet      Display only essential information
  --host=host      [default: localhost] Host to access the MESG engine
  --start          Automatically start the service once created
```

_See code: [src/commands/service/create.ts](https://github.com/mesg-foundation/js-sdk/blob/v0.1.2/src/commands/service/create.ts)_

## `mesg-cli service:detail SERVICE_HASH`

Display detailed information on a service

```
USAGE
  $ mesg-cli service:detail SERVICE_HASH

OPTIONS
  -h, --help       show CLI help
  -p, --port=port  [default: 50052] Port to access the MESG engine
  -q, --quiet      Display only essential information
  --host=host      [default: localhost] Host to access the MESG engine
```

_See code: [src/commands/service/detail.ts](https://github.com/mesg-foundation/js-sdk/blob/v0.1.2/src/commands/service/detail.ts)_

## `mesg-cli service:dev [SERVICE]`

Run a service in development mode

```
USAGE
  $ mesg-cli service:dev [SERVICE]

ARGUMENTS
  SERVICE  [default: ./] Path or url of a service

OPTIONS
  -h, --help       show CLI help
  -p, --port=port  [default: 50052] Port to access the MESG engine
  -q, --quiet      Display only essential information
  --env=FOO=BAR    Set environment variables
  --host=host      [default: localhost] Host to access the MESG engine
  --start          Automatically start the service once created
```

_See code: [src/commands/service/dev.ts](https://github.com/mesg-foundation/js-sdk/blob/v0.1.2/src/commands/service/dev.ts)_

## `mesg-cli service:doc [SERVICE]`

Generate documentation for service and print it on stdout

```
USAGE
  $ mesg-cli service:doc [SERVICE]

ARGUMENTS
  SERVICE  [default: ./] Path of a service

OPTIONS
  -h, --help       show CLI help
  -p, --port=port  [default: 50052] Port to access the MESG engine
  -q, --quiet      Display only essential information
  -s, --save       Save to default readme file
  --host=host      [default: localhost] Host to access the MESG engine
```

_See code: [src/commands/service/doc.ts](https://github.com/mesg-foundation/js-sdk/blob/v0.1.2/src/commands/service/doc.ts)_

## `mesg-cli service:execute RUNNER_HASH TASK`

Execute a task on a running service

```
USAGE
  $ mesg-cli service:execute RUNNER_HASH TASK

ARGUMENTS
  RUNNER_HASH  The hash of the runner that will execute this execution
  TASK         Task key

OPTIONS
  -d, --data=key=value   Task inputs
  -h, --help             show CLI help
  -j, --json=json        Path to a JSON file containing the task inputs
  -p, --port=port        [default: 50052] Port to access the MESG engine
  -q, --quiet            Display only essential information
  --eventHash=eventHash  Event hash to create the execution with
  --host=host            [default: localhost] Host to access the MESG engine
```

_See code: [src/commands/service/execute.ts](https://github.com/mesg-foundation/js-sdk/blob/v0.1.2/src/commands/service/execute.ts)_

## `mesg-cli service:init DIR`

Initialize a service from a template

```
USAGE
  $ mesg-cli service:init DIR

ARGUMENTS
  DIR  Directory to initialize a service into

OPTIONS
  -h, --help               show CLI help
  -p, --port=port          [default: 50052] Port to access the MESG engine
  -q, --quiet              Display only essential information
  -t, --template=template  Specify the template URL to use
  --host=host              [default: localhost] Host to access the MESG engine
```

_See code: [src/commands/service/init.ts](https://github.com/mesg-foundation/js-sdk/blob/v0.1.2/src/commands/service/init.ts)_

## `mesg-cli service:list`

List running services

```
USAGE
  $ mesg-cli service:list

OPTIONS
  -h, --help         show CLI help
  -p, --port=port    [default: 50052] Port to access the MESG engine
  -q, --quiet        Display only essential information
  -x, --extended     show extra columns
  --columns=columns  only show provided columns (comma-separated)
  --csv              output is csv format
  --filter=filter    filter property by partial string matching, ex: name=foo
  --host=host        [default: localhost] Host to access the MESG engine
  --no-header        hide table header from output
  --no-truncate      do not truncate output to fit screen
  --sort=sort        property to sort by (prepend '-' for descending)
```

_See code: [src/commands/service/list.ts](https://github.com/mesg-foundation/js-sdk/blob/v0.1.2/src/commands/service/list.ts)_

## `mesg-cli service:logs RUNNER_HASH`

Fetch the logs of a service

```
USAGE
  $ mesg-cli service:logs RUNNER_HASH

OPTIONS
  -h, --help       show CLI help
  -p, --port=port  [default: 50052] Port to access the MESG engine
  -q, --quiet      Display only essential information
  --event=event    Display a specific event
  --[no-]events    Display events
  --[no-]follow    Follow log output
  --host=host      [default: localhost] Host to access the MESG engine
  --[no-]results   Display results
  --tail=tail      [default: 10000] Display the last N lines
  --task=task      Display a specific task results
```

_See code: [src/commands/service/logs.ts](https://github.com/mesg-foundation/js-sdk/blob/v0.1.2/src/commands/service/logs.ts)_

## `mesg-cli service:start SERVICE_HASH`

Start a service by creating a new runner

```
USAGE
  $ mesg-cli service:start SERVICE_HASH

OPTIONS
  -h, --help       show CLI help
  -p, --port=port  [default: 50052] Port to access the MESG engine
  -q, --quiet      Display only essential information
  --env=FOO=BAR    Set environment variables
  --host=host      [default: localhost] Host to access the MESG engine
```

_See code: [src/commands/service/start.ts](https://github.com/mesg-foundation/js-sdk/blob/v0.1.2/src/commands/service/start.ts)_

## `mesg-cli service:stop RUNNER_HASH...`

Stop one or more running service

```
USAGE
  $ mesg-cli service:stop RUNNER_HASH...

OPTIONS
  -h, --help       show CLI help
  -p, --port=port  [default: 50052] Port to access the MESG engine
  -q, --quiet      Display only essential information
  --confirm        Confirm deletion
  --delete-data    Delete running service persistent data
  --host=host      [default: localhost] Host to access the MESG engine
```

_See code: [src/commands/service/stop.ts](https://github.com/mesg-foundation/js-sdk/blob/v0.1.2/src/commands/service/stop.ts)_
