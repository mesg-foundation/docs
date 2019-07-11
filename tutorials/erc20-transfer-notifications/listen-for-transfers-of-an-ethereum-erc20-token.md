---
title: Listen for transfers of an Ethereum ERC20 token
description: 'Tutorial: how to create a MESG Service that listens for transfers of an
  Ethereum ERC20 token'
published_link: 'https://docs.mesg.com/tutorials/erc20-transfer-notifications/listen-for-transfers-of-an-ethereum-erc20-token.html'
---

# Listen for transfers of an Ethereum ERC20 token

## Introduction

In this tutorial, we will cover how to create a MESG Service that listens for the transfers of an Ethereum ERC20 token.

This Service will be developed with JavaScript and [Node.js](https://nodejs.org).
We will use the library [Web3.js](https://web3js.readthedocs.io/en/1.0/) to interact with Ethereum through [Infura](https://infura.io/).

You can access the final version of the [source code on GitHub](https://github.com/mesg-foundation/docs/tree/master/tutorials/erc20-transfer-notifications/listen-to-transfer-of-ethereum-erc20-token).

You can find a more advanced and maintained version of this service here: [Service Ethereum ERC20](https://github.com/mesg-foundation/service-ethereum-erc20)

::: tip
If you haven't installed **MESG SDK** yet, follow [this guide](/guide/installation.md).
:::

MESG services are composed of two different parts:

* **Tasks:** actions that your service will execute
* **Events:** data that your service provides

For this step of this tutorial, we will only focus on events.

## Create the MESG service

It's time to create our MESG Service. First, open a terminal in your development folder and run the following command:

```bash
mesg-cli service:init ./service-ethereum-erc20-tuto
```

Then, select the `Javascript` template.

The command should have created a `service-ethereum-erc20-tuto` folder containing the boilerplate files for the service.
Leave the files intact; we'll return to them a bit later in this tutorial.

::: tip
You should see a **mesg.yml** and a **Dockerfile** in your service folder which are the fundamental parts of every MESG service.

* **mesg.yml:** A file that contains all of the metadata of your Service. It gives some global descriptions but also includes the tasks and events that the Service can provide.

* **Dockerfile:** A file that describes your Docker container and configures the environment for your service to run inside.
:::

### Before starting...
Let's remove some code related with the service boilerplate for now to create a usual node.js app for demonstration.

First, make sure your terminal is pointed towards the newly-created `service-ethereum-erc20-tuto` folder.

Clean all the code inside `index.js`. And remove the `tasks` folder since we're not going to use it for this service.

And install the dependencies:

 ```bash
npm install
```

### Initialize Web3 with Infura

Let's install [Web3.js](https://web3js.readthedocs.io/en/1.0/):

```text
npm install --save web3@1.0.0-beta.37
```

The first step is to load Web3 and initialize it with Infura.
Add the following code to the top of `index.js` :

```javascript
const Web3 = require('web3')
const web3 = new Web3('wss://mainnet.infura.io/ws/v3/d75ab9cb284f4536b1da2ce9f8201bdb')
```

### Specify the ERC20 contract

To listen to transfers of an ERC20, we'll have to save both the contract ABI and its address.
In this tutorial, we will use the 0x Protocol (ZRX) token. You can find its ABI and address on [Etherscan](https://etherscan.io/address/0xe41d2489571d322189246dafa5ebde1f4699f498#contracts).
For the simplicity of this tutorial, we will use only a small part of the ABI that exposes the transfers.

Create a file `erc20-abi.json` in the Service folder and copy/paste the following ABI:

<<< @/tutorials/erc20-transfer-notifications/listen-to-transfer-of-ethereum-erc20-token/erc20-abi.json

Now, let's come back to `index.js` and initialize the contract with the ABI and the address. Add:

```javascript
const contract = new web3.eth.Contract(require('./erc20-abi.json'), '0xe41d2489571d322189246dafa5ebde1f4699f498')
```

### Listen for transfers

We're finally ready to listen for transfers!

Web3, thanks to the ABI, gives us access to the contract neatly. Let's add the following code to `index.js`:

```javascript
contract.events.Transfer({fromBlock: 'latest'})
  .on('data', (event) => {
    console.log('transfer', event)
  })
  .on('error', (err) => {
    console.error(err)
  })

console.log('Listening ERC20 transfer...')
```

Let's try it!

```bash
node index.js
```

::: warning
It might take a while to receive and display a transfer in the console. The events are received in real time, but if nobody is transferring this token, you won't receive or see any events. You can go onto [Etherscan](https://etherscan.io/token/0xe41d2489571d322189246dafa5ebde1f4699f498) to see the transfers.
:::

Let's improve the output by showing only the useful information. Edit to match:

```javascript
contract.events.Transfer({fromBlock: 'latest'})
  .on('data', (event) => {
    console.log('transfer', {
      blockNumber: event.blockNumber,
      transactionHash: event.transactionHash,
      from: event.returnValues.from,
      to: event.returnValues.to,
      value: event.returnValues.value,
      contractAddress: event.address,
    })
  })
  .on('error', (err) => {
    console.error(err)
  })

console.log('Listening ERC20 transfer...')
```

Let's run it again:

```bash
node index.js
```

In the terminal, we should see something like:

```text
transfer { blockNumber: 5827612,
  transactionHash: '0x02019f4a80ad43019b8e69aed59e1dea0f03fb48d9df610686a1f590e8f6216d',
  from: '0x58993319Fc9e1b6cFAda8047B63a723Cceb1FfFE',
  to: '0x99f79B7A134db6e30d1b12F9Ee823339CaC0BA83',
  value: '112768008150000000000000',
  contractAddress: '0xe41d2489571d322189246dafa5ebde1f4699f498' }
transfer { blockNumber: 5827612,
  transactionHash: '0xf4a0aad5245417ae376cb9962c93bb9c599d8160cec49a5d82ba593033e657d2',
  from: '0x385dFF5650776188f4da150aA8b17a467812923b',
  to: '0xe8b69609342C337873cD20513e64be7FdE9feCf2',
  value: '1000000000000000000',
  contractAddress: '0xe41d2489571d322189246dafa5ebde1f4699f498' }
```

::: tip Congratulation
You've built a Node app that listens in real-time to transfers of an ERC20 token!
:::

## Transform the node app to a MESG Service

Now, it's time to transform this node app to a fully-compatible MESG Service.

### Update mesg.yml

Let's add the event we want to emit to MESG Engine to the `mesg.yml` file.

First, clean the `mesg.yml` file, keeping only the keys: `name`, `sid` and `description`. Change their value to look like this:

```yaml
name: Ethereum ERC20 Service Tutorial
sid: service-ethereum-erc20-tuto
description: Listen to transfers of an ERC20
```

Add the key `configuration`, containing the key `env`, containing the env `PROVIDER_ENDPOINT` like this:

```yaml
configuration:
  env:
    - PROVIDER_ENDPOINT=__ENV_PROVIDER_ENDPOINT_NEEDS_TO_BE_REPLACED__
```

Let's add the transfer event definition:

```yaml
events:
  transfer:
    data:
      blockNumber:
        type: Number
      transactionHash:
        type: String
      from:
        type: String
      to:
        type: String
      value:
        type: String
      contractAddress:
        type: String
```

This definition matches the JavaScript object we want to emit to MESG Engine. You can refer to the [documentation](/guide/service/service-file.md) for more information about the `mesg.yml` file.

The content of `mesg.yml` should look like:

<<< @/tutorials/erc20-transfer-notifications/listen-to-transfer-of-ethereum-erc20-token/mesg.yml

### Require MESG service client

Add the following code to the top of `index.js` :

```javascript
const mesg = require('mesg-js').service()
```

### Emit `transfer` service event to MESG Engine

Replace `console.log` by `mesg.emitEvent`, like so:

```javascript
contract.events.Transfer({fromBlock: 'latest'})
  .on('data', (event) => {
    console.log('New ERC20 transfer received with hash:', event.transactionHash)
    mesg.emitEvent('transfer', {
      blockNumber: event.blockNumber,
      transactionHash: event.transactionHash,
      from: event.returnValues.from,
      to: event.returnValues.to,
      value: event.returnValues.value,
      contractAddress: event.address,
    })
  })
  .on('error', (err) => {
    console.error(err)
  })

console.log('Listening ERC20 transfer...')
```

### Update web3 initialization

Let's update web3 initialization to read the `PROVIDER_ENDPOINT` env variable. Transform:
```javascript
const web3 = new Web3('wss://mainnet.infura.io/ws/v3/d75ab9cb284f4536b1da2ce9f8201bdb')
```
To:
```javascript
const web3 = new Web3(process.env.PROVIDER_ENDPOINT)
```

## Testing

Make sure MESG Engine is running:

```bash
mesg-cli daemon:start
```

It's time to test the Service with MESG Engine!

Let's start the service by running the command:

```bash
mesg-cli service:dev --env PROVIDER_ENDPOINT=wss://mainnet.infura.io/ws/v3/d75ab9cb284f4536b1da2ce9f8201bdb
```

After the deployment and start step, you should see in the console:

```text
Deploy service... service-ethereum-erc20-tuto
Start service... CY21L4ZLSLLR4sb8yYmd3gCgHYgyL6idEo6H9wh84LZF
service |  Listening ERC20 transfer...
```

And finally, after a few seconds:

```text
service |  New ERC20 transfer received with hash: 0x408606b159e1277898ccb6e1741fd6ad1a71291764d1726f7e2406e498043ce8
EVENT[transfer]: {"blockNumber":7949046,"contractAddress":"0xE41d2489571d322189246DaFA5ebDe1F4699F498","from":"0xD551234Ae421e3BCBA99A0Da6d736074f22192FF","to":"0x2Dd7BB5D07C391ABE93495b42e315C5F3f7e3131","transactionHash":"0xbf289bc1fa966b004014bf893b46a3cc972d38f398234db2678e3b7cc2f2c7ca","value":"96099000000000000000"}
```

Stop the service by pressing `ctrl + c` in the terminal.

::: tip Congratulation!
Hooray!!! 🎉 You finished building a MESG Service that listens for transfer of an ERC20 token!
:::

## Final version of the source code

<card-link url="https://github.com/mesg-foundation/docs/tree/master/tutorials/erc20-transfer-notifications/listen-to-transfer-of-ethereum-erc20-token"></card-link>
