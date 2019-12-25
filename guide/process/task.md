# Task

This type defines which service's task to execute.

By default, the task's inputs are the previous step's outputs. Can be customized by mapping the outputs of any previous steps.

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
    description: 'Task key to execute.',
    fullType: 'string'
  }, {
    name: 'inputs',
    description: '(optional) Task\'s inputs. If not defined, inputs are the previous step\'s outputs.',
    fullType: 'map&lt;string, Input&gt;'
  }]
}" :types="{}" />

#### Input

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
```yaml
key: erc20-notification
steps:
  # ...
  - type: task
    instanceHash: "H74Qqq8nT5JZ9GSJmuSWLN5benWZPkUb5pYcvQLsoZX"
    taskKey: taskY
    inputs:
      inputA: "Input1 to the task"
      # or
      inputB:
        stepKey: taskX
        key: taskZ
  # ...
```