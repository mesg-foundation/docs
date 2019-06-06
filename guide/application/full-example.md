# Full example

<tabs>
<tab title="Node" vp-markdown>

```javascript
const mesg = require('mesg-js').application()

// When SERVICE_EVENT_ID emits event "eventX"
// then execute "taskX" from SERVICE_TASK_ID 
mesg.listenEvent({
  serviceID: SERVICE_EVENT_ID,
  eventFilter: 'eventX' // optional
})
  .on('data', (event) => {
    console.log('event received')
    mesg.executeTask({
      serviceID: SERVICE_TASK_ID,
      taskKey: 'taskX',
      inputData: JSON.stringify({ foo: 'bar' })
    }).catch((err) => {
      console.error('an error occurred while executing task:', err.message)
    })
  })
  .on('error', (err) => {
    console.error('an error occurred while listening for events:', err.message)
  })

// When SERVICE_TASK_ID send the result of taskX
// then execute "taskB" from SERVICE_TASK2_ID
mesg.listenResult({
  serviceID: SERVICE_TASK_ID,
  taskFilter: 'taskX' // optional
})
  .on('data', (result) => {
    console.log('result received')
    mesg.executeTask({
      serviceID: SERVICE_TASK2_ID,
      taskKey: 'taskB',
      inputData: JSON.stringify({ hello: "world" })
    }).catch((err) => {
      console.error('an error occurred while executing task:', err.message)
    })
  })
  .on('error', (err) => {
    console.error('an error occurred while listening for results:', err.message)
  })

console.log('application is running and listening for events and results')
```

[See the MESG.js library for additional documentation](https://github.com/mesg-foundation/mesg-js/tree/master#application)

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
			ServiceID:   "SERVICE_EVENT_ID",
			EventFilter: "eventX", // optional
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
			inputData, err := json.Marshal(map[string]string{"foo": "bar"})
			if err != nil {
				log.Panic(err)
			}
			reply, err := client.ExecuteTask(context.Background(), &coreapi.ExecuteTaskRequest{
				ServiceID: "SERVICE_TASK_ID",
				TaskKey:   "taskX",
				InputData: string(inputData),
			})
			if err != nil {
				log.Panic(err)
			}
			log.Println("execution reply", reply)
		}
	}()

	go func() {
		stream, err := client.ListenResult(context.Background(), &coreapi.ListenResultRequest{
			ServiceID:  "SERVICE_TASK_ID",
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
			inputData, err := json.Marshal(map[string]string{"hello": "world"})
			if err != nil {
				log.Panic(err)
			}
			reply, err := client.ExecuteTask(context.Background(), &coreapi.ExecuteTaskRequest{
				ServiceID: "SERVICE_TASK2_ID",
				TaskKey:   "taskB",
				InputData: string(inputData),
			})
			if err != nil {
				log.Panic(err)
			}
			log.Println("execution reply", reply)
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
