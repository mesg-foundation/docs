# `mesg-cli process`
==================

Manage processes

* [`mesg-cli process:compile [PROCESS_FILE]`](#mesg-cli-processcompile-process_file)
* [`mesg-cli process:create DEFINITION`](#mesg-cli-processcreate-definition)
* [`mesg-cli process:delete PROCESS_HASH...`](#mesg-cli-processdelete-process_hash)
* [`mesg-cli process:detail PROCESS_HASH`](#mesg-cli-processdetail-process_hash)
* [`mesg-cli process:list`](#mesg-cli-processlist)

## `mesg-cli process:compile [PROCESS_FILE]`

Compile a process

```
USAGE
  $ mesg-cli process:compile [PROCESS_FILE]

ARGUMENTS
  PROCESS_FILE  Path of a process file

OPTIONS
  -h, --help       show CLI help
  -p, --port=port  [default: 50052] Port to access the MESG engine
  -q, --quiet      Display only essential information
  --dev            compile the process and automatically deploy and start all the services
  --env=FOO=BAR    Set environment variables
  --host=host      [default: localhost] Host to access the MESG engine
```

_See code: [src/commands/process/compile.ts](https://github.com/mesg-foundation/cli/blob/v1.2.0/src/commands/process/compile.ts)_

## `mesg-cli process:create DEFINITION`

Create a process

```
USAGE
  $ mesg-cli process:create DEFINITION

ARGUMENTS
  DEFINITION  Process's definition. Use process:compile first to build process definition

OPTIONS
  -h, --help       show CLI help
  -p, --port=port  [default: 50052] Port to access the MESG engine
  -q, --quiet      Display only essential information
  --host=host      [default: localhost] Host to access the MESG engine
```

_See code: [src/commands/process/create.ts](https://github.com/mesg-foundation/cli/blob/v1.2.0/src/commands/process/create.ts)_

## `mesg-cli process:delete PROCESS_HASH...`

Delete one or many processes

```
USAGE
  $ mesg-cli process:delete PROCESS_HASH...

OPTIONS
  -h, --help       show CLI help
  -p, --port=port  [default: 50052] Port to access the MESG engine
  -q, --quiet      Display only essential information
  --confirm        Confirm deletion
  --host=host      [default: localhost] Host to access the MESG engine
```

_See code: [src/commands/process/delete.ts](https://github.com/mesg-foundation/cli/blob/v1.2.0/src/commands/process/delete.ts)_

## `mesg-cli process:detail PROCESS_HASH`

Display detailed information on a process

```
USAGE
  $ mesg-cli process:detail PROCESS_HASH

OPTIONS
  -h, --help       show CLI help
  -p, --port=port  [default: 50052] Port to access the MESG engine
  -q, --quiet      Display only essential information
  --host=host      [default: localhost] Host to access the MESG engine
```

_See code: [src/commands/process/detail.ts](https://github.com/mesg-foundation/cli/blob/v1.2.0/src/commands/process/detail.ts)_

## `mesg-cli process:list`

List processes

```
USAGE
  $ mesg-cli process:list

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

_See code: [src/commands/process/list.ts](https://github.com/mesg-foundation/cli/blob/v1.2.0/src/commands/process/list.ts)_
