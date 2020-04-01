# Deployment

To deploy a process, you need to compile it and then send it on the MESG Engine with the following commands:

## Compile

To compile the process you can run the command:

```bash
mesg-cli process:compile PATH_TO_THE_PROCESS_FILE
```

This command will return the compiled version of the process.

::: tip Development mode
Add the `--dev` flag to this command to automatically start services referenced in the process file under the [`instance` key](process-file.md#instance-resolution), saving you a lot of time.
:::

## Create

To create the process in the Engine, run the command:

```bash
mesg-cli process:create COMPILED_PROCESS
```

::: tip Compile & Create
To compile and create the process with one line, run:
```bash
mesg-cli process:create "$(mesg-cli process:compile PATH_TO_THE_PROCESS_FILE)"
```
:::

## Log

Once deployed on your MESG Engine, you can see the logs of your process using the command.

```bash
mesg-cli process:log PROCESS_HASH
```

Logs can help you debug your process and see if you have something unexpected happening in your process.

## List deployed processes

To see the list of processes already deployed you can run the command:

```bash
mesg-cli process:list
```

## Delete a deployed process

To delete a process that you previously deployed, run the command:

```bash
mesg-cli process:delete PROCESS_HASH
```


## Development mode

While in development, use the following command to automatically deploy, log and delete the process:

```bash
 mesg-cli process:dev PATH_TO_THE_PROCESS_FILE
 ```

The command `process:dev` automatically adds the `--dev` flag while compiling the process.

::: tip Command line doc
Check out [the command line doc](/cli/commands/process.md).
:::


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
mesg-cli service:create "$(mesg-cli service:compile PATH_OF_THE_SERVICE)"
```
:::

## List deployed services

If you want to see the list of services already deployed you can run the command:

```bash
mesg-cli service:list
```

## Delete a deployed service

If for any reason you want to delete a service that you previously deployed you can do it using the command:

```bash
mesg-cli service:delete SERVICE_ID
```

::: tip Command line doc
Check out [the command line doc](/cli/commands/service.md).
:::

::: tip Get Help
You need help ? Check out the <a href="https://forum.mesg.com" target="_blank">MESG Forum</a>.
:::
