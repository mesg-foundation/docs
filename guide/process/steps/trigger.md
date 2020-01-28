# Trigger

A trigger listens for a specific event or result from a service and will start the process when a matching event or a task's result is emitted.
This trigger should be the first step of the process and only one trigger is possible per process.

A trigger can be:
### Service's event
By setting the parameter `eventKey`, the process will be triggered every time the service emits the event defined by `eventKey`.
### Task's result
By setting the parameter `taskKey`, the process will be triggered every time the service finishes to execute the task `taskKey`.

## Definition
<param-table :parameter="{
  fields: [{
    name: 'type',
    fullType: '&quot;trigger&quot;'
  }, {
    name: 'key',
    description: '(optional) Key to identify this step',
    fullType: 'string'
  }, {
    name: 'instanceHash',
    description: 'Hash of the service\'s instance',
    fullType: 'string'
  }, {
    name: 'instance',
    description: 'Information about the instance to run. (Ignored if &lt;code&gt;instanceHash&lt;/code&gt; is set)',
    fullType: 'Instance'
  }, {
    name: 'eventKey',
    description: 'Event\'s key to listen to. (only if &lt;code&gt;taskKey&lt;/code&gt; is not set)',
    fullType: 'string'
  }, {
    name: 'taskKey',
    description: 'Task\'s key of the result to listen to. (only if &lt;code&gt;eventKey&lt;/code&gt; is not set)',
    fullType: 'string'
  }]
}" :types="{
  Instance: {
    fields: [{
      name: 'src',
      description: 'Source of the service to deploy (only when &lt;code&gt;service&lt;/code&gt; is not set)',
      fullType: 'string'
    }, {
      name: 'service',
      description: 'Service hash of the service to deploy (only when &lt;code&gt;src&lt;/code&gt; is not set)',
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
