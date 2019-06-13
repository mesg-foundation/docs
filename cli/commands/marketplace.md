# `mesg-cli marketplace`
======================

Let you interact with the MESG Marketplace

* [`mesg-cli marketplace:create-offer SID`](#mesg-cli-marketplacecreate-offer-sid)
* [`mesg-cli marketplace:publish SERVICE_PATH`](#mesg-cli-marketplacepublish-service_path)
* [`mesg-cli marketplace:purchase SERVICE_ID OFFER_ID`](#mesg-cli-marketplacepurchase-service_id-offer_id)

## `mesg-cli marketplace:create-offer SID`

Create a new offer on a service on the MESG Marketplace

```
USAGE
  $ mesg-cli marketplace:create-offer SID

ARGUMENTS
  SID  SID of the service on the MESG Marketplace

OPTIONS
  -a, --account=account        Account to use
  -h, --help                   show CLI help
  -p, --passphrase=passphrase  Passphrase to unlock your account
  -q, --quiet
  --duration=duration          (required) Duration (in second) of the offer to create
  --price=price                (required) Price (in MESG token) of the offer to create
  --silent
```

_See code: [src/commands/marketplace/create-offer.ts](https://github.com/mesg-foundation/cli/blob/v1.0.0/src/commands/marketplace/create-offer.ts)_

## `mesg-cli marketplace:publish SERVICE_PATH`

Publish a service on the MESG Marketplace

```
USAGE
  $ mesg-cli marketplace:publish SERVICE_PATH

ARGUMENTS
  SERVICE_PATH  [default: ./] Path of the service

OPTIONS
  -a, --account=account        Account to use
  -h, --help                   show CLI help
  -p, --passphrase=passphrase  Passphrase to unlock your account
  -q, --quiet
  --silent
```

_See code: [src/commands/marketplace/publish.ts](https://github.com/mesg-foundation/cli/blob/v1.0.0/src/commands/marketplace/publish.ts)_

## `mesg-cli marketplace:purchase SERVICE_ID OFFER_ID`

Purchase a service on the MESG Marketplace

```
USAGE
  $ mesg-cli marketplace:purchase SERVICE_ID OFFER_ID

ARGUMENTS
  SERVICE_ID  ID of the service on the MESG Marketplace
  OFFER_ID    ID of the offer on the MESG Marketplace

OPTIONS
  -a, --account=account        Account to use
  -h, --help                   show CLI help
  -p, --passphrase=passphrase  Passphrase to unlock your account
  -q, --quiet
  --silent
```

_See code: [src/commands/marketplace/purchase.ts](https://github.com/mesg-foundation/cli/blob/v1.0.0/src/commands/marketplace/purchase.ts)_
