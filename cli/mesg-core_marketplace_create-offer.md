## mesg-core marketplace create-offer

Create a new offer on a service on the MESG Marketplace

### Synopsis

Create a new offer on a service on the MESG Marketplace

```
mesg-core marketplace create-offer [flags]
```

### Examples

```
mesg-core marketplace create-offer SID
mesg-core marketplace create-offer SID --price 10 --duration 3600
```

### Options

```
  -a, --account string      Account to use
      --duration string     Duration (in second) of the offer to create
  -h, --help                help for create-offer
  -n, --no-passphrase       Leave passphrase empty
  -p, --passphrase string   Passphrase to decrypt the account
      --price string        Price (in MESG token) of the offer to create
```

### Options inherited from parent commands

```
      --no-color     disable colorized output
      --no-spinner   disable spinners
```

### SEE ALSO

* [mesg-core marketplace](mesg-core_marketplace.md)	 - Interact with the MESG Marketplace

