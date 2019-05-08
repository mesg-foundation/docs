# Wallet

The wallet contains the Ethereum accounts you can use to interact with the Marketplace.

The wallet holds the private keys of the Ethereum accounts and never exposes them.

::: warning Back up everything!
Make sure to always back up the passphrase and the exported account to prevent losing access to the account and thus your Ether or MESG Tokens!
:::

## Create an account

First, let's create an account by executing the following command:
```bash
mesg-core wallet create
```

Enter a desired passphrase and hit enter.

For security reasons, you should set a different passphrase for every account you create.

**Back up the passphrase!** If you lose it, you will lose the access to this account forever.

You should get a new account with an address like `0xc31183605099bc7207a2e0f49520581a216d9bcd`.

## Export the account

Let's export the account so you can back it up in a secure location.

To export an account, execute the command:
```bash
mesg-core wallet export 0xc31183605099bc7207a2e0f49520581a216d9bcd
```

_Replace `0xc31183605099bc7207a2e0f49520581a216d9bcd` by the address created previously._

Enter the account's passphrase and hit enter.

You should get a JSON object like:

```json
{
  "address": "c31183605099bc7207a2e0f49520581a216d9bcd",
  "crypto": {
    "cipher": "aes-128-ctr",
    "cipherparams": {
      "iv": "659c9beec5e10ffe3902b0fbe05bf238"
    },
    "ciphertext": "394c35825d697daad5a2b7f9c0886a531fe72e494361964297e832199b52b8f5",
    "kdf": "scrypt",
    "kdfparams": {
      "dklen": 32,
      "n": 262144,
      "p": 1,
      "r": 8,
      "salt": "a09cc88bd6201ff361b1ee61af7dbca28df8716cb90a830328c28ff5578312de"
    },
    "mac": "b478343498fb4c91b73694d922a90bc642245135ccb1520f578cb725823cdb69"
  },
  "id": "d1e36609-7282-4ce9-bdc3-ad653265da06",
  "version": 3
}
```

Copy and paste the JSON object in a file in a secure location.

**You will need both the passphrase and this file to import this account.**

::: tip Compatibility
The exported account respects the [Web3 Secret Storage specification of Ethereum](https://github.com/ethereum/wiki/wiki/Web3-Secret-Storage-Definition) so you should be able to import from / export to other Ethereum wallets.
:::

## List accounts

To list all available accounts, execute:

```bash
mesg-core wallet list
```

## Delete an account

To delete an account from the wallet, execute:

```bash
mesg-core wallet delete 0xc31183605099bc7207a2e0f49520581a216d9bcd
```

Enter the account's passphrase and hit enter.

Make sure to export the account first if you want to import it later.

## Import an account

An account can be imported by two ways: from a private key, or from a JSON file (like the one returned by the [export](#export-an-account) command).

In both cases, execute the command and answer the questions:

```bash
mesg-core wallet import
```
