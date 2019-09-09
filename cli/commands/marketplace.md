# `mesg-cli marketplace`
======================

Interact with the Marketplace

* [`mesg-cli marketplace:create-offer SID`](#mesg-cli-marketplacecreate-offer-sid)
* [`mesg-cli marketplace:publish SERVICE_PATH`](#mesg-cli-marketplacepublish-service_path)
* [`mesg-cli marketplace:purchase SID OFFER_ID`](#mesg-cli-marketplacepurchase-sid-offer_id)

## `mesg-cli marketplace:create-offer SID`

Create an offer of a service

```
USAGE
  $ mesg-cli marketplace:create-offer SID

ARGUMENTS
  SID  SID of the service

OPTIONS
  -a, --account=account        Account to use
  -h, --help                   show CLI help
  -p, --passphrase=passphrase  Passphrase to unlock the account
  -p, --port=port              [default: 50052] Port to access the MESG engine
  -q, --quiet                  Display only essential information
  --duration=duration          (required) Duration (in seconds)
  --host=host                  [default: localhost] Host to access the MESG engine
  --price=price                (required) Price (in MESG tokens)
```

_See code: [src/commands/marketplace/create-offer.ts](https://github.com/mesg-foundation/cli/blob/v1.3.0/src/commands/marketplace/create-offer.ts)_

## `mesg-cli marketplace:publish SERVICE_PATH`

Publish a service

```
USAGE
  $ mesg-cli marketplace:publish SERVICE_PATH

ARGUMENTS
  SERVICE_PATH  [default: ./] Path of the service

OPTIONS
  -a, --account=account        Account to use
  -h, --help                   show CLI help
  -p, --passphrase=passphrase  Passphrase to unlock the account
  -p, --port=port              [default: 50052] Port to access the MESG engine
  -q, --quiet                  Display only essential information
  --host=host                  [default: localhost] Host to access the MESG engine
```

_See code: [src/commands/marketplace/publish.ts](https://github.com/mesg-foundation/cli/blob/v1.3.0/src/commands/marketplace/publish.ts)_

## `mesg-cli marketplace:purchase SID OFFER_ID`

Purchase a service

```
USAGE
  $ mesg-cli marketplace:purchase SID OFFER_ID

ARGUMENTS
  SID       ID of the service
  OFFER_ID  ID of the offer

OPTIONS
  -a, --account=account        Account to use
  -h, --help                   show CLI help
  -p, --passphrase=passphrase  Passphrase to unlock the account
  -p, --port=port              [default: 50052] Port to access the MESG engine
  -q, --quiet                  Display only essential information
  --host=host                  [default: localhost] Host to access the MESG engine
```

_See code: [src/commands/marketplace/purchase.ts](https://github.com/mesg-foundation/cli/blob/v1.3.0/src/commands/marketplace/purchase.ts)_
