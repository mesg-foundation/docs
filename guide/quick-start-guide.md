# Quick Start Guide

This step-by-step guide will show you how to create an application that gets the ERC20 token balance of an Ethereum account every 10 seconds and send it to a Webhook.

[[toc]]

## 1. Installation

Run the following command in a console to install the MESG CLI:

```bash
npm install -g mesg-cli
```

More details on [the installation guide](/guide/installation.md).

## 2. Run the MESG Engine

MESG Engine runs as a daemon. To start it, execute:

```bash
mesg-cli daemon:start
```

The first start will take few minutes.. Check the daemon logs by running:
```
mesg-cli daemon:logs
```

Wait until you see `server listens on [::]:50052`.

## 3. Deploy the services

You first need to deploy the 3 services your application will use.

First, deploy the [Webhook service](https://marketplace.mesg.com/services/webhook):

```bash
mesg-cli service:create "$(mesg-cli service:compile mesg://marketplace/service/9KnooKaxKjjoXF3d9jSCLZNVXoFmNmpC2dwpSi7bkRBd)"
```

Then, deploy the [emit event interval service](https://marketplace.mesg.com/services/emit-event-interval):

```bash
mesg-cli service:create "$(mesg-cli service:compile mesg://marketplace/service/3jQFCECh9ovnWZgfib8VjV35VBjoRFW62b1PpmgLvxpc)"
```

Lastly, deploy the [ethereum erc20 service](https://marketplace.mesg.com/services/ethereum-erc20):

```bash
mesg-cli service:create "$(mesg-cli service:compile mesg://marketplace/service/FZk4bpkmofTsmDrj31ptB1emdNNN8C1ckfLzYwNgEyqX)"
```

Every time a service is deployed, the console displays its id. This id is a unique way for the application to connect to the right service through the MESG Engine.

## 4. Start the services

Start the Webhook service:
```bash
mesg-cli service:start webhook
```

Start emit event interval service:
```bash
mesg-cli service:start emit-event-interval
```

Start ethereum erc20 service:
```bash
mesg-cli service:start ethereum-erc20 --env PROVIDER_ENDPOINT=https://mainnet.infura.io/v3/d75ab9cb284f4536b1da2ce9f8201bdb
```

## 5. Create the application

Now the services are deployed and started, let's create the application.

The application will be developed with Javascript and [NodeJS](https://nodejs.org).

Let's init the app and install the [MESG JS library](https://github.com/mesg-foundation/mesg-js).

Create and move your terminal to a folder that will contain the application. Then run:

```bash
npm init && npm install --save mesg-js
```

Now, create an `index.js` file and with the following code:

```javascript
const mesg = require('mesg-js').application()

const main = async () => {
  const emitEventInterval = await mesg.resolve('emit-event-interval')
  const ethereumErc20 = await mesg.resolve('ethereum-erc20')
  const webhook = await mesg.resolve('webhook')
}

main()
```

## 6. Listen for events

Let's listen for events `every_10_seconds` of the service [`emit-event-interval`](https://marketplace.mesg.com/services/emit-event-interval#api). This service emit multiple events on a regular interval. We will make the application to listen only to the events that are emitted every 10 seconds.

Add the following code after `const webhook = await mesg.resolve('webhook')`:

```javascript
// Listen events
mesg.listenEvent({
  filter: {
    instanceHash: emitEventInterval,
    key: 'every_10_seconds'
  }
})
  .on('data', async (event) => {
    console.log('event received')
  })
  .on('error', (error) => {
    console.error('an error occurred while listening the events', error.message)
  })

console.log('application is running and listening for events')
```

## 7. Get the ERC20 token balance of an account

Let's get the balance of an Ethereum account of the MESG Token.

To do so, let's execute the task `balanceOf` of service [`ethereum-erc20`](https://marketplace.mesg.com/services/ethereum-erc20#api).

Add the following code after `console.log('event received')`:

```javascript
console.log('event received')

try {
  // Get the balance
  const balanceResult = await mesg.executeTaskAndWaitResult({
    instanceHash: ethereumErc20,
    taskKey: 'balanceOf',
    inputs: mesg.encodeData({
      contractAddress: '0x420167d87d35c3a249b32ef6225872fbd9ab85d2',
      address: '0xe17ee7b3c676701c66b395a35f0df4c2276a344e',
    })
  })
  if (balanceResult.error) {
    console.error('an error occurred while getting the balance', balanceResult.error)
    return
  }
  const balanceData = mesg.decodeData(balanceResult.outputs)
  console.log('balance is', balanceData.balance)
} catch (error) {
  console.error('an error occurred', error.message)
}
```

## 8. Send the balance to a Webhook

Let's send the balance to a Webhook.

Let's call the task `call` of the service [`webhook`](https://marketplace.mesg.com/services/webhook#api).

Add the following code after `console.log('balance is', balanceData.balance)`:

```javascript
console.log('balance is', balanceData.balance)

 // Call the webhook
const requestResult = await mesg.executeTaskAndWaitResult({
  instanceHash: webhook,
  taskKey: 'call',
  inputs: mesg.encodeData({
    url: 'https://webhook.site/60e515e8-f8c0-47c8-8de9-898e5832395a',
    data: balanceData,
  })
})
if (requestResult.error) {
  console.error('an error occurred while calling the webhook', requestResult.error)
  return
}
const requestData = mesg.decodeData(requestResult.outputs)
console.log('request status is', requestData.status)
```

We will use [Webhook.site](https://webhook.site/) to generate a unique webhook URL and display the requests. Go on https://webhook.site, copy the generate URL (it looks like `https://webhook.site/b5f9ecce-bd5a-41c6-b60c-164d64849b5d`), and replace `__REPLACE_BY_WEBHOOK_URL__`.

## 9. Start the application

Start your application like any node application:

```bash
node index.js
```

Wait a few seconds for the `every_10_seconds` event to be triggered.

:tada: The webhook should be called with the MESG Token balance. Go to back to webhook.site and check the request's data!

## Final version of the source code

Here is the final version of the source code:

```javascript
const mesg = require('mesg-js').application()

const main = async () => {
  const emitEventInterval = await mesg.resolve('emit-event-interval')
  const ethereumErc20 = await mesg.resolve('ethereum-erc20')
  const webhook = await mesg.resolve('webhook')

  // Listen events
  mesg.listenEvent({
    filter: {
      instanceHash: emitEventInterval,
      key: 'every_10_seconds'
    }
  })
    .on('data', async (event) => {
      console.log('event received')

      try {
        // Get the balance
        const balanceResult = await mesg.executeTaskAndWaitResult({
          instanceHash: ethereumErc20,
          taskKey: 'balanceOf',
          inputs: mesg.encodeData({
            contractAddress: '0x420167d87d35c3a249b32ef6225872fbd9ab85d2',
            address: '0xe17ee7b3c676701c66b395a35f0df4c2276a344e',
          })
        })
        if (balanceResult.error) {
          console.error('an error occurred while getting the balance', balanceResult.error)
          return
        }
        const balanceData = mesg.decodeData(balanceResult.outputs)
        console.log('balance is', balanceData.balance)

        // Call the webhook
        const requestResult = await mesg.executeTaskAndWaitResult({
          instanceHash: webhook,
          taskKey: 'call',
          inputs: mesg.encodeData({
            url: 'https://webhook.site/60e515e8-f8c0-47c8-8de9-898e5832395a',
            data: balanceData,
          })
        })
        if (requestResult.error) {
          console.error('an error occurred while calling the webhook', requestResult.error)
          return
        }
        const requestData = mesg.decodeData(requestResult.outputs)
        console.log('request status is', requestData.status)
      } catch (error) {
        console.error('an error occurred', error.message)
      }
    })
    .on('error', (error) => {
      console.error('an error occurred while listening the events', error.message)
    })

  console.log('application is running and listening for events')
}

main()
```

::: tip Get Help
You need help ? Check out the <a href="https://forum.mesg.com" target="_blank">MESG Forum</a>.
