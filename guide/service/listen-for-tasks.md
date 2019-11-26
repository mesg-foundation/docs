# Listen for Tasks

## Why listen for tasks?

Services need to receive a command from the Engine in order to execute any desired task. Every time a command is received, it will ensure that the sender is the Engine, then it will check if it can handle the command, and if so, it will execute it. Once executed, it will reply to the Engine with the result of the command.

## Steps to follow

To implement tasks in your Service, you'll need to :

* [Add the task definition](#task-definitions) in the Service's [`mesg.yml`](service-file.md) file
* [Handle execution](#handle-executions) from the Engine

## Task definitions

The first step is to declare the tasks that the service will be able to execute in the service's [`mesg.yml`](service-file.md) file. The events should be indexed by their ID and should describe the following attributes :

| **Attribute** | **Type** | **Default** | **Description** |
| --- | --- | --- | --- | --- | --- |
| **name** | <span class="type">String</span> | `id` | If the name of the task is not set, the name will be the ID of the task. |
| **description** | <span class="type">String</span> | `""` | Description of the task: what the task is doing and why it is useful. |
| **inputs** | <span class="type">map&lt;id,[Parameter](listen-for-tasks.md#parameter)&gt;</span> | `{}` | Map of inputs that the task needs in order to be executed. |
| **outputs** | <span class="type">map&lt;id,[Outputs](listen-for-tasks.md#parameter)&gt;</span> | `{}` | Map of outputs that the task returns. |

### Parameter

| **Attribute** | **Type** | **Default** | **Description** |
| --- | --- | --- | --- | --- |
| **name** | <span class="type">String</span> | `id` | Name or the parameter. The default is the ID. |
| **description** | <span class="type">String</span> | `""` | Description of the parameter. |
| **type** | <span class="type">[Type](listen-for-tasks.md#type-of-parameter)</span> | `String` | Type of the parameter. |
| **object** | <span class="type">[Parameter](listen-for-tasks.md#parameter)</span> | `{}` | Nested parameters. Parameters can contain child parameters. It can only be defined when `type` is `Object`. |
| **optional** | <span class="type">Boolean</span> | `false` | If true, this parameter is considered as optional and might remain empty. |
| **repeated** | <span class="type">Boolean</span> | `false` | Define this parameter as an array of the type selected |

### Type of parameter

The parameter can be one of the following:

* `String`
* `Boolean`
* `Number`
* `Object`
* `Any`

### Example

Example of a task definition in a [`mesg.yml`](/guide/service/service-file.md) file :

```yaml
...
tasks:
  taskX:
    name: "Task X"
    description: "This is the task X"
    inputs:
      inputX:
        name: "Input x"
        description: "Input x is a string"
        type: String
        optional: false
      inputY:
        name: "Input y"
        description: "Input y is an optional array of boolean"
        type: Boolean
        optional: true
        repeated: true
    outputs:
      foo:
        name: "Output foo"
        description: "Description about output foo"
        type: String
      bar:
        name: "Output bar"
        description: "Description about output bar"
        type: Boolean
...
```

## Handle executions

The service have to call mesg.listenTask to start listening for task to execute by passing an object containing the tasks' key and function.

The task functions accept inputs as parameter and returns the outputs as object or Promise of object. The task function can throw an Error in case of error. The lib will catch it and send it to the MESG Engine.


```javascript
const Service = require('@mesg/service')
const mesg = new Service()

mesg.listenTask({
  taskX: async (inputs) => {
    // Function of the task 1
    // Can directly throw error
    if (inputs.inputX === undefined) {
      throw new Error('inputX is undefined')
    }
    // Return an object
    const response = await fetch('...')
    return {
      foo: response.foo,
      bar: true
    }
    return { foo: inputs.a + 'bar' }
  }
})
```

[See the @mesg/service library for additional documentation](https://github.com/mesg-foundation/js-sdk/blob/master/packages/service/README.md)

::: tip API definition
To see the API definition, check the [Execution API definition](../../api/execution.md).
:::

::: tip Get Help
You need help ? Check out the <a href="https://forum.mesg.com" target="_blank">MESG Forum</a>.
:::