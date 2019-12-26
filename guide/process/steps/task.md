# Task

This type defines which service's task to execute.

By default, the task's inputs are the previous step's outputs. Can be customized by mapping the outputs of any previous steps.

## Definition

<param-table :parameter="{
  fields: [{
    name: 'type',
    fullType: '&quot;task&quot;'
  }, {
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
    name: 'taskKey',
    description: 'Task key to execute.',
    fullType: 'string'
  }, {
    name: 'inputs',
    description: '(optional) Task\'s inputs. If not defined, inputs are the previous step\'s outputs.',
    fullType: 'map&lt;string, Input&gt;'
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

## Input

Each input can be:
- A constant.
- A reference to the outputs of a previous step in the process.

### Constant

A constant lets you hardcode a value.

The value can be of any type: `string`, `object`, `array`, `bool`, `number`.

### Reference

Reference the outputs of a previous step.

<param-table :parameter="{
  fields: [{
    name: 'stepKey',
    description: '(optional) Key of the previous step (defined with the attribute &lt;code&gt;key&lt;/code&gt; of the step). If not defined, the previous step is used.',
    fullType: 'string'
  }, {
    name: 'key',
    description: 'Key of the step\'s outputs to reference.',
    fullType: 'string'
  }]
}" :types="{}" />

## Example
<<< @/guide/process/steps/task.yml