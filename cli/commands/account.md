# `mesg-cli account`
==================

Manage accounts

* [`mesg-cli account:create`](#mesg-cli-accountcreate)
* [`mesg-cli account:delete ADDRESS`](#mesg-cli-accountdelete-address)
* [`mesg-cli account:export ADDRESS`](#mesg-cli-accountexport-address)
* [`mesg-cli account:import ACCOUNT`](#mesg-cli-accountimport-account)
* [`mesg-cli account:import-private-key PRIVATE_KEY`](#mesg-cli-accountimport-private-key-private_key)
* [`mesg-cli account:list`](#mesg-cli-accountlist)

## `mesg-cli account:create`

Create an account

```
USAGE
  $ mesg-cli account:create

OPTIONS
  -h, --help               show CLI help
  -p, --port=port          [default: 50052] Port to access the MESG engine
  -q, --quiet              Display only essential information
  --host=host              [default: localhost] Host to access the MESG engine
  --passphrase=passphrase  Passphrase of the account
```

_See code: [src/commands/account/create.ts](https://github.com/mesg-foundation/cli/blob/v1.3.0/src/commands/account/create.ts)_

## `mesg-cli account:delete ADDRESS`

Delete an account

```
USAGE
  $ mesg-cli account:delete ADDRESS

OPTIONS
  -h, --help               show CLI help
  -p, --port=port          [default: 50052] Port to access the MESG engine
  -q, --quiet              Display only essential information
  --host=host              [default: localhost] Host to access the MESG engine
  --passphrase=passphrase  Passphrase of the account
```

_See code: [src/commands/account/delete.ts](https://github.com/mesg-foundation/cli/blob/v1.3.0/src/commands/account/delete.ts)_

## `mesg-cli account:export ADDRESS`

Export an existing account

```
USAGE
  $ mesg-cli account:export ADDRESS

OPTIONS
  -h, --help               show CLI help
  -p, --port=port          [default: 50052] Port to access the MESG engine
  -q, --quiet              Display only essential information
  --host=host              [default: localhost] Host to access the MESG engine
  --passphrase=passphrase  Passphrase of the account
```

_See code: [src/commands/account/export.ts](https://github.com/mesg-foundation/cli/blob/v1.3.0/src/commands/account/export.ts)_

## `mesg-cli account:import ACCOUNT`

Import an account

```
USAGE
  $ mesg-cli account:import ACCOUNT

ARGUMENTS
  ACCOUNT  Account definition in JSON (could be retrieved with account:export)

OPTIONS
  -h, --help               show CLI help
  -p, --port=port          [default: 50052] Port to access the MESG engine
  -q, --quiet              Display only essential information
  --host=host              [default: localhost] Host to access the MESG engine
  --passphrase=passphrase  Passphrase of the account
```

_See code: [src/commands/account/import.ts](https://github.com/mesg-foundation/cli/blob/v1.3.0/src/commands/account/import.ts)_

## `mesg-cli account:import-private-key PRIVATE_KEY`

Import an account with a private key

```
USAGE
  $ mesg-cli account:import-private-key PRIVATE_KEY

ARGUMENTS
  PRIVATE_KEY  Private key of the account

OPTIONS
  -h, --help               show CLI help
  -p, --port=port          [default: 50052] Port to access the MESG engine
  -q, --quiet              Display only essential information
  --host=host              [default: localhost] Host to access the MESG engine
  --passphrase=passphrase  Passphrase of the account
```

_See code: [src/commands/account/import-private-key.ts](https://github.com/mesg-foundation/cli/blob/v1.3.0/src/commands/account/import-private-key.ts)_

## `mesg-cli account:list`

List accounts

```
USAGE
  $ mesg-cli account:list

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

_See code: [src/commands/account/list.ts](https://github.com/mesg-foundation/cli/blob/v1.3.0/src/commands/account/list.ts)_
