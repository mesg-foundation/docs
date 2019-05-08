# Publish

To sell other users access to your Service and earn MESG Tokens, you need to publish it and create offers on the Marketplace.

## Publish a Service

To publish a Service, make sure it's running as intended, has a good `README.md` and can be deployed as a MESG Service. If you are not sure, check the [guide of the creation of Service](../service/README.md).

To publish a Service, execute the following command:

```bash
mesg-core marketplace publish PATH_TO_THE_SERVICE
```

*Replace `PATH_TO_THE_SERVICE` by the actual path of the service on your computer, eg: `./service-email-sendgrid`.*

Enter the account you want to use to publish the Service, its passphrase, wait for the Service to build, and confirm.

Now let's wait for the magic to happen!
- First, your Service's source code is being uploaded to [IPFS](https://ipfs.io/).
- Then, your Service is being added to the [Marketplace's smart contract directly on Ethereum](https://etherscan.io/address/0x0c6e8d0ec4770fda8a56cd912392d2ff14822952). You can click on this link and check for the transaction corresponding to your Service has been processed!

Once done, the terminal should display a link to the page of your Service on the Marketplace website!

Congrats, you've just published a Service! But nobody can access it until you [create at least one offer](#create-an-offer).

## Create an offer

Now that your Service has been published, you have to create at least one offer to allow other users to use your Service (even if the offer is free).

Offers are defined by a price in MESG Tokens and a duration.

When an user purchases an offer, you, as the publisher of the Service, will receive **all** the MESG Tokens.

If you want to allow any user to use your Service **for free**, you still need to create an offer with a price of 0 MESG Tokens.

The duration (in seconds) defines how long the user is allowed to use your Service. It has to be greater than 0.

The create an offer, execute the following command:

```bash
mesg-core marketplace create-offer SERVICE_SID
```

*Replace `SERVICE_SID` by your service SID that is returned by the [publish command](#publish-a-service).*

Enter the account you used to publish the Service, its passphrase, the price in MESG Tokens, the duration in seconds, and confirm.

Once done, the terminal should display a link to the offers' page showing your Service on the Marketplace website!

Congratulations, you've fully published a Service on the MESG Marketplace!

::: tip Ether and MESG Token
As the Marketplace is running on Ethereum, make sure your account has enough Ether to pay for transaction fees. 0.1 ETH should be enough. If you need to buy MESG Tokens, go to the [token page](https://mesg.com/token/) to view participating exchanges.
:::
