# Deploy a service

Once you finish developing your service and testing it, you can deploy it by compiling it and create it in the Engine.

A unique ID will be generated when you create a service. This ID is based on service's definition and the source code and will change every time you add any modifications to this service.

## Compile

To compile the service you can run the command:

```bash
mesg-cli service:compile PATH_OF_THE_SERVICE
```

This command will return the compiled version of the service.

## Create

To create the service in the Engine, run the command:

```bash
mesg-cli service:create COMPILED_SERVICE
```

This will give the id of the service. You need to use this id whenever you want to use the service.

::: tip Compile & Create
To compile and create the service with one line, you can run:
```bash
mesg-cli service:create "$(cat mesg-cli service:compile PATH_OF_THE_SERVICE)"
```

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
