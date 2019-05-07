# Deploy

One functionality of the Marketplace is to deploy to your local Core Services from the Marketplace.

## Browse Services

To browse available Services, go to the Marketpace website: [marketplace.mesg.com](https://marketplace.mesg.com).

You can directly find services' documentation, API, offers and versions to easily decide which one your application should use.

__INSERT SCREENSHOT OF MARKETPLACE__


## Deploy a Service

If the service is free (the service has at least one offer with a price of 0 MESG Token), you can directly deploy it! Otherwise, you first need to [purchase an access](#purchase-an-access).

To deploy a service, click on the deploy button, copy the command and execute it in your terminal.
For the [`email-sendgrid`](https://marketplace.mesg.com/services/email-sendgrid) service, it looks like:
```
mesg-core service deploy mesg://marketplace/service/5GbZWqgV2NTkAuev5TEjZZcgFhrNR5zBKw8y4UnLHLT9
```

If the service is free or your previously purchased an access, the service should be deployed your MESG Core and ready to be started!

## Purchase an access

Offer are defined by a price in MESG Token and a duration. Purchasing an offer will give you access to this service for the duration of the offer.

Let's use the service [`email-sendgrid`](https://marketplace.mesg.com/services/email-sendgrid) as an example for this guide.

__INSERT SCREEN OF https://marketplace.mesg.com/services/email-sendgrid__

To purchase an access to a service, you first need to choose which offers to purchase. Check the tab "offers" to select the one that best fits your needs.

To purchase an offer, copy the associated command and execute it.

For the first offer of the [`email-sendgrid`](https://marketplace.mesg.com/services/email-sendgrid) service, the command looks like:
```bash
mesg-core marketplace purchase email-sendgrid --offer-index 0
```

::: tip Ether and MESG Token
As the Marketplace is running on Ethereum, make sure your account has enough Ether to pay for transaction fees. 0.1 ETH should be largely enough. If you need to buy MESG Token, go to the [token page](https://mesg.com/token/) to see compatible exchanges.
:::
