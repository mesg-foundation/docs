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

Inputs can be any type of data:
- `string`
- `bool`
- `number`
- `array`
- `object`
- `reference`

### Composable type (`array` or `object`)

`array` and `object` are composable so they can contains data of any types including other composable types.

For example:
- An `array` of `array` of `string` (eg: `[["foo", "bar"], [""]]`)
- An `object` with another `object` that contains an `array` of `object` data (eg: `{ a: { b: [{ c: "" }] } }`)...

### Reference type

A reference let you access the data of a previous result or the previous step of your process.
The reference is a special object that contains the attribute `key` and optionally `stepKey`.

<param-table :parameter="{
  fields: [{
    name: 'stepKey',
    description: '(optional) Key of the step to reference (defined with the attribute &lt;code&gt;key&lt;/code&gt; of the step). If not defined, the previous step is used.',
    fullType: 'string'
  }, {
    name: 'key',
    description: 'Path to the value of the output needed.',
    fullType: 'string'
  }]
}" :types="{}" />

They `key` is the path of data we want to access. To write the path, you need to follow a simplified json path format:
- `.` to access a data in an object
- `[INDEX]` to access an element in an array at the index `INDEX`. (You might get runtime error if your index is out of bounds)

#### Examples:
  - `foo.bar`: Access the variable `bar` in the object `foo`.
  - `foo[0]`: Access the first element of the array `foo`.
  - `foo[0].bar[1]`: Access the second element of the array `bar` contained in the first element of the array `foo`.
  - `foo[0][1]`: Access the second element in the first element of the array `foo`.

## Example
<<< @/guide/process/steps/task.yml