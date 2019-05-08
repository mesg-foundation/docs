# Deploy

One of the functionalities of the Marketplace is to deploy Services from the Marketplace to your local Core.

## Browse Services

To browse available Services, go to the Marketpace website: [marketplace.mesg.com](https://marketplace.mesg.com).

You can directly find Services' documentation, API, offers and versions to easily decide which one your application should use.

## Deploy a Service

If the Service is free (the Service has at least one offer with a price of 0 MESG Tokens), you can directly deploy it! Otherwise, you first need to [purchase access](#purchase-access).

To deploy a Service, click on the deploy button, copy the command and execute it in your terminal.
For the [service email-sendgrid](https://marketplace.mesg.com/services/email-sendgrid), it looks like:
```bash
mesg-core service deploy mesg://marketplace/service/8mcRi836QZZmYAvt2o7RgHdUjsvGsdnPdSHVBq25jjyB
```

If the Service is free or if you've previously purchased access, the Service should be deployed your MESG Core and ready to be started!

## Purchase access

Offers are defined by a price in MESG Tokens and a duration. Purchasing an offer will give you access to this Service for the duration of the offer.

Let's use the [service email-sendgrid](https://marketplace.mesg.com/services/email-sendgrid) as an example for this guide.

To purchase access to a Service, you first need to choose which offer(s) to purchase. Check the tab "offers" to select the one that best fits your needs.

To purchase an offer, copy the associated command and execute it.

For the first offer of the [service email-sendgrid](https://marketplace.mesg.com/services/email-sendgrid), the command looks like:
```bash
mesg-core marketplace purchase email-sendgrid --offer-index 1
```

::: tip Ether and MESG Token
As the Marketplace is running on Ethereum, make sure your account has enough Ether to pay for transaction fees. 0.1 ETH should be enough. If you need to buy MESG Tokens, go to the [token page](https://mesg.com/token/) to view participating exchanges.
:::
