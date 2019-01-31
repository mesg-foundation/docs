# Execute a task

## Why execute a Service's task?

Applications can execute a Service's task, allowing you to reuse the maximum number of already-built logic and enjoy the MESG ecosystem.

## Execute a Service's task

To execute a task, Applications need to connect to Core through [gRPC](https://grpc.io/) and use the [Protobuffer definition](https://github.com/mesg-foundation/core/blob/master/protobuf/coreapi/api.proto). Core will reply with an `executionID`that identifies the task's execution. To get the output of the task's execution, the Application has to listen for an [execution output.](execute-a-task.md#listen-for-execution-outputs)

<tabs>
<tab title="Request" vp-markdown>

### `Core.ExecuteTask`

| **Name** | **Type** | **Required** | **Description** |
| --- | --- | --- | --- |
| **serviceId** | `String` | Required | ID of the service. |
| **taskKey** | `String` | Required | The task's key defined in the [service file](../service/service-file.md). |
| **inputData** | `String` | Required | The task's inputs in JSON format. |

```javascript
{
  "serviceID": "f4923d9de32f211a1e3fbd54399752c305e2db72",
  "taskKey": "taskX",
  "inputData": "{\"inputX\":\"input value\"}"
}
```

</tab>

<tab title="Reply" vp-markdown>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| **executionID** | `String` | The ID of the execution. |

```javascript
{
  "executionID": "xxxxx"
}
```

</tab>
</tabs>

### Examples

<tabs>
<tab title="Node" vp-markdown>

```javascript
const mesg = require('mesg-js').application()

mesg.executeTask({
  serviceID: SERVICE_TASK_ID,
  taskKey: "taskX",
  inputData: JSON.stringify({
    inputX: "input value"
  })
}).then((reply) => {
  console.log(reply.executionID)
}).catch((err) => {
  console.error(err)
})
```

</tab>

<tab title="Go" vp-markdown>

```go
package main

import (
    "context"
    "fmt"

    "github.com/mesg-foundation/core/api/core"
    "github.com/mesg-foundation/core/service"
    "google.golang.org/grpc"
)

func main() {
    connection, _ := grpc.Dial(":50052", grpc.WithInsecure())
    cli := core.NewCoreClient(connection)
    res, _ := cli.ExecuteTask(context.Background(), &core.ExecuteTaskRequest{
        ServiceID:  "f4923d9de32f211a1e3fbd54399752c305e2db72",
        TaskKey:  "taskX",
        InputData: "{\"inputX\":\"input value\"}",
    })
    fmt.Println(res.ExecutionID)
}
```

</tab>
</tabs>

::: tip Get Help
You need help ? Check out the <a href="https://forum.mesg.com" target="_blank">MESG Forum</a>.
