# Process file

A process file describes the connections between events and tasks of services with a step-by-step system.

It is structured in the following way:

<param-table :parameter="{
  fields: [{
    name: 'key',
    description: 'Key to identify the process.',
    fullType: 'string'
  }, {
    name: 'steps',
    label: 'repeated',
    description: 'Steps to execute.',
    fullType: 'Step'
  }]
}" :types="{}" />

## Steps

Each step is one the following types:

- [Trigger](#trigger): listen to an event or a task's result
- [Task](#task): execute a task
- [Filter](#filter): condition on the data

### Trigger

The first step must be a trigger that listens for a specific event or result of a task to start the process.

#### Event
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

#### Result
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

::: warning
A process has only one trigger and it must be within the first step.
:::

### Task

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

##### Constant

A constant lets you hardcode a value.

The value can be of any type: `string`, `object`, `array`, `bool`, `number`.

##### Reference

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

### Filter

Apply one or multiple conditions on the previous step's outputs.

All conditions should match to continue to the next step.

<param-table :parameter="{
  fields: [{
    name: 'conditions',
    description: 'Key-value map where the key references a data of the previous steps outputs and the value is the expected matching value.',
    fullType: 'map&lt;key, string&gt;'
  }]
}" :types="{}" />

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

::: warning
To support this feature, you need to compile the process with the [`--dev` flag](deployment.md#development-mode).
:::

## Environmental variable

You can override any value in the process file during the compilation by using the following syntax:

```
$(env:XXXX)
```

Where `XXXX` is the name of the variable that you can override while running the compile command with the flag `--env XXXX=value`.
