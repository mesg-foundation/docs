# Listen for events

## Listening for events from Services

To listen for events, the Application needs to open a stream with the Engine with [gRPC](https://grpc.io/) using the [Protocol Buffers definition](https://github.com/mesg-foundation/core/blob/master/protobuf/coreapi/api.proto). When opening the stream, the Application listens to the Service. It can listen to many Services at the same time.

<tabs>
<tab title="Request" vp-markdown>

### `Core.ListenEvent`

| **Name** | **Type** | **Required** | **Description** |
| --- | --- | --- | --- |
| **serviceID** | `String` | Required | ID of the Service that you want to listen to. |
| **eventFilter** | `String` | Optional | Only listens for this given event ID. |

```json
{
  "serviceID": "f4923d9de32f211a1e3fbd54399752c305e2db72",
  "eventFilter": "eventIDToOnlyListenTo"
}
```

</tab>

<tab title="Stream Reply" vp-markdown>

| **Name** | **Type** | **Description** |
| --- | --- | --- | --- |
| **eventKey** | `String` | The event's key defined in the [Service file](/guide/service/service-file.md). |
| **eventData** | `String` | The event's data in JSON format. |

```json
{
  "eventKey": "eventX",
  "eventData": "{\"dataX\": \"event data\"}"
}
```

</tab>
</tabs>

### Example

<tabs>
<tab title="Node" vp-markdown>

```javascript
const mesg = require('mesg-js').application()

mesg.listenEvent({
  serviceID: 'SERVICE_ID',
  eventFilter: 'eventX', // optional. Only listen to event key 'eventX'
})
  .on('data', (event) => {
    console.log('event received', event)
  })
  .on('error', (err) => {
    console.error('an error occurred while listening for events:', err.message)
  })

console.log('application is running and listening for events')
```

[See the MESG.js library for additional documentation](https://github.com/mesg-foundation/mesg-js/tree/master#listen-events)

</tab>

<tab title="Go" vp-markdown>

```go
package main

import (
	"context"
	"encoding/json"
	"log"

	"github.com/mesg-foundation/core/protobuf/coreapi"
	"github.com/mesg-foundation/core/x/xsignal"
	"google.golang.org/grpc"
)

func main() {
	connection, err := grpc.Dial(":50052", grpc.WithInsecure())
	if err != nil {
		log.Panic(err)
	}
	defer func() {
		log.Println("closing connection...")
		connection.Close()
	}()
	client := coreapi.NewCoreClient(connection)
	log.Println("connected to core")

	go func() {
		stream, err := client.ListenEvent(context.Background(), &coreapi.ListenEventRequest{
			ServiceID:   "SERVICE_ID",
			EventFilter: "eventX", // optional. Only listen to event key 'eventX'
		})
		if err != nil {
			log.Panic(err)
		}

		for {
			event, err := stream.Recv()
			if err != nil {
				log.Panic(err)
			}
			log.Println("event received", event)
		}
	}()

	<-xsignal.WaitForInterrupt()
}

```

[See the Core API for additional documentation](https://docs.mesg.com/api/core.html#core-api)

</tab>
</tabs>

## Listen for task execution outputs

The execution of tasks can take a long time to finish depending on the action they are completing, so outputs are sent back asynchronously. To listen for task execution's outputs, applications need to open a stream with the Engine through [gRPC](https://grpc.io/) and use the [Protocol Buffers definition](https://github.com/mesg-foundation/core/blob/master/protobuf/coreapi/api.proto).

::: warning
Outputs are sent asynchronously. Make sure that the Application listens for outputs before it executes a task, otherwise it will miss the outputs.
:::

<tabs>
<tab title="Request" vp-markdown>

### `Core.ListenResult`

| **Name** | **Type** | **Required** | **Description** |
| --- | --- | --- | --- |
| **serviceID** | `String` | Required | ID of the Service. |
| **taskFilter** | `String` | Optional | Only listens for this given task ID. |
| **tagFilters** | `String[]` | Optional | The list of tags to filter. This is a "match all" list. All tags should be included when calling function `ExecuteTask` to match. |

```json
{
  "serviceID": "f4923d9de32f211a1e3fbd54399752c305e2db72",
  "taskFilter": "taskIDToOnlyListenTo",
  "tagFilters": ["tagX=1"]
}
```

</tab>

<tab title="Stream Reply" vp-markdown>

| **Name** | **Type** | **Description** |
| --- | --- | --- | --- | --- | --- |
| **executionHash** | `String` | The hash of the execution. |
| **taskKey** | `String` | The key of the task as defined in the [service file](/guide/service/service-file.md). |
| **outputData** | `String` | The data returned by the task serialized in JSON. |
| **executionTags** | `String[]` | List of tags associated to this execution |
| **error** | `String` | The execution's error if something went wrong |

```json
{
  "executionHash": "xxxxx",
  "taskKey": "taskX",
  "outputData": "{\"outputValX\": \"result of execution\"}",
  "executionTags": ["foo", "bar"],
  "error": ""
}
```

</tab>
</tabs>

### Examples

<tabs>
<tab title="Node" vp-markdown>

```javascript
const mesg = require('mesg-js').application()

mesg.listenResult({
  serviceID: 'SERVICE_ID'
})
  .on('data', (result) => {
    console.log('result received', result)
    if (result.error) {
      console.error('an error occurred:', result.error)
    }
  })
  .on('error', (err) => {
    console.error('an error occurred while listening for results:', err.message)
  })

console.log('application is running and listening for results')
```

[See the MESG.js library for additional documentation](https://github.com/mesg-foundation/mesg-js/tree/master#listen-results)

</tab>

<tab title="Go" vp-markdown>

```go
package main

import (
	"context"
	"encoding/json"
	"log"

	"github.com/mesg-foundation/core/protobuf/coreapi"
	"github.com/mesg-foundation/core/x/xsignal"
	"google.golang.org/grpc"
)

func main() {
	connection, err := grpc.Dial(":50052", grpc.WithInsecure())
	if err != nil {
		log.Panic(err)
	}
	defer func() {
		log.Println("closing connection...")
		connection.Close()
	}()
	client := coreapi.NewCoreClient(connection)
	log.Println("connected to core")

	go func() {
		stream, err := client.ListenResult(context.Background(), &coreapi.ListenResultRequest{
			ServiceID:  "SERVICE_ID",
			TaskFilter: "taskX", // optional
		})
		if err != nil {
			log.Panic(err)
		}

		for {
			result, err := stream.Recv()
			if err != nil {
				log.Panic(err)
			}
			log.Println("result received", result)
			if result.error != "" {
				log.Println("an error occurred", result.error)
			}
		}
	}()

	<-xsignal.WaitForInterrupt()
}

```

[See the Core API for additional documentation](https://docs.mesg.com/api/core.html#core-api)

</tab>
</tabs>

::: tip Get Help
You need help ? Check out the <a href="https://forum.mesg.com" target="_blank">MESG Forum</a>.
