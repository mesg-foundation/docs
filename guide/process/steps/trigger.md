# Trigger

A trigger let you listen for a specific event or result from a service. This trigger should be the first step of your process and should be unique per process.

This trigger can be either:
- A service's event: Using the `eventKey`, your process will be triggered every time the service emits the event defined by `eventKey`.
- A task's result: Using the `taskKey`, your process will be triggered every time the service finishes to process the task `taskKey`.

## Definition
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
    name: 'instance',
    description: 'Information about the instance to run. (Ignored if instanceHash is present)',
    fullType: 'Instance'
  }, {
    name: 'eventKey',
    description: 'Event key to listen to. (only if taskKey is not present)',
    fullType: 'string'
  }, {
    name: 'taskKey',
    description: 'Task\'s key of the result to listen to. (only if eventKey is not present)',
    fullType: 'string'
  }]
}" :types="{
  Instance: {
    fields: [{
      name: 'src',
      description: 'Source of the service to deploy (only when service not set)',
      fullType: 'string'
    }, {
      name: 'service',
      description: 'Service hash of the service to deploy (only when src not set)',
      fullType: 'string'
    }, {
      name: 'env',
      description: 'Environment variable to use while deploying the service',
      label: 'repeated',
      fullType: 'string'
    }]
  }
}" />

## Example
<<< @/guide/process/steps/trigger.yml

::: warning
A process has only one trigger and it must be within the first step.
:::
