# Quick Start Guide

This guide will show you step-by-step how to create an application that sends a Discord invitation email when a webhook is called.

[[toc]]

## 1. Installation

Run the following command in a console to install MESG Core:

```bash
bash <(curl -fsSL https://mesg.com/install)
```

You can also install it manually by following [this guide](./installation.md#manual-installation).

## 2. Run MESG Core

MESG Core runs as a daemon. To start it, execute:

```bash
mesg-core start
```

## 3. Deploy the services

You need to deploy every service your application is using.

In this guide, the application is using 2 services.

Start by deploying the [webhook service](https://github.com/mesg-foundation/service-webhook):

```bash
mesg-core service deploy https://github.com/mesg-foundation/service-webhook
```

Deploy the [invite discord service](https://github.com/mesg-foundation/service-discord-invitation):

```bash
mesg-core service deploy https://github.com/mesg-foundation/service-discord-invitation
```

Once the service is deployed, the console displays its id. This id is a unique way for the application to connect to the right service through MESG Core. You'll need to use them inside the application.

## 4. Create the application

Now when the services are up and running, let's create the application.

The application is using [NodeJS](https://nodejs.org) and [NPM](https://www.npmjs.com/).

Let's init the app and install the [MESG JS library](https://github.com/mesg-foundation/mesg-js).

Create and move your terminal to a folder that will contain the application. Then run:

```bash
npm init && npm install --save mesg-js
```

Now, create an `index.js` file and with the following code:

```javascript
const mesg = require('mesg-js').application()

const email = '__YOUR_EMAIL_HERE__' // To replace by your email
const sendgridAPIKey = '__SENDGRID_API_KEY__' // To replace by your SendGrid API key. See https://app.sendgrid.com/settings/api_keys

mesg.listenEvent({
  serviceID: 'webhook',
  eventFilter: 'request'
})
  .on('data', async (event) => {
    console.log('webhook event received')
    try {
      const result = await mesg.executeTaskAndWaitResult({
        serviceID: 'discord-invitation',
        taskKey: 'send',
        inputData: JSON.stringify({ email, sendgridAPIKey })
      })
      if (result.outputKey !== 'success') {
        const message = JSON.parse(result.outputData).message
        console.error('an error occurred while sending the invitation: ', message)
        return
      }
      console.log('discord invitation send to:', email)
    } catch (error) {
      console.error('an error occurred while executing the send task:', error.message)
    }
  })
  .on('error', (error) => {
    console.error('an error occurred while listening the request events:', error.message)
  })

console.log('application is running and listening for events')
```

Don't forget to replace the values `__YOUR_EMAIL_HERE__` and `__SENDGRID_API_KEY__`.

## 5. Start the services

Start the webhook service:
```bash
mesg-core service start webhook
```

Start discord invitation service:
```bash
mesg-core service start discord-invitation
```

## 6. Start the application

Start your application like any node application:

```bash
node index.js
```

## 7. Test the application

Now let's give this super simple application a try.

Trigger the webhook with the following command:

```bash
curl -XPOST http://localhost:3000/webhook
```

:tada: You should have received an email in your inbox with your invitation to our Discord. Come join our community.

::: tip Get Help
You need help ? Check out the <a href="https://forum.mesg.com" target="_blank">MESG Forum</a>.
