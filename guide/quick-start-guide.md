# Quick Start

This step-by-step guide will show you how to create an application that gets the ERC-20 token balance of an Ethereum account every 10 seconds and send it to a Webhook.

[[toc]]

## 1. Installation

Run the following command in a console to install the MESG CLI:

```bash
npm install -g @mesg/cli
```

More details on [the installation guide](/guide/installation.md).

## 2. Run the MESG Engine

MESG Engine runs as a daemon. To start it, execute:

```bash
mesg-cli daemon:start
```

## 3. Create your process

We will create a [MESG Process](/guide/process) which will rely on 3 specific services:
- [Emit event interval service](https://github.com/mesg-foundation/service-emit-event-interval): to get an event every 10 seconds
- [Ethereum ERC20 service](https://github.com/mesg-foundation/service-ethereum-erc20): to query the balance
- [Webhook service](https://github.com/mesg-foundation/service-webhook): to send the result on a webhook

Let's create our first MESG Process by creating a new YAML file (called `process.yml`) with the following structure:
```yml
name: balance-notifier
steps:
  - # TODO
```

### First step: Trigger the process every 10 seconds

To trigger this process every 10 seconds we will use the service [emit event interval](https://github.com/mesg-foundation/service-emit-event-interval) and listen for the event `every_10_seconds`.

```yml
steps:
  - type: trigger
    instance:
      src: https://github.com/mesg-foundation/service-emit-event-interval
    eventKey: every_10_seconds
```

### Second step: Fetch the balance

To fetch the balance we will use the service [Ethereum ERC20](https://github.com/mesg-foundation/service-ethereum-erc20) with a specific `PROVIDER_ENDPOINT` and call the task `balanceOf` with the following inputs:
- _contractAddress_: [0x420167d87d35c3a249b32ef6225872fbd9ab85d2](https://etherscan.io/token/0x420167d87d35c3a249b32ef6225872fbd9ab85d2)
- _address_: [0x2b1892e181cc749b530e6acc0aecfa4cc9c13ac2](https://etherscan.io/address/0x2b1892e181cc749b530e6acc0aecfa4cc9c13ac2)

```yml
steps:
  - # ... previous step
  - type: task
    instance:
      src: https://github.com/mesg-foundation/service-ethereum-erc20
      env:
        - PROVIDER_ENDPOINT=https://mainnet.infura.io/v3/d75ab9cb284f4536b1da2ce9f8201bdb
    taskKey: balanceOf
    inputs:
      contractAddress: "0x420167d87d35c3a249b32ef6225872fbd9ab85d2"
      address: "0x2b1892e181cc749b530e6acc0aecfa4cc9c13ac2"
```

### Third step: Send the balance to the webhook

To send the balance to a webhook we will use the service [webhook](https://github.com/mesg-foundation/service-webhook) and call the task `call` with the following inputs
- _url_: [https://webhook.site/abe438ba-0c54-4594-bdfd-251375006283](https://webhook.site/abe438ba-0c54-4594-bdfd-251375006283) (generate your own [here](https://webhook.site/))
- _data_: the `balance` from the previous task

```yml
steps:
  - # ... previous steps
  - type: task
    instance:
      src: https://github.com/mesg-foundation/service-webhook
    taskKey: call
    inputs:
      url: "https://webhook.site/abe438ba-0c54-4594-bdfd-251375006283"
      data:
        balance: { key: balance }
```

## 4. Start your process

```bash
mesg-cli process:dev ./process.yml
```

This command will automatically deploy all of the services, run them and create a process to connect them based on the steps we previously defined. Give it a few seconds and...

:tada: The webhook is called with the MESG Token balance every 10 seconds. Go to back to https://webhook.site and check the request's data!

## Final version of your process

Here is the final version of the process file:

<<< @/guide/quick-started.yml

::: tip Get Help
You need help ? Check out the <a href="https://forum.mesg.com" target="_blank">MESG Forum</a>.
