# Process file

A process file is a YAML definition that describes the connections between events and tasks of services with a step-by-step system.

It is structured in the following way:

<param-table :parameter="{
  fields: [{
    name: 'name',
    description: 'Name of the process.',
    fullType: 'string'
  }, {
    name: 'steps',
    label: 'repeated',
    description: 'Steps to execute.',
    fullType: 'Step'
  }]
}" :types="{}" />

Each process should have the following steps:

- Exactly one [trigger](./trigger) that should be the first step of the process
- One or multiple [tasks](./tasks) that will execute a task
- Zero or multiple [filters](./filters) that will stop the execution if the filter doesn't match

<nav class="cards">
  <a href="./trigger">
    <img src="/trigger.svg">
    <h4>Trigger</h4>
    <p>React to a specific event</p>
  </a>
  <a href="./task">
    <img src="/task.svg">
    <h4>Task</h4>
    <p>Execute a service's task</p>
  </a>
  <a href="./filter">
    <img src="/filter.svg">
    <h4>Filter</h4>
    <p>Accept only specific data</p>
  </a>
</nav>

```yaml
name: My process
steps: 
  - ... # trigger
  - ... # filter
  - ... # task
  - ... # task
  - ... # filter
  - ... # task
```


## Instance resolution

[Triggers](#trigger) and [tasks](#task) must have a specific `instanceHash` but this can be resolved automatically by the compiler if it replaced by an object `instance` containing the following:

<param-table :parameter="{
  fields: [{
    name: 'service',
    description: 'Service\'s sid or hash to start. Cannot be used with &lt;code&gt;src&lt;/code&gt;.',
    fullType: 'string'
  }, {
    name: 'src',
    description: 'Path of the service to deploy and start. Local and remote path are supported. Cannot be used with &lt;code&gt;service&lt;/code&gt;.',
    fullType: 'string'
  }, {
    name: 'env',
    label: 'repeated',
    description: 'List of environment variables to inject in the instance. Should respect the format: &lt;code&gt;VARIABLE=value&lt;/code&gt;.',
    fullType: 'string'
  }]
}" :types="{}" />

#### Example
```yaml
key: erc20-notification
steps:
  - type: trigger
    instance:
      src: https://github.com/mesg-foundation/service-ethereum-erc20
      env:
        - PROVIDER_ENDPOINT=$(env:PROVIDER_ENDPOINT)
    eventKey: transfer
  - type: task
    instance:
      service: "serviceX" # Start the service with sid or hash value `serviceX`
      env:
          - SENDGRID_API_KEY=$(env:SENDGRID_API_KEY)
    taskKey: send
  - type: task
    instanceHash: "H74Qqq8nT5JZ9GSJmuSWLN5benWZPkUb5pYcvQLsoZX"
    taskKey: task1
  # ...
```

::: warning
To support this feature, you need to compile the process with the [`--dev` flag](deployment.md#development-mode).
:::

## Example

This is an example of process-file.

```yaml
key: erc20-notification
steps:
  - type: trigger
    instance:
      src: https://github.com/mesg-foundation/service-ethereum-erc20
      env:
        - PROVIDER_ENDPOINT=$(env:PROVIDER_ENDPOINT)
    eventKey: transfer
  - type: task
    instanceHash: "H74Qqq8nT5JZ9GSJmuSWLN5benWZPkUb5pYcvQLsoZX"
    taskKey: taskY
    inputs:
      inputA: "Input1 to the task"
      # or
      inputB:
        stepKey: taskX
        key: taskZ
  - type: filter
    conditions:
      contractAddress: "0x420167d87d35c3a249b32ef6225872fbd9ab85d2"
  - type: task
    instance:
      src: ./convert
    taskKey: email
  - type: task
    instance:
      src: https://github.com/mesg-foundation/service-email-sendgrid
      env:
        - SENDGRID_API_KEY=$(env:SENDGRID_API_KEY)
    taskKey: send
```

## Environmental variable

You can override any value in the process file during the compilation by using the following syntax:

```
$(env:XXXX)
```

Where `XXXX` is the name of the variable that you can override while running the compile command with the flag `--env XXXX=value`.
