---
title: Send email with Sendgrid
description: 'Tutorial: how to use MESG to send an email through the Sendgrid API'
published_link: 'https://docs.mesg.com/tutorials/erc20-transfer-notifications/send-emails-with-sendgrid.html'
---

# Send emails with Sendgrid

## Introduction

Today we will learn how to create and use our first service.

We'll start with the example of an email provider where we will send emails through a MESG service.

You can access the final version of the [source code on GitHub](https://github.com/mesg-foundation/docs/tree/master/tutorials/erc20-transfer-notifications/send-email-with-sendgrid).

You can find a more advanced and maintained version of this service here: [Service Email SendGrid](https://github.com/mesg-foundation/service-email-sendgrid)

::: tip
If you haven't installed **MESG Core** yet, you can do so by running the command:

`bash <(curl -fsSL https://mesg.com/install)`

You can also install it manually by following [this guide](./installation.md#manual-installation).
:::

MESG services are composed of two different parts:

* **Tasks:** actions that your service will execute
* **Events:** data that your service provides

For this tutorial, we will only focus on tasks, and will create a service that sends an email as a task.

## Create the MESG service

It's time to create our MESG Service. First, open a terminal in your development folder and run the following command:

```bash
mesg-core service init
```

Then, answer the prompts with the following information:

```text
? Enter the output directory: send-email-with-sendgrid
? Select a template to use Javascript (https://github.com/mesg-foundation/template-service-javascript)
```

The command should have created a `send-email-with-sendgrid` folder containing `mesg.yml`, `Dockerfile` files and a boilerplate for the service.  
Leave these files intact; we'll return to them a bit later in this tutorial.

::: tip
You should see a **mesg.yml** and a **Dockerfile** in your service folder which are the fundamental parts of every MESG service.

* **mesg.yml:** A file that contains all of the metadata of your Service. It gives some global descriptions but also includes the tasks and events that the Service can provide.
  
* **Dockerfile:** A file that describes your Docker container and configures the environment for your service to run inside.
:::

## Send emails through MESG tasks

### Configure your task

Let's add the task we want to serve for MESG Core to the `mesg.yml` file.

First, clean the `mesg.yml` file, keeping only the keys: `name` and `description`. And declare a `sid` for the service. It should look like this:

```yaml
name: Send Email with SendGrid Tutorial
sid: send-email-with-sendgrid-tuto
description: Listen for email send requests and send emails via SendGrid
```

And add a new task called `send` to `tasks` section which will be responsible for sending an email based on the following inputs:

* **from**: the account to send the email from
* **to**: the recipient of the email
* **subject**: the subject of the email
* **text**: the text of the email

Also this Service's task will return two different outputs:

* **success**: when the email is successfully sent
* **failure**: when an error occurs while trying to send the email \(this can be any kind of error, wrong email address, Sendgrid API down, etc.\)

To add this information into your Service, you can replace the `tasks: {}` in your `mesg.yml` file with the following:

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
      success:
        data:
          status:
            type: Number
      failure:
        data:
          message:
            type: String
```

::: warning
You might need to delete the **configuration: null** if it's present in your **mesg.yml** file.
:::

### Code your task

The next step is to code your Service. To do this, you can use any language that you want. For this tutorial we will use **Javascript**.

Open `index.js` and replace `taskX` words to `send` and remove `emitEvent` line since it'll not be used in this tutorial.

Your `index.js` should look similar to this:

```javascript
const mesg = require('mesg-js').service()

mesg.listenTask({
  send: require('./tasks/send')
})
  .on('error', (error) => {
    console.error(error)
  })
```

With this code, service will start listening execution requests for `send` task from **MESG Core** and execute the handler to create and submit a result.

To create a handler for the `send` task, rename `tasks/taskX.js` to `tasks/send.js` and replace its content with the following code:

```javascript
module.exports = async (inputs, outputs) => {
  console.log('New send task received')
  // TODO later
}
```

This is a basic skeleton for a Service, but now we need to actually code the emails with Sendgrid. For this, we will use the Sendgrid library.

```bash
npm install --save @sendgrid/mail
```

Then require it in our file the same way we required it the `mesg-js` library.

```javascript
const sendgrid = require('@sendgrid/mail')
```

We had a `TODO` in our handler for `send` task, let's code the business logic using the Sendgrid library we just imported.

```javascript
module.exports = async (inputs, outputs) => {
  try {
    console.log('New send task received')
    // Configure SendGrid
    sendgrid.setApiKey('__CHANGE_WITH_YOUR_SENDGRID_API_KEY__')
    // Sends an email with the inputs
    const result = await sendgrid.send({
      from: inputs.from,
      to: inputs.to,
      subject: inputs.subject,
      text: inputs.text
    })
    // Return the success output
    return outputs.success({
      status: result[0].statusCode
    })
  } catch (error) {
    // If an error occurs, return the failure output
    return outputs.failure({
      message: error.toString()
    })
  }
}
```

This code is setting the API Key necessary to work with Sendgrid.
Then it sends an email with the inputs defined in the `mesg.yml` and returns the output `success` containing the status code.
If an error occurs, it returns the output `failure` with the error's message.

Now your final Service code should look like this:

`index.js`

<<< @/tutorials/erc20-transfer-notifications/send-email-with-sendgrid/index.js

`tasks/send.js`

<<< @/tutorials/erc20-transfer-notifications/send-email-with-sendgrid/tasks/send.js

::: warning
Don't forget to change the `__CHANGE_WITH_YOUR_SENDGRID_API_KEY__` with your own private Sendgrid API key that you can create here: [https://app.sendgrid.com/settings/api\_keys](https://app.sendgrid.com/settings/api_keys)​.
:::

Your Service is now ready for the second step.

## Testing

The first step of testing is to make sure that the Service is valid by running:

```bash
mesg-core service validate
```

You should have a message with `Service is valid`, if not, check the previous steps again; you probably missed something 🤔

Now that your Service is valid, let's create a test file to test your task. Create a `test.json` file is with all the inputs needed for your task.

<<< @/tutorials/erc20-transfer-notifications/send-email-with-sendgrid/test.json

::: warning
Replace the **\_\_YOUR\_EMAIL\_\_** with your own email to test it. Don't worry, this is only done locally. We will not collect it 😀
:::

Now time to test it.

In one terminal execute:

```bash
mesg-core service dev
```

Don't worry, the first time you do this, it will take a bit of time because MESG Core is building your Service, but the subsequent times will be faster.

Wait for the service to start and then copy the service ID.

In an other terminal, execute the following command:

```bash
mesg-core service execute send-email-with-sendgrid-tuto --task send --json test.json
```

The `send` task will be executed and you should have the result in the console and your precious email in your mailbox.

## Usage

To be able to use your Service from an application, you will need to deploy it first. To do this, just run the command:

```bash
mesg-core service deploy
```

This will return an ID for the Service that you'll be able to use to start the Service, stop it, show the logs etc... or connect different events to the tasks of this Service, but that's for the next tutorial.

Get some rest now, you've done a good job creating your first Service with MESG. Of course you can always create more complicated Services. Make sure to check out the [documentation](../..) for more details.

## Final version of the source code

<card-link url="https://github.com/mesg-foundation/docs/tree/master/tutorials/erc20-transfer-notifications/send-email-with-sendgrid"></card-link>
