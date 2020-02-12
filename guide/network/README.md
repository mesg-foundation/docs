# Network

The Engine is using [Cosmos SDK](https://cosmos.network/sdk) and [Tendermint](https://tendermint.com/) for building the decentralized network.

Tendermint is a tool to create blockchain with a byzantine-fault tolerance consensus mechanism. It provides all the underlying P2P functionalities to replicate deterministic state machines across a large number of computers.

Cosmos SDK is a framework to build secure blockchain applications on top of Tendermint. It provides composable modules as well as the necessary tools to interact with Tendermint.

## Public networks

### Testnet 01

The currently only public MESG Network is a testnet called `mesg-testnet-01`.

It uses the token `atto` and any address are prefixed with `mesgtest`.

Its explorer is available on: [explorer.testnet.mesg.com](http://explorer.testnet.mesg.com/)

Its monitoring dashboard is available on: [monitoring.testnet.mesg.com](https://monitoring.testnet.mesg.com/)

You can get `atto` token by using the [faucet available on the explorer](http://explorer.testnet.mesg.com/faucet).

To start your engine on the testnet, execute the following command:
```bash
mesg-cli daemon:start --network mesg-testnet-01 --path $HOME/.mesg-testnet-01
```

::: tip
Make sure to check the Engine's logs to see the synchronization progress as it can take a few hours.
:::

## Local development network

By default the Engine creates a local development network called `mesg-dev-chain`.

This is a **private network** that contains only your data and is validated by your local engine.

To start the Engine on this network, simply run the `daemon:start` command without specifying a network.

Checkout the tutorial on the blog to create your own MESG Network and connect multiple Engines together:
[blog.mesg.com/tutorial-create-a-network-with-multiple-engines](https://blog.mesg.com/tutorial-create-a-network-with-multiple-engines/).

