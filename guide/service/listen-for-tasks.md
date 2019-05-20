# Listen for Tasks

## Why listen for tasks?

Services need to receive a command from the Engine in order to execute any desired task. Every time a command is received, it will ensure that the sender is the Engine, then it will check if it can handle the command, and if so, it will execute it. Once executed, it will reply to the Engine with the result of the command.

## Steps to follow

To implement tasks in your Service, you'll need to :

* [Add the task definition](#task-definitions) in the Service's [`mesg.yml`](service-file.md) file
* [Listen for task's execution](#listen-for-task-executions) from the Engine
* [Submit the outputs](#submit-outputs-of-task-executions) of the task

## Task definitions

The first step is to declare the tasks that the service will be able to execute in the service's [`mesg.yml`](service-file.md) file. The events should be indexed by their ID and should describe the following attributes :

| **Attribute** | **Type** | **Default** | **Description** |
| --- | --- | --- | --- | --- | --- |
| **name** | <span class="type">String</span> | `id` | If the name of the task is not set, the name will be the ID of the task. |
| **description** | <span class="type">String</span> | `""` | Description of the task: what the task is doing and why it is useful. |
| **inputs** | <span class="type">map&lt;id,[Parameter](listen-for-tasks.md#parameter-input-output)&gt;</span> | `{}` | Map of inputs that the task needs in order to be executed. |
| **outputs** | <span class="type">map&lt;id,[Outputs](listen-for-tasks.md#outputs)&gt;</span> | `{}` | Map of outputs that the task will emit. The task can declare multiple outputs but can only submit one output per execution. |

### Outputs

| **Attribute** | **Type** | **Default** | **Description** |
| --- | --- | --- | --- |
| **name** | <span class="type">String</span> | `id` | Name of the output. The default is the ID. |
| **description** | <span class="type">String</span> | `""` | A description of the output: what kind of output, and how is it useful. |
| **data** | <span class="type">map&lt;id,[Parameter](listen-for-tasks.md#parameter-input-output)&gt;</span> | `{}` | Map of the data  the output will return. |

### Parameter (Input/Output)

| **Attribute** | **Type** | **Default** | **Description** |
| --- | --- | --- | --- | --- |
| **name** | <span class="type">String</span> | `id` | Name or the parameter. The default is the ID. |
| **description** | <span class="type">String</span> | `""` | Description of the parameter. |
| **type** | <span class="type">[Type](listen-for-tasks.md#type-of-parameter)</span> | `String` | Type of the parameter. |
| **object** | <span class="type">[Parameter](listen-for-tasks.md#parameter-input-output)</span> | `{}` | Nested parameters. Parameters can contain child parameters. It can only be defined when `type` is `Object`. |
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
        description: "Foo is a string"
        type: String
        optional: false
      inputY:
        name: "Input y"
        description: "Bar is an optional array of boolean"
        type: Boolean
        optional: true
        repeated: true
    outputs:
      outputX:
        name: "OutputX"
        description: "Output X"
        data:
          foo:
            name: "Output data x"
            description: "Description about output data x"
            type: String
          bar:
            name: "Output data y"
            description: "Description about output data y"
            type: Boolean
      outputY:
        ...
...
```

## Listen for task executions

To listen for task to execute, the Service needs to open a stream with the Engine using the [Protobuffer definition](https://github.com/mesg-foundation/core/blob/master/protobuf/serviceapi/api.proto) and [gRPC](https://grpc.io/). Every task received on the stream needs to be executed by the Service and the output [submitted](#submit-outputs-of-task-executions) back to the Engine.

::: tip
Consider listening for tasks when your service is ready. If your service needs to synchronize some data first, you should wait for this synchronization before listening for tasks.
:::

<tabs>
<tab title="Request" vp-markdown>

### `Service.ListenTask`

| **Name** | **Type** | **Required** | **Description** |
| --- | --- | --- | --- |
| **token** | `String` | Required | The token given by the Engine as environment variable `MESG_TOKEN` |

```json
{
    "token": "TOKEN_FROM_ENV"
}
```

</tab>

<tab title="Stream Reply" vp-markdown>

| **Name** | **Type** | **Description** |
| --- | --- | --- | --- | --- |
| **executionID** | `String` | A unique ID for the task that allows you to track the result in an asynchronous way |
| **taskKey** | `String` | Key of the task to execute \(as in your `mesg.yml` file\) |
| **inputData** | `String` | Inputs of the task serialized in JSON |

```json
{
    "executionID": "xxxxxx",
    "taskKey": "taskX",
    "inputData": "{\"inputX\":\"Hello world!\",\"inputY\":true}"
}
```

</tab>
</tabs>

## Submit outputs of task executions

Once the task execution is finished, the Service has to send the outputs of the execution back to the Engine using the [Protobuffer definition](https://github.com/mesg-foundation/core/blob/master/protobuf/serviceapi/api.proto) and [gRPC](https://grpc.io/). Only one output can be submitted per execution even if the task has declared multiple outputs.

<tabs>
<tab title="Request" vp-markdown>

### `Service.SubmitResult`

| **Name** | **Type** | **Required** | **Description** |
| --- | --- | --- | --- |
| **executionID** | `String` | required | The `executionID` received from the [listen](listen-for-tasks.md#listen-for-task-executions) stream. |
| **outputKey** | `String` | required | The ID of the output as defined in the [output's declaration](#task-definitions). |
| **outputData** | `String` | required | The output's data encoded in JSON. The data should match the one defined in the [output's declaration](#task-definitions). |

```json
{
    "executionID": "xxxxxx",
    "outputKey": "outputX"
    "outputData": "{\"foo\":\"super result\",\"bar\":true}"
}
```

</tab>

<tab title="Reply" vp-markdown>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| **executionID** | `String` | The ID of the execution. |

```json
{
    "executionID": "xxxxxx"
}
```

</tab>
</tabs>

## Examples

<tabs>
<tab title="Node" vp-markdown>

```javascript
const mesg = require('mesg-js').service()

mesg.listenTask({
  // handler function of taskX
  taskX: (inputs, outputs) => {
    outputs.outputX({
      foo: inputs.inputX,
      bar: true
    })
  },
})
  .on('error', (error) => {
    console.error(error)
  })
```

[See the MESG.js library for additional documentation](https://github.com/mesg-foundation/mesg-js/tree/master#service)

</tab>

<tab title="Go" vp-markdown>

```go
package main

import (
	"github.com/mesg-foundation/core/client/service"
)

type taskXInputs struct {
	InputX string `json:"inputX"`
	InputY []bool `json:"inputY"`
}

type taskXOutputX struct {
	Foo string `json:"foo"`
	Bar bool   `json:"bar"`
}

func main() {
	s, _ := service.New()

	s.Listen(
		service.Task("taskX", func(execution *service.Execution) (string, interface{}) {
			var inputs taskXInputs
			execution.Data(&inputs)

			return "outputX", taskXOutputX{
				Foo: inputs.InputX,
				Bar: true,
			}
		}),
	)
}
```

[See the Go Service package for additional documentation](https://godoc.org/github.com/mesg-foundation/core/client/service)

</tab>
</tabs>

::: tip Get Help
You need help ? Check out the <a href="https://forum.mesg.com" target="_blank">MESG Forum</a>.
