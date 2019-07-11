# Run the Service

## Start

To start a Service, run the command:

```bash
mesg-cli service:start SERVICE_ID
```

The command will start the Docker container\(s\) needed to run your service.

::: tip
Env variables from the configuration can be overwrite with the flag `--env`.

`mesg-cli service:start SERVICE_HASH --env FOO=BAR2`
:::

## Stop

To stop a Service, run the command:

```bash
mesg-cli service:stop SERVICE_ID
```

This command will stop the Docker container\(s\) started for your service.

## Share your Services

Nice work on connecting a Service to MESG!   
  
Our community thrives on the sharing of Services.  If you'd like to contribute to our ecosystem, please share your Service with the community on our [Awesome](https://github.com/mesg-foundation/awesome) page.   
  
We are excited to see what you've built!

::: tip Get Help
You need help ? Check out the <a href="https://forum.mesg.com" target="_blank">MESG Forum</a>.
