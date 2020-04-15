# Introduction

MESG is a framework for developers to build applications efficiently. It relies on two specific tools:

- The **MESG Framework** that connects services together
- The **MESG Network of services** to bootstrap applications faster

MESG is centered around the concept of services made to be reusable within other applications and shared on a network for others to use them.
All MESG Services have two responsibilities:
- [Executing **tasks**](/framework/service/listen-for-tasks.md) that an application triggers
- [Sending **events**](/framework/service/emit-an-event.md) to an application

Applications built with MESG are called processes.

[Processes](/framework/process/) rely only on [services](/framework/service/) which are managed by the MESG Engine, freeing up time to focus on your applications' business logic.

## Why use the MESG Framework?

The tools within the Framework:
- Create and manage services 
- Manage communications between any services 
- Manage the security and isolation of services
- Route the various tasks and events between services 

Processes are only responsible for communicating with the MESG Engine, and only use a single standardized bi-directional API to access any service. 

# Get started

This step-by-step guide will show you how to create an Process that gets an ERC-20 token balance from an Ethereum address every 10 seconds and sends it to a Webhook.

[[toc]]

## 1. Installation

Run the following command in a console to install the MESG CLI:

```bash
npm install -g @mesg/cli
```

## 2. Run the MESG Engine

MESG Engine runs as a daemon. To start it, execute:

```bash
mesg-cli daemon:start
```

## 3. Create a process

We will create a [MESG Process](/framework/process) which will rely on three services:
- [Emit event interval service](https://github.com/mesg-foundation/service-emit-event-interval): to create an event every 10 seconds
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

### Third step: Send the balance to a webhook

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

This command will automatically deploy all of the services, run them, and create a process to connect them together based on the steps we previously defined. Just give it a few seconds and...

:tada: The webhook is called with the MESG Token balance every 10 seconds. Go to back to https://webhook.site and check the request's data!

## Final version of your process

Here is the final version of the process file:

```yml
name: balance-notifier
steps:
  - type: trigger
    instance:
      src: https://github.com/mesg-foundation/service-emit-event-interval
    eventKey: every_10_seconds
  - type: task
    instance:
      src: https://github.com/mesg-foundation/service-ethereum-erc20
      env:
        - PROVIDER_ENDPOINT=https://mainnet.infura.io/v3/d75ab9cb284f4536b1da2ce9f8201bdb
    taskKey: balanceOf
    inputs:
      contractAddress: "0x420167d87d35c3a249b32ef6225872fbd9ab85d2"
      address: "0xe17ee7b3c676701c66b395a35f0df4c2276a344e"
  - type: task
    instance:
      src: https://github.com/mesg-foundation/service-webhook
    taskKey: call
    inputs:
      url: "https://webhook.site/abe438ba-0c54-4594-bdfd-251375006283"
      data:
        balance: { key: balance }
```

::: tip Get Help
You need help ? Check out the <a href="https://forum.mesg.com" target="_blank">MESG Forum</a>.
