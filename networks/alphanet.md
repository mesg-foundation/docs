# Alphanet

## Validators

### Validator #1:
- __IP:__ `178.128.96.92`
- __Domain:__ `sg.alphanet.dev.mesg.com`
- __Port:__ `26656`
- __Node ID:__ `69a84b092b8ab73a9728ac0b14b94139b3a674cc`

### Validator #2:
- __IP:__ `68.183.78.188`
- __Domain:__ `fr.alphanet.dev.mesg.com`
- __Port:__ `26656`
- __Node ID:__ `c1f9951cb1504e2898238a21bf575f41b9809790`

### Validator #3:
- __IP:__ `157.230.134.13`
- __Domain:__ `sf.alphanet.dev.mesg.com`
- __Port:__ `26656`
- __Node ID:__ `1b905faeebf030542de985d800ebcacad09ca572`

### Validator #4:
- __IP:__ `165.22.218.169`
- __Domain:__ `bl.alphanet.dev.mesg.com`
- __Port:__ `26656`
- __Node ID:__ `31fd19004fd18a033c4965fe1b48b3b8f424e38c`


## Validators as peer list
```bash
69a84b092b8ab73a9728ac0b14b94139b3a674cc@sg.alphanet.dev.mesg.com:26656,c1f9951cb1504e2898238a21bf575f41b9809790@fr.alphanet.dev.mesg.com:26656,1b905faeebf030542de985d800ebcacad09ca572@sf.alphanet.dev.mesg.com:26656,31fd19004fd18a033c4965fe1b48b3b8f424e38c@bl.alphanet.dev.mesg.com:26656
```

## Genesis transaction
```json
{"msg":[{"type":"cosmos-sdk/MsgCreateValidator","value":{"description":{"moniker":"bob","identity":"","website":"","details":"init-validator"},"commission":{"rate":"0.000000000000000000","max_rate":"0.000000000000000000","max_change_rate":"0.000000000000000000"},"min_self_delegation":"1","delegator_address":"cosmos1ffw9xhgfakfcva4zxpzj4w7fngdnxzlsprkwl4","validator_address":"cosmosvaloper1ffw9xhgfakfcva4zxpzj4w7fngdnxzlsyhzmnx","pubkey":"cosmosvalconspub1zcjduepqd70qf3qsvnvmswdvhmw7gnp0gs4wwnsum0myu0ezv36v4cnux48srax6x0","value":{"denom":"stake","amount":"100000000"}}},{"type":"cosmos-sdk/MsgCreateValidator","value":{"description":{"moniker":"alice","identity":"","website":"","details":"init-validator"},"commission":{"rate":"0.000000000000000000","max_rate":"0.000000000000000000","max_change_rate":"0.000000000000000000"},"min_self_delegation":"1","delegator_address":"cosmos104w30wvleel35agwhga7haf7ppdp8qmxc7tek9","validator_address":"cosmosvaloper104w30wvleel35agwhga7haf7ppdp8qmxa2lv6k","pubkey":"cosmosvalconspub1zcjduepq006jxgq8tg9uzt565tdnndazt5zhuwj86a8n2rj6ra4mgyfefmkquhwgj7","value":{"denom":"stake","amount":"100000000"}}},{"type":"cosmos-sdk/MsgCreateValidator","value":{"description":{"moniker":"eve","identity":"","website":"","details":"init-validator"},"commission":{"rate":"0.000000000000000000","max_rate":"0.000000000000000000","max_change_rate":"0.000000000000000000"},"min_self_delegation":"1","delegator_address":"cosmos1yknejus4c582ue9dkkg384eg4z2ts4ylsax0nd","validator_address":"cosmosvaloper1yknejus4c582ue9dkkg384eg4z2ts4yl4fj6l7","pubkey":"cosmosvalconspub1zcjduepqypgz4z4qy93vdunw32jnw7vx7k5t84fxj3c0tqkj3lglq276c4js8pp6lt","value":{"denom":"stake","amount":"100000000"}}},{"type":"cosmos-sdk/MsgCreateValidator","value":{"description":{"moniker":"bell","identity":"","website":"","details":"init-validator"},"commission":{"rate":"0.000000000000000000","max_rate":"0.000000000000000000","max_change_rate":"0.000000000000000000"},"min_self_delegation":"1","delegator_address":"cosmos1032rw5zshwx88desmh88u9lhhx6xlc9gnfvnxs","validator_address":"cosmosvaloper1032rw5zshwx88desmh88u9lhhx6xlc9gkacx2r","pubkey":"cosmosvalconspub1zcjduepq6l08sgusvk0lxhy42zzzeemd88amw2yuzvmd7qyzu3vaeaj7mpssu7feae","value":{"denom":"stake","amount":"100000000"}}}],"fee":{"amount":[],"gas":"200000"},"signatures":[{"pub_key":{"type":"tendermint/PubKeySecp256k1","value":"Anvi/LQZp7cvPDgwm8I87+ymil7IHy8NPnunkDkAFDyp"},"signature":"v5tpxgg4BZ3XxkfSqHTZbMRaRgbWqYT8xaEoSEcRnq5I48/dTlqfIGegh5hwF2NFb9dLpnFDR2oE5Kvr6Lok2Q=="},{"pub_key":{"type":"tendermint/PubKeySecp256k1","value":"AtKU1rvFnTeQpb55rNeKOPPv8WWBaWE0fzGXov+AlqKb"},"signature":"wG7QZsvuRg6pLt0WK8wZfvP8pQXuJG6wAzGbsupdwdknqwf4S7JLkDAPv54GXEyjphfUzUNCL8xOYLapDqOlag=="},{"pub_key":{"type":"tendermint/PubKeySecp256k1","value":"Al9MqdLoI+EgfWr54O2ncTXL2Jh1T81bPMb8a3QMe6Uo"},"signature":"d8eB1/6ERDhE6RMZzbr/mmwsvx8fpysJIexH6p7cYkxg9SuOd1xZc5XIG+p6oCHGtkwQILolkNdK2uCe1NWKDQ=="},{"pub_key":{"type":"tendermint/PubKeySecp256k1","value":"Amd1OAoc/nG1EPbQv9y+91TgUrcRRGSV/yACvnk170VB"},"signature":"bVEDTER5gkYAvTu+VGflI6PSPW0OnvuYDzCDDrP21dd+ykod/xw6OjWLK+MTyUQcfiHiPTTyzxSMd7m1vs54yw=="}],"memo":""}
```

### Copy genesis tx, peers and validator identity (if needed) files from local computer to node
```bash
scp -r genesistx.json root@178.128.96.92:~/genesistx.json
scp -r peers root@178.128.96.92:~/peers
scp -r tendermint-validator/bob root@178.128.96.92:~/tendermint
```


## Start a node
```bash
rm -r ~/.mesg; mkdir -p ~/.mesg/tendermint
cp -r tendermint ~/.mesg/tendermint # if you want to start as a validator, copy validator identity inside `~/.mesg/tendermint` folder
mesg-cli daemon:start --version=dev --log-force-colors --peers=$(cat peers) --genesis-validator-tx=$(cat genesistx.json); mesg-cli daemon:logs
```

## Monitoring


## Publish tendermint port for prometheus

The tendermint node needs to published the port `26660` in order for prometheus to access the stats:
```
docker service update --publish-add published=26660,target=26660 engine
```

## Prometheus config

Prometheus config file in `/root/prometheus.yml`
```yaml
global:
  scrape_interval:     15s # Set the scrape interval to every 15 seconds. Default is every 1 minute.
  evaluation_interval: 15s # Evaluate rules every 15 seconds. The default is every 1 minute.
  # scrape_timeout is set to the global default (10s).

# Alertmanager configuration
alerting:
  alertmanagers:
  - static_configs:
    - targets:
      # - alertmanager:9093

# Load rules once and periodically evaluate them according to the global 'evaluation_interval'.
rule_files:
  # - "first_rules.yml"
  # - "second_rules.yml"

# A scrape configuration containing exactly one endpoint to scrape:
# Here it's Prometheus itself.
scrape_configs:
  # The job name is added as a label `job=<job_name>` to any timeseries scraped from this config.
  - job_name: 'prometheus'
    static_configs:
    - targets: ['localhost:9090']

  - job_name: 'alphanet'
    scrape_interval:     5s
    static_configs:
    - targets: ['178.128.96.92:26660']
      labels:
        node: 'alphanet-1vcpu-1gb-sgp1-01'
    - targets: ['68.183.78.188:26660']
      labels:
        node: 'alphanet-1vcpu-1gb-fra1-02'
    - targets: ['157.230.134.13:26660']
      labels:
        node: 'alphanet-1vcpu-1gb-sfo2-03'
    - targets: ['165.22.218.169:26660']
      labels:
        node: 'alphanet-1vcpu-1gb-blr1-04'
```

## Docker services

```bash
docker service create --name prometheus --publish 9090:9090 --mount type=volume,source=prometheus-volume,destination=/prometheus --mount type=bind,source=/root/prometheus.yml,destination=/etc/prometheus/prometheus.yml prom/prometheus

docker service create --name=grafana --mount type=volume,source=grafana-volume,destination=/var/lib/grafana --publish 80:3000 --env "GF_SERVER_ROOT_URL=http://monitoring.alphanet.dev.mesg.com" --env "GF_AUTH_ANONYMOUS_ENABLED=true" --env "GF_AUTH_ANONYMOUS_ORG_NAME=MESG Foundation" grafana/grafana
```

## UIs
- __Prometheus:__ http://monitoring.alphanet.dev.mesg.com:9090

- __Grafana:__ http://monitoring.alphanet.dev.mesg.com

## TM monitoring:

```bash
docker run --network=mesg-tendermint -it --rm -p "26670:26670" tendermint/monitor engine:26657
```

Or as service:
```bash
docker service create --name tm-monitor --network mesg-tendermint tendermint/monitor engine:26657
docker service logs tm-monitor
```

# Security

By default, the cli start the Engine with published port `50052`. To prevent anyone to interact with the Engine, run:
```bash
docker service update --publish-rm published=50052,target=50052 engine
```

