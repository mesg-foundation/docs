# Publish

To sell other users access to your service and earn MESG Tokens you need to publish it and create offers on the marketplace.

## Publish a service

To publish a service, make sure it's running as intended, has a good `README.md` and can be deployed as a MESG Service. If you are not sure, check the [guide of the creation of service](../service/README.md).

To publish a service, execute the following command:

```bash
mesg-core marketplace publish PATH_TO_THE_SERVICE
```

*Replace `PATH_TO_THE_SERVICE` by the actual path of the service on your computer, eg: `./service-email-sendgrid`.*

Enter the account you want to use to publish the service, its passphrase, wait for the service to build, and confirm.

Now let's wait for the magic to take place!
- First, your service's source code is being uploaded to [IPFS](https://ipfs.io/).
- Then, your service is being added to the [Marketplace's smart contract directly on Ethereum](https://etherscan.io/address/0x0c6e8d0ec4770fda8a56cd912392d2ff14822952). You can click on this link and check for the transaction corresponding to your service to be processed!

Once done, the terminal should display a link to the page of your service on the marketplace website!

Congrats, you just publish a service! But doesn't forget to [create at least one offer](#create-an-offer).

## Create an offer

Now that your service has been published, you have to create at least one offer to allow other users to use your service.

Offer are defined by a price in MESG Token and a duration.

When an user purchase an offer, you, as the publisher of the service, will get **all** the MESG Token.

If you want to allow any user to use your service **for free**, you still need to create an offer with a price of 0 MESG Token.

The duration (in seconds) define how long the user is allow to use your service. It have to be superior to 0.

The create an offer, execute the following command:

```bash
mesg-core marketplace create-offer SERVICE_SID
```

*Replace `SERVICE_SID` by your service SID that is returned by the [publish command](#publish-a-service).*

Enter the account you used to publish the service, its passphrase, the price in MESG Token, the duration in second, and confirm.

Once done, the terminal should display a link to the offers' page of your service on the marketplace website!

Congratulations, you've fully published a service on the MESG Marketplace!

::: tip Ether and MESG Token
As the Marketplace is running on Ethereum, make sure your account has enough Ether to pay for transaction fees. 0.1 ETH should be largely enough. If you need to buy MESG Token, go to the [token page](https://mesg.com/token/) to see compatible exchanges.
:::
