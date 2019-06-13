---
title: Send emails with SendGrid
description: 'Tutorial: how to create a MESG Service that send an email through the SendGrid API'
published_link: 'https://docs.mesg.com/tutorials/erc20-transfer-notifications/send-emails-with-sendgrid.html'
---

# Send emails with SendGrid

## Introduction

Today we will learn how to create and use a MESG service that send email using [SendGrid](https://sendgrid.com).

You can access the final version of the [source code on GitHub](https://github.com/mesg-foundation/docs/tree/master/tutorials/erc20-transfer-notifications/send-email-with-sendgrid).

You can find a more advanced and maintained version of this service here: [Service Email SendGrid](https://github.com/mesg-foundation/service-email-sendgrid)

::: tip
If you haven't installed **MESG SDK** yet, follow [this guide](/guide/installation.md).
:::

MESG services are composed of two different parts:

* **Tasks:** actions that your service will execute
* **Events:** data that your service provides

For this step of this tutorial, we will only focus on tasks.

## Create the MESG service

It's time to create our MESG Service. First, open a terminal in your development folder and run the following command:

```bash
mesg-cli service:init ./service-email-sendgrid-tuto
```

Then, select the `Javascript` template.

The command should have created a `service-email-sendgrid-tuto` folder containing the boilerplate files for the service.
Leave these files intact; we'll return to them a bit later in this tutorial.

::: tip
You should see a **mesg.yml** and a **Dockerfile** in your service folder which are the fundamental parts of every MESG service.

* **mesg.yml:** A file that contains all of the metadata of your Service. It gives some global descriptions but also includes the tasks and events that the Service can provide.

* **Dockerfile:** A file that describes your Docker container and configures the environment for your service to run inside.
:::

## Send emails through a task

### Configure your task

Let's define the task we want to create in the `mesg.yml` file.

First, clean the `mesg.yml` file, keeping only the keys: `name`, `sid` and `description`. Change their value to look like this:

```yaml
name: Send Email with SendGrid Tutorial
sid: service-email-sendgrid-tuto
description: Send Email with SendGrid
```

Add the key `configuration`, containing the key `env`, containing the env `SENDGRID_API_KEY` like this:

```yaml
configuration:
  env:
    - SENDGRID_API_KEY=
```

This env variable will contain the required SendGrid API Key.

And add a new task called `send` to `tasks` section which will be responsible for sending an email based on the following inputs:

* **from**: the account to send the email from
* **to**: the recipient of the email
* **subject**: the subject of the email
* **text**: the text of the email

Also this Service's task will return a status as outputs:

* **status**: status of the sent email

To add this information into your Service, add the following definition in the `mesg.yml` file:

```yaml
tasks:
  send:
    inputs:
      from:
        type: String
      to:
        type: String
      subject:
        type: String
      text:
        type: String
    outputs:
      status:
        type: Number
```

The content of `mesg.yml` should look like:

<<< @/tutorials/erc20-transfer-notifications/send-email-with-sendgrid/mesg.yml

### Code the task

The next step is to code your Service. To do this, you can use any language that you want. For this tutorial we will use **Javascript**.

Open `index.js` and replace `taskX` words to `send` and remove `emitEvent` line since it'll not be used in this tutorial.

Your `index.js` should look similar to this:

```javascript
const mesg = require('mesg-js').service()

mesg.listenTask({
  send: require('./tasks/send')
})
  .on('error', (error) => console.error(error))
```

With this code, service will start listening execution requests for `send` task from **MESG Engine** and execute the handler to create and submit a result.

To create a handler for the `send` task, rename `tasks/taskX.js` to `tasks/send.js` and replace its content with the following code:

```javascript
module.exports = (inputs) => {
  console.log('New send task received')
  // TODO later
}
```

This is a basic skeleton for a Service, but now we need to actually code the emails with SendGrid. For this, we will use the SendGrid library.

```bash
npm install --save @sendgrid/mail
```

Then require it in `send.js`:

```javascript
const sendgrid = require('@sendgrid/mail')
```

Then, pass the content of the env variable `SENDGRID_API_KEY` to sendgrid:
```javascript
sendgrid.setApiKey(process.env.SENDGRID_API_KEY)
```

We had a `TODO` in our handler for `send` task, let's code the business logic using the SendGrid library we just imported.

```javascript
module.exports = async (inputs) => {
  console.log('New send task received')
  // Sends an email with the inputs
  const result = await sendgrid.send({
    from: inputs.from,
    to: inputs.to,
    subject: inputs.subject,
    text: inputs.text
  })
  // Return the success output
  return {
    status: result[0].statusCode
  }
}
```

This code sends an email with the inputs defined in the `mesg.yml` and returns the status code.

Now your final Service code should look like this:

`index.js`

<<< @/tutorials/erc20-transfer-notifications/send-email-with-sendgrid/index.js

`tasks/send.js`

<<< @/tutorials/erc20-transfer-notifications/send-email-with-sendgrid/tasks/send.js

Your Service is now ready for the second step.

## Testing

Make sure MESG Engine is running:

```bash
mesg-cli daemon:start
```

The first step of testing is to make sure that the Service is valid by running:

```bash
mesg-cli service:validate
```

Don't worry, the first time you do this, it will take a bit of time because MESG Engine is building your Service, but the subsequent times will be faster.

You should have a message with `Service is valid`, if not, check the previous steps again; you probably missed something 🤔

Now that your Service is valid, let's create a test file to test the `send` task. Create a `test.json` file with all the inputs needed for the task.

<<< @/tutorials/erc20-transfer-notifications/send-email-with-sendgrid/test.json

::: warning
Replace the **\_\_YOUR\_EMAIL\_\_** with your own email to test it. Don't worry, this is only done locally. We will not collect it 😀
:::

Now time to test it.

::: warning
You now need to get your own private SendGrid API key. You can create it here: [https://app.sendgrid.com/settings/api_keys](https://app.sendgrid.com/settings/api_keys)​.
:::

Let's start the service by running the command:

```bash
mesg-cli service:dev --env SENDGRID_API_KEY=__CHANGE_WITH_YOUR_SENDGRID_API_KEY__
```

Replace `__CHANGE_WITH_YOUR_SENDGRID_API_KEY__` by the SendGrid API Key.

Wait for the service to start and then in an other terminal (make sure to point the terminal in the service folder), execute the following command:

```bash
mesg-cli service:execute service-email-sendgrid-tuto send --json test.json
```

The `send` task will be executed and you should have the result with status `202` in the console and your precious email in your mailbox.

Stop the service by pressing `ctrl + c` in the terminal.

## Usage

To be able to use your Service from an application, you will need to deploy it first. To do this, just run the command:

```bash
mesg-cli service:deploy
```

This will return an ID for the Service that you'll be able to use to start the Service, stop it, show the logs etc... or connect different events to the tasks of this Service, but that's for the next tutorial.

Get some rest now, you've done a good job creating your first Service with MESG. Of course you can always create more complicated Services. Make sure to check out the [documentation](/) for more details.

## Final version of the source code

<card-link url="https://github.com/mesg-foundation/docs/tree/master/tutorials/erc20-transfer-notifications/send-email-with-sendgrid"></card-link>
