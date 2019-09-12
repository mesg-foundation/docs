# Process file

A process file orchestrates the different connections between your services into steps.

The structure is the following:

<param-table :parameter="{
  fields: [{
    name: 'key',
    description: 'Key to identify your process.',
    fullType: 'string'
  }, {
    name: 'steps',
    label: 'repeated',
    description: 'Steps for the process to execute.',
    fullType: 'Step'
  }]
}" :types="{}" />

## Steps

Steps can have different types for a different purpose.

- [Trigger](#trigger): To listen a specific event or result
- [Task](#task): To execute a specific task
- [Filter](#filter): To filter specific data

### Trigger

The initial step that listens for a specific event or result to start the process.

This trigger is based on an event or a task's result.

#### Event
<param-table :parameter="{
  fields: [{
    name: 'key',
    description: '(optional) Key to identify this step.',
    fullType: 'string'
  }, {
    name: 'instanceHash',
    description: 'Hash of the instance of the service to listen.',
    fullType: 'string'
  }, {
    name: 'eventKey',
    description: 'Event to listen to.',
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
    description: 'Hash of the instance of the service to listen.',
    fullType: 'string'
  }, {
    name: 'taskKey',
    description: 'Task\'s result to listen to.',
    fullType: 'string'
  }]
}" :types="{}" />

::: warning
A process can only have one trigger.
:::

### Task

Task let you execute tasks of specific services based on the previous result or based on a specific mapping that you can define. Once defined, the MESG Engine process all the tasks on your behalf.

<param-table :parameter="{
  fields: [{
    name: 'key',
    description: '(optional) Key to identify this step',
    fullType: 'string'
  }, {
    name: 'instanceHash',
    description: 'Hash of the instance of the service to exectute.',
    fullType: 'string'
  }, {
    name: 'taskKey',
    description: 'Task key to execute.',
    fullType: 'string'
  }, {
    name: 'inputs',
    description: '(optional) Map specific inputs for the task. It will take the output of the previous step if not defined',
    fullType: 'map&lt;string, Input&gt;'
  }]
}" :types="{}" />

#### Task's input

Task's input can be:
A constant 
A reference to the data of a previous step of your process or a mix of both.

##### Constants

A constant lets you directly set the value you need as input. This value is used for every execution of a process.

The value can be of any type, `string`, `object`, `array`, `bool`, `number`.

##### Reference

A reference let you access the data of a task's result or trigger's event.

<param-table :parameter="{
  fields: [{
    name: 'stepKey',
    description: '(optional) Reference of the previous step (defined with the key attribute in your step). If empty the data of the previous step are used.',
    fullType: 'string'
  }, {
    name: 'key',
    description: 'Key to identify the output you want to reference.',
    fullType: 'string'
  }]
}" :types="{}" />

### Filter

Filters let you filter data from a trigger or a result of a task based on multiple conditions. All conditions should match to process to the next step.

<param-table :parameter="{
  fields: [{
    name: 'conditions',
    description: 'Map with the different values wanted.',
    fullType: 'map&lt;string, string&gt;'
  }]
}" :types="{}" />

## Instance resolution

[Triggers](#trigger) and [tasks](#task) needs to be attached to a specific `instanceHash`.

This `instanceHash` can be resolved automatically by the compiler if replaced by an object `instance` containing the following.

<param-table :parameter="{
  fields: [{
    name: 'service',
    description: 'Name or hash of the service to start. If &lt;code&gt;src&lt;/code&gt; is not set.',
    fullType: 'string'
  }, {
    name: 'src',
    description: 'Path of the service to deploy. Local and remote path are supported. If &lt;code&gt;service&lt;/code&gt; is not set.',
    fullType: 'string'
  }, {
    name: 'env',
    label: 'repeated',
    description: 'List of environment to inject in the instance with the format &lt;code&gt;VARIABLE=value&lt;/code&gt;',
    fullType: 'string'
  }]
}" :types="{}" />

::: warning
To support this feature, you need to compile your process with the `--dev` flag.
:::

## Environmental variable

You can override any value in your process file during the compilation by using the following format.

```
$(env:XXXX)
```

Where `XXXX` is the name of your variable that you can override while compiling using the flag `--env XXXX=my-value`.

::: tip
Use this every-time you need to set an environment. This way, you make sure that your credentials are safe.
:::