# Deploy a service

Once you finish developing your service and testing it, you can deploy it. A unique ID will be generated when you deploy a service. This ID is based on the [`mesg.yml`](service-file.md) file and will change every time you add any modifications to this service.

To deploy the service you can run the command:

```bash
mesg-cli service:deploy PATH_OF_THE_SERVICE
```

This will give the id of your service. You need to use this id whenever you want to use the service.

::: tip
Env variables from the configuration can be overwrite with the flag `--env`.

`mesg-cli service:deploy PATH_OF_SERVICE --env FOO=BAR2`
:::

### List deployed services

If you want to see the list of services already deployed you can run the command:

```bash
mesg-cli service:list
```

### Delete a deployed service

If for any reason you want to delete a service that you previously deployed you can do it using the command:

```bash
mesg-cli service:delete SERVICE_ID
```


::: tip Get Help
You need help ? Check out the <a href="https://forum.mesg.com" target="_blank">MESG Forum</a>.
