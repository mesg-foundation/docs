Run your service in development mode

## Usage
```
$ mesg-cli service:dev [SERVICE_PATH]
```

### Arguments
```
SERVICE_PATH  [default: ./] Path of the service
```

### Options
```
-d, --dependency=dependency  Name of the dependency to show the logs from
-h, --help                   show CLI help
-q, --quiet
--env=FOO=BAR                set env defined in mesg.yml (configuration.env)
--event=event                Filter specific events in the logs
--no-events                  Remove events from the logs
--no-results                 Remove results from the logs
--silent
--task=task                  Filter specific task results in the logs
```
