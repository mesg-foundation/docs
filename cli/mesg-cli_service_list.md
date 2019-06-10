List all deployed services

## Usage
```
$ mesg-cli service:list
```

### Aliases
```
$ mesg-cli service:ls
```

### Arguments
```
SERVICE  Hash or Sid
TASK     Task key
```

### Options
```
-h, --help         show CLI help
-q, --quiet
-x, --extended     show extra columns
--columns=columns  only show provided columns (comma-separated)
--csv              output is csv format
--filter=filter    filter property by partial string matching, ex: name=foo
--no-header        hide table header from output
--no-truncate      do not truncate output to fit screen
--silent
--sort=sort        property to sort by (prepend '-' for descending)
```
