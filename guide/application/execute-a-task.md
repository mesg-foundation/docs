# Execute a task

## Execute a Service's task

To execute a task, Applications need to connect to the Engine through [gRPC](https://grpc.io/) and use the [Protocol Buffers definition](https://github.com/mesg-foundation/core/blob/master/protobuf/coreapi/api.proto). The Engine will reply with an `executionID`that identifies the task's execution. To get the output of the task's execution, the Application has to listen for an [execution output.](./listen-for-events.md#listen-for-task-execution-outputs)

<tabs>
<tab title="Request" vp-markdown>

### `Core.ExecuteTask`

| **Name** | **Type** | **Required** | **Description** |
| --- | --- | --- | --- |
| **serviceId** | `String` | Required | ID of the service. |
| **taskKey** | `String` | Required | The task's key defined in the [service file](/guide/service/service-file.md). |
| **inputData** | `String` | Required | The task's inputs in JSON format. |
| **executionTags** | `String[]` | Optional | A list of tags to associate with the execution |

```json
{
  "serviceID": "027107ba9454e44bd7aaaa9922edbe445789092a",
  "taskKey": "taskX",
  "inputData": "{\"inputX\":\"input value\"}",
  "executionTags": ["foo", "bar"]
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
const mesg = require('mesg-js').application()

mesg.executeTask({
  serviceID: "SERVICE_ID",
  taskKey: "taskX",
  inputData: JSON.stringify({
    inputX: "input value"
  })
}).then((reply) => {
  console.log(reply.executionID)
}).catch((err) => {
  console.error('an error occurred while executing task:', err.message)
})
```

[See the MESG.js library for additional documentation](https://github.com/mesg-foundation/mesg-js/tree/master#execute-task)

</tab>

<tab title="Go" vp-markdown>

```go
package main

import (
	"context"
	"encoding/json"
	"log"

	"github.com/mesg-foundation/core/protobuf/coreapi"
	"google.golang.org/grpc"
)

func main() {
	connection, err := grpc.Dial(":50052", grpc.WithInsecure())
	if err != nil {
		log.Panic(err)
	}
	client := coreapi.NewCoreClient(connection)

  inputData, err := json.Marshal(map[string]string{
    "inputX": "input value",
  })
  if err != nil {
    log.Panic(err)
  }
  reply, err := client.ExecuteTask(context.Background(), &coreapi.ExecuteTaskRequest{
    ServiceID: "SERVICE_ID",
    TaskKey:   "taskX",
    InputData: string(inputData),
  })
  if err != nil {
    log.Panic(err)
  }
  log.Println("execution reply", reply)
}

```

[See the Core API for additional documentation](https://docs.mesg.com/api/core.html#core-api)

</tab>
</tabs>

::: tip Get Help
You need help ? Check out the <a href="https://forum.mesg.com" target="_blank">MESG Forum</a>.
