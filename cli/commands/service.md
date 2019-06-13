# `mesg-cli service`
==================

Manage MESG Services

* [`mesg-cli service:delete SERVICE`](#mesg-cli-servicedelete-service)
* [`mesg-cli service:deploy [SERVICE_PATH_OR_URL]`](#mesg-cli-servicedeploy-service_path_or_url)
* [`mesg-cli service:detail SERVICE`](#mesg-cli-servicedetail-service)
* [`mesg-cli service:dev [SERVICE_PATH]`](#mesg-cli-servicedev-service_path)
* [`mesg-cli service:doc [SERVICE_PATH]`](#mesg-cli-servicedoc-service_path)
* [`mesg-cli service:execute SERVICE TASK`](#mesg-cli-serviceexecute-service-task)
* [`mesg-cli service:init DIR`](#mesg-cli-serviceinit-dir)
* [`mesg-cli service:list`](#mesg-cli-servicelist)
* [`mesg-cli service:logs SERVICE`](#mesg-cli-servicelogs-service)
* [`mesg-cli service:start SERVICE`](#mesg-cli-servicestart-service)
* [`mesg-cli service:stop SERVICE`](#mesg-cli-servicestop-service)
* [`mesg-cli service:validate [SERVICE_PATH]`](#mesg-cli-servicevalidate-service_path)

## `mesg-cli service:delete SERVICE`

Delete one or many services

```
USAGE
  $ mesg-cli service:delete SERVICE

ARGUMENTS
  SERVICE  Hash or Sid

OPTIONS
  -h, --help   show CLI help
  -q, --quiet
  --confirm    Confirm delete
  --keep-data  Do not delete services' persistent data
  --silent

ALIASES
  $ mesg-cli service:rm
  $ mesg-cli service:destroy
```

_See code: [src/commands/service/delete.ts](https://github.com/mesg-foundation/cli/blob/v1.0.0/src/commands/service/delete.ts)_

## `mesg-cli service:deploy [SERVICE_PATH_OR_URL]`

Deploy a service

```
USAGE
  $ mesg-cli service:deploy [SERVICE_PATH_OR_URL]

ARGUMENTS
  SERVICE_PATH_OR_URL  [default: ./] Path of the service or url to access it

OPTIONS
  -h, --help     show CLI help
  -q, --quiet
  --env=FOO=BAR  set env defined in mesg.yml (configuration.env)
  --silent
```

_See code: [src/commands/service/deploy.ts](https://github.com/mesg-foundation/cli/blob/v1.0.0/src/commands/service/deploy.ts)_

## `mesg-cli service:detail SERVICE`

Show details of a deployed service

```
USAGE
  $ mesg-cli service:detail SERVICE

ARGUMENTS
  SERVICE  Hash or Sid

OPTIONS
  -h, --help   show CLI help
  -q, --quiet
  --silent

ALIASES
  $ mesg-cli service:get
```

_See code: [src/commands/service/detail.ts](https://github.com/mesg-foundation/cli/blob/v1.0.0/src/commands/service/detail.ts)_

## `mesg-cli service:dev [SERVICE_PATH]`

Run your service in development mode

```
USAGE
  $ mesg-cli service:dev [SERVICE_PATH]

ARGUMENTS
  SERVICE_PATH  [default: ./] Path of the service

OPTIONS
  -d, --dependency=dependency  Name of the dependency to show the logs from
  -h, --help                   show CLI help
  -q, --quiet
  --env=FOO=BAR                set env defined in mesg.yml (configuration.env)
  --event=event                Filter specific events in the logs
  --no-events                  Remove events from the logs
  --no-results                 Remove results from the logs
  --silent
  --task=task                  Filter specific task results in the logs
```

_See code: [src/commands/service/dev.ts](https://github.com/mesg-foundation/cli/blob/v1.0.0/src/commands/service/dev.ts)_

## `mesg-cli service:doc [SERVICE_PATH]`

Generate the documentation for the service in a README.md file

```
USAGE
  $ mesg-cli service:doc [SERVICE_PATH]

ARGUMENTS
  SERVICE_PATH  [default: ./] Path of the service

OPTIONS
  -h, --help   show CLI help
  -q, --quiet
  -s, --save   Save to default readme file
  --silent

ALIASES
  $ mesg-cli service:doc
  $ mesg-cli service:docs
```

_See code: [src/commands/service/doc.ts](https://github.com/mesg-foundation/cli/blob/v1.0.0/src/commands/service/doc.ts)_

## `mesg-cli service:execute SERVICE TASK`

describe the command here

```
USAGE
  $ mesg-cli service:execute SERVICE TASK

ARGUMENTS
  SERVICE  Hash or Sid
  TASK     Task key

OPTIONS
  -d, --data=FOO=BAR  data required to run the task
  -h, --help          show CLI help
  -j, --json=json     Path to a JSON file containing the data required to run the task
  -q, --quiet
  --silent

ALIASES
  $ mesg-cli service:exec
```

_See code: [src/commands/service/execute.ts](https://github.com/mesg-foundation/cli/blob/v1.0.0/src/commands/service/execute.ts)_

## `mesg-cli service:init DIR`

Initialize a service by creating a mesg.yml and Dockerfile in a dedicated directory.

```
USAGE
  $ mesg-cli service:init DIR

ARGUMENTS
  DIR  Create the service in the directory

OPTIONS
  -h, --help               show CLI help
  -q, --quiet
  -t, --template=template  Specify the template URL to use
  --silent
```

_See code: [src/commands/service/init.ts](https://github.com/mesg-foundation/cli/blob/v1.0.0/src/commands/service/init.ts)_

## `mesg-cli service:list`

List all deployed services

```
USAGE
  $ mesg-cli service:list

OPTIONS
  -h, --help         show CLI help
  -q, --quiet
  -x, --extended     show extra columns
  --columns=columns  only show provided columns (comma-separated)
  --csv              output is csv format
  --filter=filter    filter property by partial string matching, ex: name=foo
  --no-header        hide table header from output
  --no-truncate      do not truncate output to fit screen
  --silent
  --sort=sort        property to sort by (prepend '-' for descending)

ALIASES
  $ mesg-cli service:ls
```

_See code: [src/commands/service/list.ts](https://github.com/mesg-foundation/cli/blob/v1.0.0/src/commands/service/list.ts)_

## `mesg-cli service:logs SERVICE`

Show logs of a service

```
USAGE
  $ mesg-cli service:logs SERVICE

ARGUMENTS
  SERVICE  Hash or Sid

OPTIONS
  -d, --dependency=dependency  Name of the dependency to show the logs from
  -h, --help                   show CLI help
  -q, --quiet
  --event=event                Filter specific events in the logs
  --no-events                  Remove events from the logs
  --no-results                 Remove results from the logs
  --silent
  --task=task                  Filter specific task results in the logs
```

_See code: [src/commands/service/logs.ts](https://github.com/mesg-foundation/cli/blob/v1.0.0/src/commands/service/logs.ts)_

## `mesg-cli service:start SERVICE`

Start a service

```
USAGE
  $ mesg-cli service:start SERVICE

ARGUMENTS
  SERVICE  Hash or Sid

OPTIONS
  -h, --help   show CLI help
  -q, --quiet
  --silent
```

_See code: [src/commands/service/start.ts](https://github.com/mesg-foundation/cli/blob/v1.0.0/src/commands/service/start.ts)_

## `mesg-cli service:stop SERVICE`

Stop a service

```
USAGE
  $ mesg-cli service:stop SERVICE

ARGUMENTS
  SERVICE  Hash or Sid

OPTIONS
  -h, --help   show CLI help
  -q, --quiet
  --silent
```

_See code: [src/commands/service/stop.ts](https://github.com/mesg-foundation/cli/blob/v1.0.0/src/commands/service/stop.ts)_

## `mesg-cli service:validate [SERVICE_PATH]`

Validate a service file. Check the yml format and rules.

```
USAGE
  $ mesg-cli service:validate [SERVICE_PATH]

ARGUMENTS
  SERVICE_PATH  [default: ./] Path of the service

OPTIONS
  -h, --help     show CLI help
  -q, --quiet
  --env=FOO=BAR  set env defined in mesg.yml (configuration.env)
  --silent
```

_See code: [src/commands/service/validate.ts](https://github.com/mesg-foundation/cli/blob/v1.0.0/src/commands/service/validate.ts)_
