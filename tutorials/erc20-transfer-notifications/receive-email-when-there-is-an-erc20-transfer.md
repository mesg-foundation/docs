---
title: Receive email when there is an ERC20 transfer
description: >-
  Tutorial: How to create an application that sends an email every time there is
  a transfer on an ERC20 smart contract.
published_link: 'https://docs.mesg.com/tutorials/erc20-transfer-notifications/receive-email-when-there-is-an-erc20-transfer.html'
---

# Receive email when there is an ERC20 transfer

Today we'll learn how to create a JavaScript application that connects the two previously created MESG Services:

* [Tutorial: Transfer notifications from an ERC20 transfer](./listen-for-transfers-of-an-ethereum-erc20-token.md)
* [Tutorial: Sending emails through SendGrid](./send-emails-with-sendgrid.md)

You can access the final version of the [source code on GitHub](https://github.com/mesg-foundation/docs/tree/master/tutorials/erc20-transfer-notifications/email-notification-on-erc20-transfer).

::: tip
If you haven't installed **MESG Core** yet, you can do so by running the command:

`bash <(curl -fsSL https://mesg.com/install)`

You can also install it manually by following [this guide](../../guide/start-here/quick-start-guide.md#manual-installation).
:::

## Setup

### Start core

Let's start MESG Core, if it isn't already running:

```text
mesg-core start
```

### Deploy the Services

We'll start with our two already-created services. If you haven't already, make sure to read the tutorials to see how they were created.

Deploy the ERC20 Service:

```bash
mesg-core service deploy ./PATH_TO_THE_ERC20_SERVICE
```

Deploy the SendGrid Service:

```bash
mesg-core service deploy ./PATH_TO_THE_SENDGRID_SERVICE
```

### Start the services

Start the ERC20 Service:

```bash
mesg-core service start service-ethereum-erc20-tuto
```

Start the SendGrid Service:

```bash
mesg-core service start send-email-with-sendgrid-tuto
```


### Get a SendGrid API Key

Go to [https://app.sendgrid.com/settings/api\_keys](https://app.sendgrid.com/settings/api_keys) then click on "Create API Key". Select "Full Access" and follow the steps. Copy/paste the generated API Key somewhere. You will need it later.

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

### Listen events & execute task

Require the `mesg-js` library on top of your code with the following code:

```javascript
const mesg = require('mesg-js').application()
```

Then listen for events and execute a task on every event:

```javascript
// Listen for the event.
mesg.listenEvent({
  serviceID: 'service-ethereum-erc20-tuto', // The serviceID of the ERC20 service deployed
  eventFilter: 'transfer' // The event we want to listen
})
  .on('data', (event) => {
    const transfer = JSON.parse(event.eventData)

    console.log('New ERC20 transfer received. will send an email. Transaction hash:', transfer.transactionHash)

    // Execute task.
    mesg.executeTask({
      serviceID: 'send-email-with-sendgrid-tuto', // The serviceID of the service to send emails
      taskKey: 'send', // The task we want to execute
      inputData: JSON.stringify({ // The input data that task needs
        apiKey: '__SENDGRID_API_KEY__',
        from: 'test@erc20notification.com',
        to: '__REPLACE_WITH_YOUR_EMAIL__',
        subject: 'New ERC20 transfer',
        text: `Transfer from ${transfer.from} to ${transfer.to} of ${transfer.value} tokens -> ${transfer.transactionHash}`
      })
    }).catch((err) => {
      console.error(err.message)
    })
  })
  .on('error', (err) => {
    console.error(err.message)
  })

console.log('Listening ERC20 transfer...')
```

Replace `__SENDGRID_API_KEY__` and `__REPLACE_WITH_YOUR_EMAIL__` by the right values. You can deploy the SendGrid service again if you didn't copy its service ID.

#### Run it!

Now your application is ready.

```bash
node index.js
```

Your application will automatically start the services, connect to the Ethereum network, and send you an email every time a transfer occurs on any ERC20 token.

As it is based on the ERC20 transfer activity, it could take a while to receive the first email. You can check the logs of the service ERC20 by running the command:
```
mesg-core service logs service-ethereum-erc20-tuto
```

Be careful, ERC20 tokens have a lot of activity so it is possible to have thousands of emails per day and reach the SendGrid limit if you leave your application running.


### Final version of the source code

<card-link url="https://github.com/mesg-foundation/docs/tree/master/tutorials/erc20-transfer-notifications/email-notification-on-erc20-transfer"></card-link>

