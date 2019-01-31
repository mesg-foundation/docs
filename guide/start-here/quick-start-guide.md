# Quick Start Guide

This is a step-by-step guide to create an application that sends a Discord invitation email when a webhook is called.

[[toc]]

## 1. Installation

Run the following command in a console to install MESG Core:

```bash
bash <(curl -fsSL https://mesg.com/install)
```

You can also install it manually by following [this guide](./installation.md).

## 2. Run MESG Core

MESG Core runs as a daemon. To start it, execute:

```bash
mesg-core start
```

## 3. Deploy the services

You need to deploy every service your application is using.

In this guide, the application is using 2 services.

Let's start by deploying the [webhook service](https://github.com/mesg-foundation/service-webhook):

```bash
mesg-core service deploy https://github.com/mesg-foundation/service-webhook
```

Now let's deploy the [invite discord service](https://github.com/mesg-foundation/service-discord-invitation):

```bash
mesg-core service deploy https://github.com/mesg-foundation/service-discord-invitation
```

Once the service is deployed, the console displays its Service ID. The Service ID is the unique way for the application to connect to the right service through MESG Core. You'll need to use them inside the application.

## 4. Create the application

Now that the services are up and running, let's create the application.

The application is using [NodeJS](https://nodejs.org) and [NPM](https://www.npmjs.com/).

Let's init the app and install the [MESG JS library](https://www.npmjs.com/package/mesg-js).

Create and move your terminal to a folder that will contain the application. The run:

```bash
npm init && npm install --save mesg-js
```

Now, let's create an `index.js` file and with the following code:

```javascript
const mesg = require('mesg-js').application()

const email = '__YOUR_EMAIL_HERE__' // To replace by your email
const sendgridAPIKey = '__SENDGRID_API_KEY__' // To replace by your SendGrid API key. See https://app.sendgrid.com/settings/api_keys

mesg.listenEvent({
  serviceID: 'webhook',
  eventFilter: 'request'
})
  .on('data', async (event) => {
    console.log('event webhook received')
    try {
      const result = await mesg.executeTaskAndWaitResult({
        serviceID: 'discord-invitation',
        taskKey: 'send',
        inputData: JSON.stringify({ email, sendgridAPIKey })
      })
      if (result.outputKey !== 'success') {
        throw new Error('An error occurred during the sending of the invitation')
      }
      console.log('discord invitation send to ', email)
    } catch (error) {
      console.error(error.message)
    }
  })
  .on('error', (err) => {
    console.error(err.message)
  })

console.log('application is running and listening for events')
```

Don't forget to replace the values `__YOUR_EMAIL_HERE__` and `__SENDGRID_API_KEY__`.

## 5. Start the services

Let's start the webook service:
```bash
mesg-core service start webhook
```

Then let's the start discord invitation service:
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

Let's trigger the webhook with the following command:

```bash
curl -XPOST http://localhost:3000/webhook
```

:tada: You should have received an email in your inbox with your invitation to our Discord. Come join our community.

::: tip Get Help
You need help ? Check out the <a href="https://forum.mesg.com" target="_blank">MESG Forum</a>.
