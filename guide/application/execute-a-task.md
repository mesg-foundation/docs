# Execute a task

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
| **executionTags** | `String[]` | Optional | A list of tags to associate with the execution |

```json
{
  "serviceID": "027107ba9454e44bd7aaaa9922edbe445789092a",
  "taskKey": "taskX",
  "inputData": "{\"inputX\":\"input value\"}",
  "tags": ["foo", "bar"]
}
```

</tab>

<tab title="Reply" vp-markdown>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| **executionID** | `String` | The ID of the execution. |

```json
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
const MESG = require('mesg-js').application()

MESG.executeTask({
  serviceID: "027107ba9454e44bd7aaaa9922edbe445789092a",
  taskKey: "taskX",
  inputData: JSON.stringify({
    inputX: "input value"
  })
}, (err, reply) => {
  // handle response if needed
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
        ServiceID:  "027107ba9454e44bd7aaaa9922edbe445789092a",
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
