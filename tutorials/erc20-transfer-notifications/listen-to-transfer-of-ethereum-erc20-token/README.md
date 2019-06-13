# Ethereum ERC20 Service Tutorial (ID: service-ethereum-erc20-tuto)

Listen to transfers of an ERC20

## Contents

- [Installation](#Installation)
  - [MESG SDK](#MESG-SDK)
  - [Deploy the Service](#Service)
- [Definitions](#Definitions)
  - [Events](#Events)
    - [transfer](#transfer)

## Installation

### MESG SDK

This service requires [MESG SDK](https://github.com/mesg-foundation/engine) to be installed first.

You can install MESG SDK by running the following command or [follow the installation guide](https://docs.mesg.com/guide/start-here/installation.html).

```bash
npm install -g mesg-cli
```

### Deploy the Service

To deploy this service, go to [this service page](https://marketplace.mesg.com/services/service-ethereum-erc20-tuto) on the [MESG Marketplace](https://marketplace.mesg.com) and click the button "get/buy this service".

## Definitions

### Events

<h4 id="transfer">transfer</h4>

Event key: `transfer`



| **Name** | **Key** | **Type** | **Description** |
| --- | --- | --- | --- |
| **blockNumber** | `blockNumber` | `Number` |  |
| **transactionHash** | `transactionHash` | `String` |  |
| **from** | `from` | `String` |  |
| **to** | `to` | `String` |  |
| **value** | `value` | `String` |  |
| **contractAddress** | `contractAddress` | `String` |  |

