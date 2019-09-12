# Deployment

To deploy your process, you need to compile it and then send it on the MESG Engine with the following command.

```bash
mesg-cli process:create "$(mesg-cli process:compile my-process.yml)"
```

[more details here](/cli/commands/process.md)

## Log

Once deployed on your MESG Engine, you can see the logs of your process using the command.

```bash
mesg-cli process:log PROCESS_HASH
```

Logs can help you debug your process and see if you have something unexpected happening in your process.

## Development mode

While in development, it is inefficient to have to deploy/log/delete your process for every modification. To fix that you can use the command `process:dev` that automatically do all that.

The `process:dev` command automatically adds the `--dev` flag while compiling the process. You can then create your process referencing the source of an MESG Service, and the service is automatically deployed and linked to the process, saving you much time.
