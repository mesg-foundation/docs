# Trigger

The first step must be a trigger that listens for a specific event or result of a task to start the process.

## Event
<param-table :parameter="{
  fields: [{
    name: 'key',
    description: '(optional) Key to identify this step.',
    fullType: 'string'
  }, {
    name: 'instanceHash',
    description: 'Hash of the service\'s instance.',
    fullType: 'string'
  }, {
    name: 'eventKey',
    description: 'Event key to listen to.',
    fullType: 'string'
  }]
}" :types="{}" />

## Result
<param-table :parameter="{
  fields: [{
    name: 'key',
    description: '(optional) Key to identify this step.',
    fullType: 'string'
  }, {
    name: 'instanceHash',
    description: 'Hash of the service\'s instance.',
    fullType: 'string'
  }, {
    name: 'taskKey',
    description: 'Task\'s key of the result to listen to.',
    fullType: 'string'
  }]
}" :types="{}" />

## Example
```yaml
key: erc20-notification
steps:
  - type: trigger
    instanceHash: "H74Qqq8nT5JZ9GSJmuSWLN5benWZPkUb5pYcvQLsoZX"
    eventKey: eventX # listen to the event with the key `eventX`
    # or
    taskKey: taskX # listen to the result of the task with the key `taskX`
  # ...
```

::: warning
A process has only one trigger and it must be within the first step.
:::
