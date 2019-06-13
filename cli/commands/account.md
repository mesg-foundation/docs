# `mesg-cli account`
==================

Manage your MESG Accounts

* [`mesg-cli account:create`](#mesg-cli-accountcreate)
* [`mesg-cli account:delete ADDRESS`](#mesg-cli-accountdelete-address)
* [`mesg-cli account:export ADDRESS`](#mesg-cli-accountexport-address)
* [`mesg-cli account:import ACCOUNT`](#mesg-cli-accountimport-account)
* [`mesg-cli account:import-private-key PRIVATE_KEY`](#mesg-cli-accountimport-private-key-private_key)
* [`mesg-cli account:list`](#mesg-cli-accountlist)

## `mesg-cli account:create`

Create a new account

```
USAGE
  $ mesg-cli account:create

OPTIONS
  -h, --help               show CLI help
  -q, --quiet
  --passphrase=passphrase  (required) Passphrase to unlock your account
  --silent
```

_See code: [src/commands/account/create.ts](https://github.com/mesg-foundation/cli/blob/v1.0.0/src/commands/account/create.ts)_

## `mesg-cli account:delete ADDRESS`

Delete an existing account

```
USAGE
  $ mesg-cli account:delete ADDRESS

OPTIONS
  -h, --help               show CLI help
  -q, --quiet
  --passphrase=passphrase  (required) Passphrase to unlock your account
  --silent

ALIASES
  $ mesg-cli account:rm
  $ mesg-cli account:destroy
```

_See code: [src/commands/account/delete.ts](https://github.com/mesg-foundation/cli/blob/v1.0.0/src/commands/account/delete.ts)_

## `mesg-cli account:export ADDRESS`

Export an existing account

```
USAGE
  $ mesg-cli account:export ADDRESS

OPTIONS
  -h, --help               show CLI help
  -q, --quiet
  --passphrase=passphrase  (required) Passphrase to unlock your account
  --silent
```

_See code: [src/commands/account/export.ts](https://github.com/mesg-foundation/cli/blob/v1.0.0/src/commands/account/export.ts)_

## `mesg-cli account:import ACCOUNT`

Import a account

```
USAGE
  $ mesg-cli account:import ACCOUNT

ARGUMENTS
  ACCOUNT  Account saved from a previous account

OPTIONS
  -h, --help               show CLI help
  -q, --quiet
  --passphrase=passphrase  (required) Passphrase to unlock your account
  --silent
```

_See code: [src/commands/account/import.ts](https://github.com/mesg-foundation/cli/blob/v1.0.0/src/commands/account/import.ts)_

## `mesg-cli account:import-private-key PRIVATE_KEY`

Import a account from a private key

```
USAGE
  $ mesg-cli account:import-private-key PRIVATE_KEY

ARGUMENTS
  PRIVATE_KEY  Private key for your account

OPTIONS
  -h, --help               show CLI help
  -q, --quiet
  --passphrase=passphrase  (required) Passphrase to unlock your account
  --silent
```

_See code: [src/commands/account/import-private-key.ts](https://github.com/mesg-foundation/cli/blob/v1.0.0/src/commands/account/import-private-key.ts)_

## `mesg-cli account:list`

List all existing accounts

```
USAGE
  $ mesg-cli account:list

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
  $ mesg-cli account:ls
```

_See code: [src/commands/account/list.ts](https://github.com/mesg-foundation/cli/blob/v1.0.0/src/commands/account/list.ts)_
