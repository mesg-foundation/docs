# Task

This type defines the task to execute of a given instance of a service.

By default, the task's inputs are the previous step's outputs.
It can be customized by defining the `inputs` parameter to reference the outputs of any previous steps.

## Definition

<param-table :parameter="{
  fields: [{
    name: 'type',
    fullType: '&quot;task&quot;'
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
    name: 'taskKey',
    description: 'Key of the task to execute',
    fullType: 'string'
  }, {
    name: 'inputs',
    description: '(optional) Task\'s inputs. If not defined, inputs are the previous step\'s outputs',
    fullType: 'map&lt;string, Input&gt;'
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

## Input

Inputs can be any of the following type:
- `string`
- `bool`
- `number`
- `array`
- `object`
- `reference`

### Constant

The types `string`, `bool` and `number` are constant and lets you hardcode a value.

#### Example
```yaml
inputs:
  stringInput: "Input1 to the task"
  numberInput: 10
  booleanInput: true
```

### Composable

The types `array` and `object` are composable. They can contain data of any types including other composable types.
- An `array` of `array` of `string`. Eg: `[["foo", "bar"], [""]]`
- An `object` with another `object` that contains an `array` of `object` data. Eg: `{ a: { b: [{ c: "" }] } }`

#### Examples
```yaml
objectInput:
  numberInput: 10
  booleanInput: true
```
```yaml
arrayInput:
  - foo
  - bar
```

### Reference

The reference type allows access to the data of a previous result or the previous step of a process.
The reference is a special object that must contain the attribute `key` and, optionally, the parameter `stepKey`.

<param-table :parameter="{
  fields: [{
    name: 'stepKey',
    description: '(optional) Key of the step to reference (defined with the attribute &lt;code&gt;key&lt;/code&gt; of the step). If not defined, the previous step is used',
    fullType: 'string'
  }, {
    name: 'key',
    description: 'Path to the value of the to reference',
    fullType: 'string'
  }]
}" :types="{}" />

The parameter `key` is the path of data to access.
To write a path, you need to follow a simplified json path format:
- `.` to access a data in an object.
- `[INDEX]` to access an element in an array at the index `INDEX`. (You might get runtime error if your index is out of bounds).

#### Examples
  - `foo.bar`: Access the variable `bar` in the object `foo`.
  - `foo[0]`: Access the first element of the array `foo`.
  - `foo[0].bar[1]`: Access the second element of the array `bar` contained in the first element of the array `foo`.
  - `foo[0][1]`: Access the second element in the first element of the array `foo`.

## Example
<<< @/guide/process/steps/task.yml