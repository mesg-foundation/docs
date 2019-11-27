---
title: Receive email when there is an ERC20 transfer
description: 'Tutorial: how to create an application that sends an email every time there is
  a transfer on an ERC20 smart contract.'
published_link: 'https://docs.mesg.com/tutorials/erc20-transfer-notifications/receive-email-when-there-is-an-erc20-transfer.html'
---

# Receive email when there is an ERC20 transfer

Today we'll learn how to create a JavaScript application that send an email when an ERC20 transfer occurs on Ethereum.

This application is using two services each covered by a tutorial:

* [Tutorial: Listen for transfers of an Ethereum ERC20 token](./listen-for-transfers-of-an-ethereum-erc20-token.md)
* [Tutorial: Send email with Sendgrid](./send-emails-with-sendgrid.md)

You can access the final version of the [source code on GitHub](https://github.com/mesg-foundation/docs/tree/master/tutorials/erc20-transfer-notifications/email-notification-on-erc20-transfer).

::: tip
If you haven't installed **MESG SDK** yet, follow [this guide](/guide/installation.md).
:::

## Setup

### Start MESG Engine

Let's start MESG Engine, if it isn't already running:

```text
mesg-cli daemon:start
```

### Get a SendGrid API Key

Go to [https://app.sendgrid.com/settings/api\_keys](https://app.sendgrid.com/settings/api_keys) then click on "Create API Key". Select "Full Access" and follow the steps. Copy/paste the generated API Key somewhere. You will need it later.

### Deploy the Services

We'll start by deploying the two services. If you haven't already, make sure to read [the tutorials](./) to see how they were created.

Deploy the [ERC20 Service](https://github.com/mesg-foundation/service-ethereum-erc20):

```bash
mesg-cli service:create "$(mesg-cli service:compile https://github.com/mesg-foundation/service-ethereum-erc20)"
```

Deploy the [SendGrid Service](https://github.com/mesg-foundation/service-email-sendgrid):

```bash
mesg-cli service:create "$(mesg-cli service:compile https://github.com/mesg-foundation/service-email-sendgrid)"
```

Replace `__CHANGE_WITH_YOUR_SENDGRID_API_KEY__` by the SendGrid API Key.

### Start the services

Start the ERC20 Service:

```bash
mesg-cli service:start ethereum-erc20 --env PROVIDER_ENDPOINT=https://mainnet.infura.io/v3/d75ab9cb284f4536b1da2ce9f8201bdb
```

Start the SendGrid Service:

```bash
mesg-cli service:start email-sendgrid --env SENDGRID_API_KEY=__CHANGE_WITH_YOUR_SENDGRID_API_KEY__
```

### Init the application

Let's init the application:

```bash
npm init -y
```

Then, install `mesg-js` library:

```bash
npm install --save mesg-js
```

## Code the application

The setup for our application has finished. Now, let's code it. Create and open a `index.js` file.

### Init mesg-js

Require the `mesg-js` library on top of your code with the following code:

```javascript
const mesg = require('mesg-js').application()
```

### Listen events

In this tutorial, we will limit the application to listen transfers from the 0x Protocol (ZRX) token to limit the number of emails. You can check its activity on [Etherscan](https://etherscan.io/address/0xe41d2489571d322189246dafa5ebde1f4699f498#contracts).

Let's listen for events, filter them and display them:

```javascript
const mesg = require('mesg-js').application()

async function main() {
  // Listen for the event.
  mesg.listenEvent({
    filter: {
      instanceHash: await mesg.resolve('ethereum-erc20'), // The serviceID of the ERC20 service deployed
      key: 'transfer' // The event we want to listen
    }
  })
    .on('data', async (event) => {
      const transfer = mesg.decodeData(event.data)

      if (transfer.contractAddress.toLowerCase() !== '0xe41d2489571d322189246dafa5ebde1f4699f498') {
        return
      }
      console.log('New ERC20 transfer received. Transaction hash:', transfer.transactionHash)
    })
    .on('error', (err) => {
      console.error(err.message)
    })

  console.log('Listening ERC20 transfer...')
}

main()
```

### Execute task

Now, let's execute a task on every time an event is received.
Add after:
```javascript
console.log('New ERC20 transfer received. Transaction hash:', transfer.transactionHash)
```

This:
```javascript
// Execute task.
console.log('Will send email...')
try {
  const result = await mesg.executeTaskAndWaitResult({
    instanceHash: await mesg.resolve('email-sendgrid'), // The serviceID of the service to send emails
    taskKey: 'send', // The task we want to execute
    inputs: mesg.encodeData({ // The input data that task needs
      from: 'test@erc20notification.com',
      to: '__REPLACE_WITH_YOUR_EMAIL__',
      subject: 'New ERC20 transfer',
      text: `Transfer from ${transfer.from} to ${transfer.to} of ${transfer.value} tokens -> ${transfer.transactionHash}`
    })
  })
  if (result.error) {
    console.error('error during email sent', result.error)
    return
  }
  console.log('task send return status', mesg.decodeData(result.outputs).status)
} catch (err) {
  console.error(err.message)
}
```

Replace `__REPLACE_WITH_YOUR_EMAIL__` by your email.

The `index.js` file should look like:

<<< @/tutorials/erc20-transfer-notifications/email-notification-on-erc20-transfer/index.js

#### Run it!

Now your application is ready.

```bash
node index.js
```

Your application will automatically start the services, connect to the Ethereum network, and send you an email every time a transfer occurs on ZRX token.

As it is based on the ZRX token transfer activity, it could take a while to receive the first email.

#### Check logs

You can check the logs of the service ERC20 by running the command:
```
mesg-cli service:logs ethereum-erc20
```

It will display the activity of all ERC20 (not only ZRX token).

#### I don't want to wait

If you want to spam yourself with emails, you can remove the filter:
```javascript
if (transfer.contractAddress.toLowerCase() !== '0xe41d2489571d322189246dafa5ebde1f4699f498') {
  return
}
```

Be careful, ERC20 tokens have a lot of activity so it is possible to have thousands of emails per day and reach the SendGrid limit if you leave your application running.


### Final version of the source code

<card-link url="https://github.com/mesg-foundation/docs/tree/master/tutorials/erc20-transfer-notifications/email-notification-on-erc20-transfer"></card-link>

