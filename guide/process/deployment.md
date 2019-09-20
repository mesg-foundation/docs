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
